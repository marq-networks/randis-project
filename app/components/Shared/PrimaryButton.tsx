"use client";

import React, { forwardRef } from "react";

type PrimaryButtonProps = {
  label?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
};

const baseClasses =
  "group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 mx-auto";

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ label = "Book Your 90-Day Strategy Call", className = "", type = "button", onClick, disabled = false, children }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${className}`}
      >
        <span>{children ?? label}</span>
        <svg
          className="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;