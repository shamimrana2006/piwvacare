import React from "react";
import Image from "next/image";

export function WavyUnderline({
  className = "w-44 h-4 text-[#89B072]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M3 10C35 4 65 14 98 9C132 4 165 13 197 7"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLogo({
  className = "h-8 sm:h-9",
  variant = "original",
}: {
  className?: string;
  variant?: "original" | "forest";
}) {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <Image
        src={variant === "forest" ? "/images/logo-forest.png" : "/images/logo.png"}
        alt="piwva logo"
        width={130}
        height={36}
        priority
        className="w-auto h-7 sm:h-8.5 object-contain"
      />
    </div>
  );
}
