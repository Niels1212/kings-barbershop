import services from "@/content/services.json";

export default function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((s) => (
        <div key={s.title} className="rounded border border-white/10 p-5 hover:border-primary/60 transition">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <span className="text-primary font-bold">${s.price}</span>
          </div>
          <p className="mt-2 opacity-80">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
