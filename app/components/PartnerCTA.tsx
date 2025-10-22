import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section className="border-t border-white/10">
      <div className="relative">
        {/* subtle top glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-gradient-to-t from-[050A11] to-[0075FF] blur-md" />
        <div className="max-w-[1200px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Partner with a Proven Leader?</h2>
          <p className="mt-3 text-[13px] text-white/70">
            Download Our Capability Statement Today And Discover How Excelcus Can
            Support Your Mission With Expertise And Innovation!
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30"
            >
              View Capability Statement
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        {/* subtle bottom glow */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-16 bg-gradient-to-t from-white/5 to-transparent blur-md" />
      </div>
    </section>
  );
}