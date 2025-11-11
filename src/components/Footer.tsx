import site from "@/content/site.json";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <Container className="py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="opacity-80">&copy; {new Date().getFullYear()} {site.brand}</p>
        <div className="flex gap-4 opacity-90">
          {site.socials.map(s => (
            <a key={s.name} href={s.url} target="_blank" className="hover:text-primary">{s.name}</a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
