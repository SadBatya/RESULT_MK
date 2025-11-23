import { Skeleton } from "@/src/shared/ui";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton key={index} className="w-full rounded-md h-[50px]" />
      ))}
    </div>
  );
}
