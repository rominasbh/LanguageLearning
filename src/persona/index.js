import prompt from './prompt';
import actions from './actions';

const config = {
  initialMessage: `Lets Learn a new language together, what language do you want to learn today?`,
  prompt,
  actions,
  ttsConfig: {
    voiceId: '3ba84b9e-1711-4cfa-b080-460b4d7a4427'
  },
  llmConfig: {
    llm: 'llama-3-70b',
    temperature: 0.9,
    repetitionPenalty: 0.5,
  },
  interjections: {
    enabled: true,
    minWait: 5000,
    maxWait: 5500,
    // thought: `There was just a pause; I should keep the conversation going.`
    thought: `There was just a pause; The user may be thinking, I should give them a little time before following up`
  },
  language: "multi"
}

export default config;
