import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askAI(question, profile) {
  try {
    const prompt = `
You are Nexa AI, a professional career mentor.

Student Profile:
Name: ${profile?.name || "Not provided"}
Qualification: ${profile?.qualification || "Not provided"}
Skills: ${profile?.skills || "Not provided"}
Interests: ${profile?.interests || "Not provided"}
Career Goal: ${profile?.careerGoal || "Not provided"}

Student Question:
${question}

Give a helpful, detailed, motivating, and practical answer.
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text();

  } catch (error) {
    console.error("Gemini Error:", error);

    return `❌ Gemini Error:
${error.message}`;
  }
}