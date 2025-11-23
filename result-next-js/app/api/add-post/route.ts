import { NextRequest, NextResponse } from "next/server";

export type PostRequest = {
  userId: number;
  title: string;
  body: string;
};

export async function POST(req: NextRequest) {
  try {
    const post: PostRequest = await req.json();
    const { userId, title, body } = post;

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, title, body }),
    });

    if (res.ok) {
      const createdPost = await res.json();
      return NextResponse.json({
        message: "Пост успешно создан",
        ...createdPost,
      });
    }

    return NextResponse.json(
      { message: "Ошибка при создании поста" },
      { status: 400 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
