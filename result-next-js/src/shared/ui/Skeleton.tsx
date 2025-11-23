import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const Skeleton = ({ className }: Props) => (
  <div className={twMerge("h-full w-full animate-pulse bg-white/50", className)} />
);
