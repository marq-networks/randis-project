import CapabilitiesGrid from "../components/HomePage/CapabilitiesGrid";

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-[1200px] mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Our Capabilities</h1>
        <p className="mt-2 text-white/70">Explore the core services and solutions we deliver.</p>
      </section>
      <CapabilitiesGrid />
    </main>
  );
}