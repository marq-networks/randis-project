import Image from "next/image";

export default function CapabilitiesGrid() {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="flex items-center gap-4">
          <h2 className="section-title text-2xl md:text-3xl font-semibold">Our Capabilities</h2>
          <div className="relative w-32 h-6">
            <Image src="/homepage/our capabilities/line.png" alt="Line" fill className="object-contain" />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {id:1,title:"Discovery & Assessment"},
            {id:2,title:"Privacy-First Architecture"},
            {id:3,title:"Automated Compliance"},
            {id:4,title:"Secure Data Collaboration"},
          ].map(({id,title}) => (
            <div key={id} className="rounded-2xl card p-5 transition hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative h-28">
                <Image src={`/homepage/our capabilities/image${id}.png`} alt={title} fill className="object-contain" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold">{title}</h3>
              <p className="mt-2 text-[13px] text-white/70">Replace this with final copy for the capability.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}