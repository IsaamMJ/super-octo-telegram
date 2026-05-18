export default function Loading() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-32 min-h-[50vh] flex flex-col items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-brass animate-pulse [animation-delay:120ms]" />
        <span className="w-2 h-2 rounded-full bg-brass animate-pulse [animation-delay:240ms]" />
      </div>
      <p className="mt-6 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
        Loading
      </p>
    </section>
  );
}
