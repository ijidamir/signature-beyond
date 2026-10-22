export function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-to-br from-stone-900 to-ink py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="font-serif text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-md text-sm text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}

export function EmptyNote({ children }: { children: React.ReactNode }) {
  return <p className="rounded border border-dashed border-stone-300 p-8 text-sm text-stone-500">{children}</p>;
}
