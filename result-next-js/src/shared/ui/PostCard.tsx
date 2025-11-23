import Link from "next/link";

interface Props {
  id: number;
  title: string;
}

export const PostCard = ({ id, title }: Props) => (
  <Link href={`/post/${id}`}>
    <div className="flex w-full gap-4 p-4 items-start rounded-md border border-white/30 hover:border-white/80 transition-all cursor-pointer">
      <span>{id}</span>
      <p className="text-center font-semibold">{title}</p>
    </div>
  </Link>
);
