import hours from "@/content/hours.json";

export default function Hours() {
  return (
    <div className="space-y-2">
      {hours.map((h) => {
        const isClosed = !h.open || !h.close;
        return (
          <div 
            key={h.day} 
            className="flex justify-between items-center px-4 py-3 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 transition"
          >
            <div className="text-base font-medium text-white/90 uppercase tracking-wide">
              {h.day === "Mon" ? "Monday" : 
               h.day === "Tue" ? "Tuesday" : 
               h.day === "Wed" ? "Wednesday" : 
               h.day === "Thu" ? "Thursday" : 
               h.day === "Fri" ? "Friday" : 
               h.day === "Sat" ? "Saturday" : "Sunday"}
            </div>
            <div className={`text-base font-semibold ${isClosed ? 'text-white/40' : 'text-primary'}`}>
              {isClosed ? "CLOSED" : `${h.open} - ${h.close}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
