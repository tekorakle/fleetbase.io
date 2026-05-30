import fs from 'node:fs/promises';
import path from 'node:path';

import {
  AgentArticleDraftSchema,
  ContentBriefSchema,
  FeatureImageBriefSchema,
  QaResultSchema,
  SourceCitationSchema,
  TopicScoreSchema,
} from './schemas.mjs';

export async function readJsonFile(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

export async function readOptionalJsonFile(filePath, schema = null) {
  try {
    const value = await readJsonFile(filePath);
    return schema ? schema.parse(value) : value;
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

export async function writeJsonFile(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

export async function readAgentArtifacts(outputDir) {
  const topic = TopicScoreSchema.parse(await readJsonFile(path.join(outputDir, 'topic.json')));
  const brief = ContentBriefSchema.parse(await readJsonFile(path.join(outputDir, 'brief.json')));
  const draft = AgentArticleDraftSchema.parse(await readJsonFile(path.join(outputDir, 'draft.json')));
  const sourceCitations = SourceCitationSchema.array()
    .min(1)
    .parse(await readJsonFile(path.join(outputDir, 'source-citations.json')));
  const qa = QaResultSchema.parse(await readJsonFile(path.join(outputDir, 'qa.json')));
  const featureImageBrief = await readOptionalJsonFile(
    path.join(outputDir, 'feature-image-brief.json'),
    FeatureImageBriefSchema,
  );

  return { topic, brief, draft, sourceCitations, qa, featureImageBrief };
}
