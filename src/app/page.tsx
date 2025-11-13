import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Hours from "@/components/Hours";
import Barbers from "@/components/Barbers";
import Contact from "@/components/Contact";
import site from "@/content/site.json";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section id="barbers" className="py-16 bg-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                Meet Our Barbers
              </h2>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
                  Expert barbers, exceptional service
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
            <Barbers />
          </Container>
        </section>

        <section id="services" className="py-20 bg-gradient-to-b from-black to-black/95">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                Our Services
              </h2>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
                  Quality cuts and classic shaves
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
            <div className="mt-10">
              <ServicesGrid />
            </div>
          </Container>
        </section>

        <section id="hours" className="py-20 bg-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                Hours & Location
              </h2>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
                  {site.address}
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>

            {/* Two Column Layout: Map and Hours */}
            <div className="grid md:grid-cols-2 gap-8 mt-10 items-start">
              {/* Map Side */}
              <div className="rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(site.address)}&zoom=15`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Hours Side */}
              <div className="h-[400px] flex flex-col rounded-2xl border-2 border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Opening Hours</h3>
                <div className="flex-1 overflow-y-auto">
                  <Hours />
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Get Directions
                  </a>
                  <div className="flex items-center gap-3">
                    {site.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/60 hover:text-primary transition"
                        aria-label={social.name}
                      >
                        {social.name.toLowerCase().includes('instagram') && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {social.name.toLowerCase().includes('facebook') && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-b from-black to-black/95">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                Contact Us
              </h2>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
                  We're here to help
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
            <div className="mt-10">
              <Contact />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
