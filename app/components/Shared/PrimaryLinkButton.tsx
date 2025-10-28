"use client";

import Link from "next/link";
import React, { forwardRef } from "react";

type PrimaryLinkButtonProps = {
  href: string;
  label?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
  arrowRef?: React.Ref<SVGSVGElement>;
};

const baseClasses =
  "group relative px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 text-[12px]";

const PrimaryLinkButton = forwardRef<HTMLAnchorElement, PrimaryLinkButtonProps>(
  ({ href, label = "Book Your 90-Day Strategy Call", className = "", onClick, children, arrowRef }, ref) => {
    return (
      <Link href={href} ref={ref} onClick={onClick} className={`${baseClasses} ${className}`}>
        <span>{children ?? label}</span>
        <svg
          ref={arrowRef as React.Ref<SVGSVGElement>}
          className="w-5 h-5 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    );
  }
);

PrimaryLinkButton.displayName = "PrimaryLinkButton";

export default PrimaryLinkButton;