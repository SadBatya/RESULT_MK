import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const Skeleton = ({ className }: Props) => (
  <div className={twMerge("animate-pulse bg-white/20 rounded-md", className)} />
);
