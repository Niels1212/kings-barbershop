import hours from "@/content/hours.json";

export default function Hours() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {hours.map((h) => {
        const isClosed = !h.open || !h.close;
        return (
          <div key={h.day} className="rounded border border-white/10 p-3">
            <div className="text-sm opacity-70">{h.day}</div>
            <div className="font-semibold">
              {isClosed ? "Closed" : `${h.open}–${h.close}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
