
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDesignAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the AI assistant for Rajeev Kumar's design portfolio. 
        Rajeev is a communication design student expert in Typography, UX/UI, 3D, and Web Development.
        Keep responses professional, concise, and focused on design principles. 
        Answer as if you are Rajeev's digital twin. 
        His hobbies are photography and tech blogging.
        Encourage users to look at his projects or contact him for collaborations.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of a creative block right now. Let's chat again in a moment!";
  }
};
