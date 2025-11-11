import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Hours from "@/components/Hours";
import site from "@/content/site.json";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section className="py-16">
          <Container>
            <h2 className="text-2xl font-bold">Our Services</h2>
            <p className="opacity-80 mt-2">Quality cuts and classic shaves.</p>
            <div className="mt-6">
              <ServicesGrid />
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white/5">
          <Container>
            <h2 className="text-2xl font-bold">Hours & Location</h2>
            <p className="opacity-80 mt-2">{site.address}</p>
            <div className="mt-6">
              <Hours />
            </div>
            <div className="mt-6">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
                className="underline hover:text-primary"
                target="_blank"
              >
                Open in Google Maps
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
