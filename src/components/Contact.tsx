"use client";

import { useState } from "react";
import Image from "next/image";
import site from "@/content/site.json";
import contactBg from "@/../public/brand/contact-bg.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="space-y-12">
      {/* Main Contact Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
            <p className="text-white/80 text-lg mb-8">
              Ready for a fresh cut? Send us a message or book your appointment online.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-white/60 uppercase tracking-wide mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-white/60 uppercase tracking-wide mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="name"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-white/60 uppercase tracking-wide mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition resize-none"
                placeholder="Tell us what you need..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold text-white hover:bg-primary/20 hover:border-primary/80 transition uppercase tracking-wider text-lg shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Book Appointment CTA with Background */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 h-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Barber background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
        </div>          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Book Your Appointment</h3>
            <p className="text-white/90 mb-8 max-w-md drop-shadow">
              Reserve your spot with one of our expert barbers. Walk-ins welcome, but appointments are recommended.
            </p>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm px-10 py-4 font-semibold text-white hover:bg-primary/20 hover:border-primary/80 transition uppercase tracking-wider text-lg shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="text-sm text-white/60 uppercase tracking-wide mb-2">Phone</div>
          <a href={`tel:${site.phone}`} className="text-lg text-white/90 hover:text-primary transition">
            {site.phone}
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-white/60 uppercase tracking-wide mb-2">Location</div>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
            target="_blank"
            rel="noreferrer"
            className="text-lg text-white/90 hover:text-primary transition"
          >
            {site.address}
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center text-center">
          <div className="text-sm text-white/60 uppercase tracking-wide mb-4">Follow Us</div>
          <div className="flex gap-4">
            {site.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition"
                aria-label={social.name}
              >
                {social.name.toLowerCase().includes('instagram') && (
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                )}
                {social.name.toLowerCase().includes('facebook') && (
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
