import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});

export const openAI = new OpenAIApi(config);
