"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ShieldCheck,
  Leaf,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { DoodleHeart } from "@/components/decorations";

export function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="soft"
              className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-[#4D6D2E] fill-[#4D6D2E]/20" />
              Our Story & Origins
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight font-title">
            Crafted with Motherly Love, Guided by Science
          </h1>

          <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
            Piwva was born from a simple bedtime frustration: reading baby lotion labels filled with hidden parabens, chemical perfumes, and unnecessary fillers. We knew our little ones deserved infinitely better.
          </p>
        </div>

        {/* Story Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-4/3 rounded-[48px] overflow-hidden shadow-xl shadow-[#2E4A25]/10 border-4 border-white/90 bg-[#F5EDE1]">
              <Image
                src="/images/hero-baby.jpg"
                alt="happy smiling newborn baby"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-10 hidden sm:block">
              <DoodleHeart className="w-10 h-10 text-[#4D6D2E] stroke-[2.6] -rotate-12" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
                Why We Started
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B381E] leading-tight font-title">
                Skin That Is 30% Thinner Deserves 100% Purity
              </h2>
              <p className="text-sm sm:text-base text-[#596D5C] leading-relaxed">
                A newborn&apos;s skin barrier is still developing for the first entire year of life. It absorbs chemicals faster and loses moisture at double the speed of adult skin.
              </p>
              <p className="text-sm sm:text-base text-[#596D5C] leading-relaxed">
                Rather than using cheap mineral oils or masking fragrances, we teamed up with certified pediatric dermatologists and herbal chemists to formulate a gentle, oat-infused lipid shield that supports and respects your baby&apos;s natural skin biology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#DFE8D9]">
                <h4 className="text-xl font-bold text-[#1B381E] font-title">1,400+</h4>
                <p className="text-xs text-[#596D5C] mt-0.5">
                  Banned toxic ingredients excluded forever
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#DFE8D9]">
                <h4 className="text-xl font-bold text-[#1B381E] font-title">pH 5.5</h4>
                <p className="text-xs text-[#596D5C] mt-0.5">
                  Precisely balanced for delicate acid mantle
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#DFEBD9] shadow-xs mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
              What Defines Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E] font-title">
              Our 4 Pillars of Gentle Care
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3EDDD] space-y-2">
              <Leaf className="w-8 h-8 text-[#4D6D2E] mb-2" />
              <h3 className="text-base font-bold text-[#1B381E] font-title">
                Pure Plant Lipids
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                We select colloidal oat, virgin cold-pressed shea, and chamomile sourced from verified sustainable family farms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3EDDD] space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#4D6D2E] mb-2" />
              <h3 className="text-base font-bold text-[#1B381E] font-title">
                Zero Harsh Fillers
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                No artificial scents, dyes, parabens, phthalates, silicones, sulfates, or alcohol. Ever.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3EDDD] space-y-2">
              <Users className="w-8 h-8 text-[#4D6D2E] mb-2" />
              <h3 className="text-base font-bold text-[#1B381E] font-title">
                Pediatric Tested
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                Every single batch undergoes clinical dermatological and pediatric safety evaluations before arriving at your door.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E3EDDD] space-y-2">
              <Award className="w-8 h-8 text-[#4D6D2E] mb-2" />
              <h3 className="text-base font-bold text-[#1B381E] font-title">
                Eco & Recyclable
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                A cleaner planet for the next generation. We use recyclable materials and reduce carbon footprints in production.
              </p>
            </div>
          </div>
        </div>

        {/* Letter from Founders */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#F6F0E6] to-[#EFE7D8] rounded-[36px] p-8 sm:p-12 border border-[#E8DFC $\\div$ C] shadow-md space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#4D6D2E] fill-[#4D6D2E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E]">
              A Note from Our Founders
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E] font-title">
            &ldquo;Every baby deserves to be held in gentle comfort.&rdquo;
          </h3>

          <p className="text-sm text-[#596D5C] leading-relaxed">
            When our own baby struggled with persistent newborn dry patches, we felt helpless looking at long ingredient lists full of synthetic additives. We built Piwva to give every parent the peace of mind we so desperately wanted: complete ingredient honesty, unmatched softness, and formulations safe from the first sunrise of life.
          </p>

          <div className="pt-4 border-t border-[#DFD3C2] flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-[#1B381E]">Elena & Marcus Vance</p>
              <p className="text-xs text-[#758878]">Co-Founders & Parents at Piwva</p>
            </div>
            <DoodleHeart className="w-7 h-7 text-[#4D6D2E] stroke-[2.2]" />
          </div>
        </div>
      </div>
    </div>
  );
}

