"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, HeartHandshake, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DoodleHeart } from "@/components/decorations";

interface PromiseSectionProps {
  onJoinJourney: () => void;
}

export function PromiseSection({ onJoinJourney }: PromiseSectionProps) {
  return (
    <section id="promise" className="py-16 md:py-24 relative overflow-hidden bg-[#FAF7F2]">
      {/* Background soft sage organic circle */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#EAF2E4]/80 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#F5EDE1]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Baby Hands Photo with Organic Bean Shape */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Organic curved shape container */}
            <div className="relative w-full max-w-[460px] aspect-4/3 sm:aspect-5/4 rounded-[44px] sm:rounded-[60px] overflow-hidden shadow-xl shadow-[#2E4A25]/10 border-4 border-white/90 bg-[#F4EEE3]">
              <Image
                src="/images/promise-hands.jpg"
                alt="gentle baby hand wrapping around parent finger"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gentle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating outline doodle heart at the bottom-right corner of image */}
            <div className="absolute -bottom-4 right-8 sm:right-14 z-20">
              <DoodleHeart className="w-10 h-10 sm:w-12 sm:h-12 text-[#4D6D2E] stroke-[2.6] -rotate-12 drop-shadow-xs" />
            </div>

            {/* Soft decorative blur ring */}
            <div className="absolute -bottom-8 -right-4 w-40 h-40 bg-[#E2EDDC]/70 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Promise Copy & CTA */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center">
              <Badge
                variant="soft"
                className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 text-[#4D6D2E] fill-[#4D6D2E]/20" />
                Our Promise
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1B381E] leading-tight tracking-tight">
                A Softer Tomorrow for Your Little One
              </h2>

              <p className="text-base sm:text-lg text-[#556958] font-normal leading-relaxed max-w-lg">
                At <strong className="text-[#1B381E] font-bold">piwva</strong>,
                we believe in gentle care, better tomorrow. Because every baby
                deserves love, care and comfort.
              </p>
            </div>

            {/* 2 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/60 border border-[#E3EDDD]">
                <HeartHandshake className="w-5 h-5 text-[#4D6D2E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B381E]">Ethical & Vegan</h4>
                  <p className="text-[11px] text-[#596D5C]">100% cruelty-free & sustainable</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/60 border border-[#E3EDDD]">
                <ShieldCheck className="w-5 h-5 text-[#4D6D2E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B381E]">Clean Formulation</h4>
                  <p className="text-[11px] text-[#596D5C]">Zero parabens, toxins or sulfates</p>
                </div>
              </div>
            </div>

            {/* CTA Button "Join Our Care Journey ➔" */}
            <div className="pt-2">
              <Button
                onClick={onJoinJourney}
                className="bg-[#4D6D2E] hover:bg-[#3D5724] text-white rounded-full px-7 py-3.5 h-auto text-sm sm:text-base font-semibold shadow-md shadow-[#4D6D2E]/25 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer group"
              >
                <span>Join Our Care Journey</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#4D6D2E] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
