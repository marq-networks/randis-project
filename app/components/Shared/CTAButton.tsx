"use client";
import Link from "next/link";
import React from "react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CTAButton({ href, children, className }: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group";

  return (
    <Link href={href} className={`${baseClasses}${className ? ` ${className}` : ""}`}>
      {children}
    </Link>
  );
}