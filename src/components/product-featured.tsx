"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Leaf, Droplets, ShieldCheck, Check, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DoodleHeart } from "@/components/decorations";

interface ProductFeaturedProps {
  onKnowMore: () => void;
  onAddToCart: () => void;
}

export function ProductFeatured({
  onKnowMore,
  onAddToCart,
}: ProductFeaturedProps) {
  const [selectedSize, setSelectedSize] = useState("250ml");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const featureItems = [
    {
      icon: Leaf,
      title: "Gentle & Hypoallergenic",
      desc: "Zero harsh sulfates, parabens, or artificial dyes. Clinically pH-balanced for tender skin.",
    },
    {
      icon: Droplets,
      title: "Moisturizes Deeply",
      desc: "Enriched with organic oat lipids and cold-pressed shea butter to lock in 24-hour hydration.",
    },
    {
      icon: ShieldCheck,
      title: "Safe for Newborns",
      desc: "Pediatrician and dermatologist approved from day one of life for pure peace of mind.",
    },
  ];

  return (
    <section id="product" className="py-16 md:py-24 relative overflow-hidden bg-[#FAF7F2]">
      {/* Background soft wavy shape */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-70 pointer-events-none">
        <div className="w-[1200px] h-[600px] bg-gradient-to-r from-[#F4EEE4] via-[#F8F5EE] to-[#EBF3E7] rounded-[100px] blur-2xl transform -rotate-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Product Image on Pedestal with Bunny & "New Launch" badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Soft cream curved backdrop matching design */}
            <div className="relative w-full max-w-[480px] rounded-[48px] bg-gradient-to-b from-[#F6F0E6] to-[#EFE7D8] p-4 sm:p-6 border border-[#E9DFCF] shadow-lg shadow-[#2D4525]/5">
              {/* "New Launch" Circular Olive Green Badge */}
              <div className="absolute top-6 right-8 sm:right-10 z-20 w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#4D6D2E] text-white flex flex-col items-center justify-center font-bold text-center shadow-lg shadow-[#4D6D2E]/30 animate-pulse-subtle">
                <span className="text-xs sm:text-sm font-semibold tracking-wide">New</span>
                <span className="text-xs sm:text-sm font-bold tracking-tight">Launch</span>
              </div>

              {/* Main Product Photography */}
              <div className="relative w-full aspect-4/3 sm:aspect-1/1 rounded-[36px] overflow-hidden bg-white/40">
                <Image
                  src="/images/product-bottle.jpg"
                  alt="piwva Baby Moisture Lotion with plush bunny on pedestal"
                  fill
                  className="object-cover object-center hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Quick Size Toggle & Quick Add Bar under the photo */}
              <div className="mt-4 pt-3 border-t border-[#DFD3C2]/70 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 bg-white/80 p-1 rounded-full border border-[#DCE8D4]">
                  {["150ml", "250ml", "500ml"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 text-xs rounded-full font-semibold transition-all cursor-pointer ${
                        selectedSize === size
                          ? "bg-[#4D6D2E] text-white shadow-2xs"
                          : "text-[#556958] hover:text-[#1A3B22]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={handleAdd}
                  size="sm"
                  variant="outline"
                  className="rounded-full text-xs font-semibold border-[#4D6D2E] text-[#2F5223] hover:bg-[#4D6D2E] hover:text-white transition-colors"
                >
                  {added ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Added!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5 text-[#4D6D2E]" /> + Add $24
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Introducing Info & Features */}
          <div className="lg:col-span-6 space-y-6 relative lg:pl-4">
            {/* Floating outline doodle heart on right edge */}
            <div className="absolute top-1/2 -right-2 sm:-right-8 -translate-y-1/2 pointer-events-none hidden md:block">
              <DoodleHeart className="w-12 h-12 text-[#99B985] stroke-[2.2] opacity-70 rotate-12" />
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center">
              <Badge
                variant="soft"
                className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold gap-1.5 shadow-2xs"
              >
                <Leaf className="w-3.5 h-3.5 text-[#4D6D2E]" />
                Introducing
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1B381E] leading-tight tracking-tight">
                piwva Baby Moisture Lotion
              </h2>
              <p className="text-base sm:text-lg text-[#556958] leading-relaxed max-w-lg">
                Keep your baby&apos;s skin soft, smooth and healthy &mdash;
                naturally.
              </p>
            </div>

            {/* Feature List items with custom circular icons */}
            <div className="space-y-4 pt-2">
              {featureItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/70 transition-colors border border-transparent hover:border-[#E2ECD9]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center shrink-0 border border-[#D7E8CE] mt-0.5">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1B381E]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#596D5C] mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button "Know More ➔" */}
            <div className="pt-2 flex items-center gap-4">
              <Button
                onClick={onKnowMore}
                className="bg-[#4D6D2E] hover:bg-[#3D5724] text-white rounded-full px-7 py-3.5 h-auto text-sm sm:text-base font-semibold shadow-md shadow-[#4D6D2E]/25 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer group"
              >
                <span>Know More</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#4D6D2E] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </Button>

              <button
                type="button"
                onClick={onAddToCart}
                className="text-sm font-semibold text-[#4D6D2E] hover:text-[#2F5223] underline underline-offset-4 decoration-2 cursor-pointer transition-colors px-2 py-1"
              >
                Add directly to bag ($24)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

