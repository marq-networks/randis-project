import type { Metadata } from "next";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-[1200px] mx-auto px-6 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Book Your Strategy Call</h1>
          <p className="mt-2 text-white/80 text-[15px]">Tell us your mission, and we’ll craft a path to secure, compliant analytics.</p>
          <div className="mt-6 flex gap-3">
            <Link href="https://cal.com/rutledge-associates" className="rounded-full btn-primary px-6 py-3 text-sm font-semibold">Schedule</Link>
            <Link href="/contact-us" className="rounded-full border border-white/20 hover:border-white/40 px-6 py-3 text-sm font-semibold">Contact Us</Link>
          </div>
        </div>
        <div className="rounded-2xl card p-6 text-white/80">
          <ul className="space-y-3 text-[14px]">
            <li>• Secure, compliant analytics aligned to mission</li>
            <li>• Fast assessment and roadmap</li>
            <li>• Measurable milestones and outcomes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description: "Schedule a strategy call or reach out to the team at Rutledge & Associates.",
};