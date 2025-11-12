"use client";

import { useState } from "react";
import Image from "next/image";
import site from "@/content/site.json";
import contactBg from "@/../public/brand/contact-bg.jpg";
import { Button, Input, Textarea } from "@/components/ui";
import { CalendarIcon, PhoneIcon, LocationIcon, InstagramIcon, FacebookIcon } from "@/components/icons";

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
            <Input
              type="text"
              id="name"
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />

            <Input
              type="email"
              id="email"
              name="email"
              label="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />

            <Textarea
              id="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us what you need..."
            />

            <Button type="submit" className="w-full text-lg">
              Send Message
            </Button>
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
              <CalendarIcon className="w-10 h-10 text-primary" />
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
            <PhoneIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="text-sm text-white/60 uppercase tracking-wide mb-2">Phone</div>
          <a href={`tel:${site.phone}`} className="text-lg text-white/90 hover:text-primary transition">
            {site.phone}
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
            <LocationIcon className="w-6 h-6 text-primary" />
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
                  <InstagramIcon className="w-6 h-6 text-primary" />
                )}
                {social.name.toLowerCase().includes('facebook') && (
                  <FacebookIcon className="w-6 h-6 text-primary" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
