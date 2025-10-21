import Image from "next/image";

export default function CapabilitiesGrid() {
  const items = [
    {
      id: 1,
      title: "Compliance Automation",
      description: "Streamline audits, reporting, and regulatory tracking.",
      image: "/homepage/our capabilities/image1.png",
    },
    {
      id: 2,
      title: "Performance Analytics & Dashboards",
      description: "Turn data into decision support.",
      image: "/homepage/our capabilities/image2.png",
    },
    {
      id: 3,
      title: "Health Informatics",
      description: "Integrate public health data across systems.",
      image: "/homepage/our capabilities/image3.png",
    },
    {
      id: 4,
      title: "Workforce & Training Solutions",
      description: "Integrate public health data across systems.",
      image: "/homepage/our capabilities/image4.png",
    },
  ];

  return (
    <section className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Capabilities</h2>
          <p className="mt-2 text-white/70 text-[12px] md:text-[13px]">Transforming Business Visions Into Production-Grade Systems.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {items.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-gradient-to-r from-[#0D1832] to-[#132449] border border-white/10 shadow-xl shadow-black/20 overflow-hidden flex flex-col"
            >
              {/* top accent line */}
              <div className="h-1" />

              <div className="p-5 flex-1">
                <h3 className="text-[15px] font-semibold leading-tight tracking-wide">{item.title}</h3>
                <Image src="/homepage/our capabilities/line.png" alt={item.title} width={200} height={150} className="mt-4 rounded-xl" />
                <p className="mt-2 text-[13px] text-white/70">{item.description}</p>
              </div>

              <div className="px-5 pb-5 mt-auto">
                <div className="relative aspect-[4/3] rounded-xl bg-white/3 ring-1 ring-white/10 overflow-hidden shadow-inner">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}