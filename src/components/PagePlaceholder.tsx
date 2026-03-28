import Link from "next/link";

type PagePlaceholderProps = {
  title: string;
  path: string;
};

export function PagePlaceholder({ title, path }: PagePlaceholderProps) {
  return (
    <main className="min-h-[100svh] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-900 hover:underline">
            HydroBagger
          </Link>
          <span className="mx-2">/</span>
          <span>{path === "/" ? "strona główna" : path.slice(1)}</span>
        </nav>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-zinc-600">
          Treść podstrony będzie uzupełniona w kolejnym etapie prac.
        </p>
      </div>
    </main>
  );
}
