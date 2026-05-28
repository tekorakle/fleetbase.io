export function shouldGenerateFeatureImage({ dryRun, config }) {
  if (process.env.GENERATE_FEATURE_IMAGE === 'false') return false;
  if (dryRun && process.env.GENERATE_FEATURE_IMAGE_IN_DRY_RUN !== 'true') return false;
  return config.featureImage.enabledByDefault;
}

export async function generateFeatureImage(imageBrief, config, options = {}) {
  const apiKey = options.apiKey || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY. Add it as a GitHub Actions secret.');
  }

  const model = options.model || process.env.OPENAI_IMAGE_MODEL || config.featureImage.model;
  const response = await (options.fetchImpl || fetch)('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      prompt: imageBrief.prompt,
      n: 1,
      size: process.env.OPENAI_IMAGE_SIZE || config.featureImage.size,
      quality: process.env.OPENAI_IMAGE_QUALITY || config.featureImage.quality,
      output_format: config.featureImage.outputFormat,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `OpenAI image generation failed with status ${response.status}: ${body.slice(0, 500)}`,
    );
  }

  const payload = await response.json();
  const image = payload.data?.[0];

  if (image?.b64_json) {
    return {
      bytes: Buffer.from(image.b64_json, 'base64'),
      mimeType: `image/${config.featureImage.outputFormat}`,
      revisedPrompt: image.revised_prompt || null,
    };
  }

  if (image?.url) {
    const imageResponse = await (options.fetchImpl || fetch)(image.url);
    if (!imageResponse.ok) {
      throw new Error(`OpenAI image URL fetch failed with status ${imageResponse.status}.`);
    }

    return {
      bytes: Buffer.from(await imageResponse.arrayBuffer()),
      mimeType: imageResponse.headers.get('content-type') || `image/${config.featureImage.outputFormat}`,
      revisedPrompt: image.revised_prompt || null,
    };
  }

  throw new Error('OpenAI image response did not include b64_json or url.');
}
