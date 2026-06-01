import { parseJsonObject } from './schemas.mjs';

function getOutputText(payload) {
  if (typeof payload.output_text === 'string') return payload.output_text;

  return (payload.output || [])
    .flatMap((item) => item.content || [])
    .filter((content) => content.type === 'output_text' || content.type === 'text')
    .map((content) => content.text)
    .join('\n')
    .trim();
}

function summarizeValidationError(error) {
  if (Array.isArray(error.issues) && error.issues.length > 0) {
    return error.issues
      .map((issue) => `${issue.path?.join('.') || '(root)'}: ${issue.message}`)
      .join('; ');
  }

  return error.message;
}

export async function callOpenAiJson({
  apiKey = process.env.OPENAI_API_KEY,
  model = process.env.OPENAI_CONTENT_MODEL || 'gpt-4.1',
  system,
  prompt,
  schemaName,
  jsonSchema,
  zodSchema,
  maxOutputTokens = 4096,
  temperature = 0.4,
  fetchImpl = fetch,
}) {
  if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY. Add it as a GitHub Actions secret.');
  }

  const response = await fetchImpl('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature,
      max_output_tokens: maxOutputTokens,
      input: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      text: {
        format: {
          type: 'json_schema',
          name: schemaName,
          strict: true,
          schema: jsonSchema,
        },
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI structured response failed with status ${response.status}: ${body.slice(0, 500)}`);
  }

  const payload = await response.json();
  const text = getOutputText(payload);
  const parsed = typeof text === 'string' && text ? parseJsonObject(text) : payload.output_parsed;

  try {
    return zodSchema.parse(parsed);
  } catch (error) {
    throw new Error(`OpenAI structured response failed schema validation: ${summarizeValidationError(error)}`);
  }
}
