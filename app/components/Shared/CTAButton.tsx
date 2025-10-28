"use client";

import Link from "next/link";
import React, { forwardRef } from "react";

type CTAButtonProps = {
  href: string;
  label?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
  arrowRef?: React.Ref<SVGSVGElement>;
};

const baseClasses =
  "group inline-flex items-center rounded-full btn-primary px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30";

const CTAButton = forwardRef<HTMLAnchorElement, CTAButtonProps>(
  ({ href, label = "Book Your 90-Day Strategy Call", className = "", onClick, children, arrowRef }, ref) => {
    return (
      <Link href={href} ref={ref} onClick={onClick} className={`${baseClasses} ${className}`}>
        {children ? (
          children
        ) : (
          <>
            <span>{label}</span>
            <svg
              ref={arrowRef as React.Ref<SVGSVGElement>}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-2 h-4 w-4"
            >
              <path d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z" />
            </svg>
          </>
        )}
      </Link>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;