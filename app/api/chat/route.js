import { GoogleGenAI } from "@google/genai";

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return Response.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return Response.json({
      success: true,
      text: response.text,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "AI generation failed",
      },
      { status: 500 }
    );
  }
       }
