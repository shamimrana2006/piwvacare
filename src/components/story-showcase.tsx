"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Footprints, ArrowRight, CheckCircle2, Eye } from "lucide-react";

interface StoryShowcaseProps {
  onExplore: () => void;
}

export function StoryShowcase({ onExplore }: StoryShowcaseProps) {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: "were-back",
      badge: "The New Chapter",
      title: "We're Back — Purer, Gentler, Reimagined",
      tagline: "Every little step inspires our gentle care",
      image: "/images/baby-footprints.jpg",
      tag: "Pure Oat & Earth Touch",
      description:
        "Pressed gently into nature's softest textures, Piwva returns with an improved hypoallergenic formulation. Free from harsh chemicals, crafted with love for tender newborn skin.",
      details: "Two tiny footprints pressed into fine oat powder under morning sunlight, wrapped in cozy sage knitwear.",
    },
    {
      id: "gentle-touch",
      badge: "Tender Touch",
      title: "Gentle Handprints, Boundless Love",
      tagline: "Touched by nature, protected by science",
      image: "/images/baby-handprint-sand.jpg",
      tag: "100% Calming Botanicals",
      description:
        "Every touch matters. Our soothing moisture lotion mimics the natural protective vernix of newborn skin, locking in soothing hydration through daily changes.",
      details: "Delicate baby handprint and hand-carved heart in warm golden-hour sand, with eucalyptus leaf shadows.",
    },
    {
      id: "botanical-lotion",
      badge: "Pure Formula",
      title: "Bathed in Morning Sunlight & Botanicals",
      tagline: "Ultra-soothing colloidal oat & shea butter",
      image: "/images/lotion-sand-nature.jpg",
      tag: "Clean Skincare Ritual",
      description:
        "Tested by certified pediatric dermatologists to deliver 24-hour hydration without any greasy layer or artificial fragrance.",
      details: "The Piwva Baby Moisture Lotion resting peacefully among chamomile blooms, gentle breeze and soft sand.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#F3EDE2]/80 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#EAF2E4]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="soft"
              className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs"
            >
              <Footprints className="w-3.5 h-3.5 text-[#4D6D2E]" />
              Aesthetic Nature & Story
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1B381E] tracking-tight leading-tight">
            Inspired by Tender Little Footsteps
          </h2>

          <p className="text-sm sm:text-base text-[#596D5C] max-w-xl mx-auto">
            Warm sunlight, fine natural textures, and the purest botanical care
            crafted for your baby&apos;s very first moments.
          </p>
        </div>

        {/* 3-Card Aesthetic Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stories.map((item, idx) => {
            const isSelected = activeStory === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveStory(idx)}
                className={`group relative rounded-3xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer flex flex-col ${
                  isSelected
                    ? "border-[#4D6D2E] shadow-lg shadow-[#4D6D2E]/15 -translate-y-1.5 ring-2 ring-[#4D6D2E]/20"
                    : "border-[#E1EBDC] hover:border-[#4D6D2E] hover:shadow-md"
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#F4EEE3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1A3B22] shadow-xs flex items-center gap-1.5">
                    <Leaf className="w-3 h-3 text-[#4D6D2E]" />
                    {item.badge}
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-[#4D6D2E] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}

                  {/* Bottom title in image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] font-medium text-[#D8E8D2] tracking-wide">
                      {item.tagline}
                    </p>
                    <h4 className="text-base font-bold mt-0.5 leading-snug drop-shadow-xs">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Card text content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-[#596D5C] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-[#EEF5EA] flex items-center justify-between text-xs font-semibold text-[#4D6D2E]">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {isSelected ? "Currently Viewing" : "Click to Focus"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Focus Spotlight of the selected image */}
        <div className="bg-white/80 backdrop-blur-xs rounded-3xl p-6 sm:p-10 border border-[#DEE8D8] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Large Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-[#F4EEE3] border border-[#DEE8D8]">
                <Image
                  src={stories[activeStory].image}
                  alt={stories[activeStory].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
                <Footprints className="w-3.5 h-3.5" />
                {stories[activeStory].badge} Spotlight
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E] leading-tight">
                {stories[activeStory].title}
              </h3>

              <p className="text-sm sm:text-base text-[#596D5C] leading-relaxed">
                {stories[activeStory].description}
              </p>

              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E2EBDC] text-xs text-[#4E6152] flex items-center gap-3">
                <Heart className="w-4 h-4 text-[#4D6D2E] shrink-0 fill-[#4D6D2E]/20" />
                <span>{stories[activeStory].details}</span>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Button
                  onClick={onExplore}
                  className="bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full px-7 h-12 font-semibold flex items-center gap-2 shadow-md shadow-[#4D6D2E]/20"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  Explore The Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
