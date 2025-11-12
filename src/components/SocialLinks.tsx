import site from "@/content/site.json";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

const getIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('instagram')) return <InstagramIcon className="w-5 h-5" />;
  if (lowerName.includes('facebook')) return <FacebookIcon className="w-5 h-5" />;
  return <span className="text-xs">{name}</span>;
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  if (!site.socials?.length) return null;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {site.socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.name}
          className="opacity-80 hover:opacity-100 hover:text-primary transition"
        >
          {getIcon(s.name)}
        </a>
      ))}
    </div>
  );
}