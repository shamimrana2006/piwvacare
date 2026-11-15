"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Heart, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Background ambient organic blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#F1ECE1]/70 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#EAF2E4]/60 rounded-full blur-3xl -z-10 -translate-x-1/3 pointer-events-none" />

      {/* Decorative leaf branch corner accent (top right) */}
      <div className="absolute top-16 right-0 w-36 h-48 opacity-40 md:opacity-70 pointer-events-none -z-0">
        <svg
          viewBox="0 0 100 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#385B28]"
        >
          <path
            d="M95 10C80 35 60 55 45 80C35 98 25 120 15 140"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M75 25C65 20 52 28 55 40C62 50 78 45 75 25Z"
            fill="#4D6D2E"
            opacity="0.8"
          />
          <path
            d="M58 55C48 50 36 60 40 72C48 80 62 72 58 55Z"
            fill="#648A3F"
            opacity="0.7"
          />
          <path
            d="M40 85C30 82 22 93 28 103C35 110 46 100 40 85Z"
            fill="#4D6D2E"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-6 space-y-6 lg:pr-6 relative">
            {/* Pill Badge with Lucide Heart */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="soft"
                className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 text-[#4D6D2E] fill-[#4D6D2E]" />
                Gentle Care. Happier Baby.
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#1B381E] leading-[1.12] tracking-tight">
                <span className="block text-[#1B381E] font-black">piwva</span>
                <span className="block text-[#273D2A] font-extrabold">Care for Every</span>
                <span className="inline-flex items-center flex-wrap gap-2 text-[#273D2A]">
                  <span>Little Moment</span>
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#4D6D2E] inline-block stroke-[2.2] fill-none" />
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#556958] font-normal leading-relaxed max-w-lg">
              Pure, safe and thoughtful care products for your newborn and
              growing baby.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                onClick={onCtaClick}
                className="bg-[#4D6D2E] hover:bg-[#3D5724] text-white rounded-full px-7 py-3.5 h-auto text-sm sm:text-base font-semibold shadow-md shadow-[#4D6D2E]/25 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer group"
              >
                <span>Be the First to Know</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#4D6D2E] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </Button>
            </div>

            {/* Micro reassurance badges below CTA */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#607463]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4D6D2E]" />
                <span>Pediatrician Formulated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#4D6D2E]" />
                <span>100% Gentle & Pure</span>
              </div>
            </div>
          </div>

          {/* Right Column: Baby Image with curved organic mask */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-4/3 sm:aspect-5/4 lg:aspect-4/3">
              {/* Lucide Heart indicator in top right */}
              <div className="absolute -top-3 right-4 sm:-right-2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-[#DCE8D5] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#4D6D2E] stroke-[2.2] fill-[#4D6D2E]/20" />
              </div>

              {/* Organic curved shape wrapper matching design mockup */}
              <div className="relative w-full h-full rounded-[40px] sm:rounded-[56px] overflow-hidden shadow-xl shadow-[#2E4A25]/10 border-4 border-white/80 bg-[#F4EEE3]">
                <Image
                  src="/images/hero-baby.jpg"
                  alt="piwva happy baby laughing in cozy hooded towel"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Soft warm gradient overlay at the base for organic blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative soft blurred badge behind image */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E1EDDB]/80 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
