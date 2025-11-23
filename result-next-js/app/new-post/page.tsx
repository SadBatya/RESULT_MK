"use client";

import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          userId: 1,
          body,
        }),
      });

      if (!res.ok) throw new Error("Ошибка при отправке данных");

      const data = await res.json();
      setMessage(`Пост #${data.message} успешно создан!`);
      setTitle("");
      setBody("");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Uknown error";
      setMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[500px] border  border-white/80 rounded-md p-6"
      >
        <h1 className="text-2xl font-semibold text-center">
          Создать новый пост
        </h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-white/30 outline-none focus:border-white/80 transition-all px-4 py-2 rounded"
          type="text"
        />
        <input
          onChange={(e) => setBody(e.target.value)}
          required
          className="border border-white/30 outline-none focus:border-white/80 transition-all px-4 py-2 rounded"
          type="text"
        />
        <button
          disabled={loading}
          type="submit"
          className="border border-white/30 hover:border-white/80 transition-all cursor-pointer text-2xl"
        >
          Добавить пост
        </button>
        {message && <span className="text-center text-2xl">{message}</span>}
      </form>
    </section>
  );
}
