export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-6 bg-cream-deep">
      <div className="flex marquee-track w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 pr-12">
            <span className="display text-3xl md:text-5xl whitespace-nowrap">{item}</span>
            <span className="text-brass display text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
