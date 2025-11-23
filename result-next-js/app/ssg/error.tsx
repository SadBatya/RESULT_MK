"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4 text-3xl">
      <h2>Something went wrong!</h2>
      <button className="border rounded-md cursor-pointer border-white p-4" onClick={() => reset()}>Try again</button>
    </div>
  );
}
