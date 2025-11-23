import { NextRequest, NextResponse } from "next/server";
import { OpenRouter } from "@openrouter/sdk";

interface IRequest {
  text: string;
}

const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body: IRequest = await request.json();

    const response = await openRouter.chat.send({
      model: "x-ai/grok-4.1-fast",
      messages: [{ role: "user", content: body.text }],
      stream: false,
    });

    return NextResponse.json({ message: response.choices[0].message.content });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "error" });
  }
}
