import BoardPostDetail from "@/features/board/ui/components/BoardPostDetail";

interface BoardReadPageProps {
  params: Promise<{ id: string }>;
}

export default async function BoardReadPage({ params }: BoardReadPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700">
          <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
            게시물 상세
          </h1>
          <span className="rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold text-blue-100 dark:bg-blue-800">
            Antelligen
          </span>
        </div>
        <BoardPostDetail postId={Number(id)} />
      </div>
    </div>
  );
}
