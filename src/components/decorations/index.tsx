import React from "react";
import Image from "next/image";

export function DoodleHeart({
  className = "w-6 h-6 text-[#588040]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.8 41.5C23.2 41.5 22.6 41.3 22.1 40.8C15.2 34.6 9.8 29.7 6.3 25.1C2.3 19.9 1 15.6 2.1 10.9C3.4 5.2 8.3 1.5 14.1 1.8C18.2 2.0 21.8 4.2 23.9 7.7C26.1 4.2 29.8 2.0 33.9 1.8C39.7 1.5 44.6 5.2 45.9 10.9C47 15.6 45.7 19.9 41.7 25.1C38.2 29.7 32.8 34.6 25.9 40.8C25.3 41.3 24.6 41.5 23.8 41.5Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="120"
        className="transition-all duration-700"
      />
    </svg>
  );
}

export function DoodleSparkle({
  className = "w-8 h-8 text-[#8EAF74]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7 6L13 13M16 2V12M25 6L19 13"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
