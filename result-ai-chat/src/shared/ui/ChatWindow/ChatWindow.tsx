import { Skeleton } from "../Skeleton/Skeleton";

interface Props {
  question: string;
  answer: string | null;
  isLoading?: boolean;
}

export const ChatWindow = ({ question, answer, isLoading }: Props) => (
  <div className="border border-white/80 rounded-md flex flex-col p-4 gap-4">
    <div className="bg-white/30 max-w-[calc(100%-40px)] p-4 rounded-md border-white/50 hover:border-white/80 transition-all cursor-pointer">
      <b>Вы:</b> {question}
    </div>
    <div className="bg-white/30 flex items-center gap-4 max-w-[calc(100%-40px)] self-end p-4 rounded-md border-white/50 hover:border-white/80 transition-all cursor-pointer">
      <b>AI:</b>{" "}
      {answer ? answer : isLoading ? <Skeleton className="w-40 h-12" /> : ""}
    </div>
  </div>
);
