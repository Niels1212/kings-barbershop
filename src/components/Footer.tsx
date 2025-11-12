"use client";

import { useState } from "react";
import site from "@/content/site.json";
import Container from "./Container";
import { EmailIcon, InstagramIcon } from "./icons";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('niels.hansen1212@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-16 border-t border-white/10">
      <Container className="py-8 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="opacity-80">&copy; {new Date().getFullYear()} {site.brand}</p>

          {/* Creator Attribution */}
          <div className="flex items-center gap-2 text-xs opacity-70 relative">
            <span>
              Website created by <span className="text-primary font-semibold">NISO</span>
            </span>
            <span className="opacity-50">•</span>
            <button 
              onClick={handleCopyEmail}
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition relative"
              aria-label="Copy email to clipboard"
              title="Click to copy email"
            >
              <EmailIcon className="w-4 h-4" />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-dark px-2 py-1 rounded text-xs whitespace-nowrap animate-fade-in">
                  Email Copied
                </span>
              )}
            </button>
            <a 
              href="https://www.instagram.com/niels.hansen1212/" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition"
              aria-label="NISO's Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </footer>
  );
}
