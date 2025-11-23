import { Skeleton } from "@/src/shared/ui";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full h-[50px]" />
      <Skeleton className="w-full h-[50px]" />
    </div>
  );
}
