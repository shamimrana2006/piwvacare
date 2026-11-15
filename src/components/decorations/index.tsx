import React from "react";

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
  className = "h-8",
  textColor = "text-[#1A3B22]",
  dotColor = "text-[#4D6D2E]",
}: {
  className?: string;
  textColor?: string;
  dotColor?: string;
}) {
  return (
    <div className={`flex items-center gap-1.5 font-bold tracking-tight select-none ${className}`}>
      <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textColor} relative flex items-center`}>
        p
        {/* 'i' with leaf sprout dot */}
        <span className="relative inline-flex items-center justify-center">
          <span className="inline-block">i</span>
          <span className={`absolute -top-2 left-1/2 -translate-x-1/2 ${dotColor}`}>
            <svg
              className="w-3 h-3 fill-current rotate-12"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C7.5 2 3.5 5.5 3 10c2.5-.5 5.5 0 7.5 2 2 2 2.5 5 2 7.5 4.5-.5 8-4.5 8-9 0-4.5-3.5-8.5-8.5-8.5z" />
            </svg>
          </span>
        </span>
        wva
      </span>
    </div>
  );
}

