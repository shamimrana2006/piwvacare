"use client";

import React, { useState } from "react";
import { Leaf, Heart, Smile, ShieldCheck, Sparkles, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WavyUnderline } from "@/components/decorations";

export function FeaturesGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const features = [
    {
      icon: Leaf,
      title: "Safe & Natural Ingredients",
      highlight: "100% Plant Sourced",
      description:
        "Every batch is formulated with pure plant-based squalane, soothing colloidal oat, and virgin cold-pressed coconut oil.",
      badge: "Organic Certified",
    },
    {
      icon: Heart,
      title: "Dermatologist Tested",
      highlight: "Clinical Grade",
      description:
        "Tested by certified independent pediatric dermatologists to guarantee irritation-free soothing touch on fragile skin.",
      badge: "Zero Allergens",
    },
    {
      icon: Smile,
      title: "Gentle on Sensitive Skin",
      highlight: "pH 5.5 Balanced",
      description:
        "Specifically tuned to match a baby's delicate acid mantle, locking in hydration while keeping irritants safely away.",
      badge: "Non-Stinging",
    },
    {
      icon: ShieldCheck,
      title: "Trusted by Parents",
      highlight: "Over 10,000+ Mums",
      description:
        "Awarded best gentle baby care product by modern parenting communities with a 99.4% recommendation rate.",
      badge: "Parent Approved",
    },
  ];

  return (
    <section id="why-piwva" className="py-20 md:py-28 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 md:mb-20">
          <div className="inline-flex items-center">
            <Badge
              variant="soft"
              className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-[#4D6D2E] fill-[#4D6D2E]/20" />
              Why Piwva?
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1B381E] tracking-tight leading-tight">
            Because Your Baby{" "}
            <span className="relative inline-block">
              <span>Deserves</span>
              {/* Organic wavy underline right below 'Deserves' */}
              <span className="absolute -bottom-2.5 left-0 w-full flex justify-center pointer-events-none">
                <WavyUnderline className="w-full h-3.5 text-[#8CB475]" />
              </span>
            </span>{" "}
            the Best
          </h2>

          <p className="text-sm sm:text-base text-[#596D5C] pt-2 max-w-xl mx-auto">
            Thoughtfully crafted with zero compromises &mdash; keeping tender
            newborn and infant skin protected, nourished, and happy every day.
          </p>
        </div>

        {/* 4 Feature Columns with Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl bg-white/70 backdrop-blur-xs border border-[#E1ECD9] p-4 sm:p-6 lg:p-8 shadow-md shadow-[#2D4525]/3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5EFE0]">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            const isHovered = activeCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`p-6 sm:p-6 flex flex-col items-center text-center transition-all duration-300 rounded-2xl ${
                  isHovered ? "bg-[#F3F8EF]/80 -translate-y-1 shadow-xs" : ""
                }`}
              >
                {/* Circular Sage Green Icon Badge */}
                <div className="relative mb-5">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "bg-[#4D6D2E] text-white scale-110 shadow-md shadow-[#4D6D2E]/25"
                        : "bg-[#E3EEDD] text-[#345928]"
                    }`}
                  >
                    <IconComponent className="w-8 h-8 stroke-[2]" />
                  </div>

                  {/* Little micro sparkle on hover */}
                  {isHovered && (
                    <Sparkles className="w-4 h-4 text-[#4D6D2E] absolute -top-1 -right-1 animate-spin-slow" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1B381E] leading-snug min-h-[48px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Mini tag */}
                <div className="my-2">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#4D6D2E] bg-[#EAF2E4] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    {item.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#596D5C] leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

