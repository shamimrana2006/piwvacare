"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      author: "Sarah L.",
      role: "Mom to 3-month-old Maya",
      rating: 5,
      date: "Verified Parent",
      title: "Saved our baby's dry cheek patches!",
      content:
        "Within 48 hours of using Piwva Baby Moisture Lotion, Maya's rough winter cheeks cleared completely. Non-greasy and so silky soft. I will never buy another lotion!",
    },
    {
      author: "David & Marcus",
      role: "Parents to 6-month-old Leo",
      rating: 5,
      date: "Verified Parent",
      title: "Finally, zero flare-ups or redness",
      content:
        "Leo has super sensitive, eczema-prone skin. Every other drugstore brand caused red spots. Piwva has been our daily lifesaver after every evening bath routine.",
    },
    {
      author: "Amina K.",
      role: "Pediatric Nurse & Mom of twins",
      rating: 5,
      date: "Verified Parent",
      title: "The ingredient transparency won me over",
      content:
        "As a nurse, I inspect every single label. Piwva has zero fillers, zero fragrance masking chemicals, just pure oat and soothing plant lipids. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B381E] tracking-tight">
            Real Stories from Happy Parents
          </h2>
          <p className="text-sm sm:text-base text-[#596D5C]">
            See why parents and pediatric nurses trust Piwva for their babies&apos; daily comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DFE8D9] shadow-xs hover:shadow-md hover:border-[#C8DCBE] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* 5 stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h3 className="font-bold text-base text-[#1B381E]">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#596D5C] leading-relaxed">
                  {rev.content}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#EEF4EA] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1B381E]">{rev.author}</div>
                  <div className="text-[11px] text-[#697E6B]">{rev.role}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#3D632F] bg-[#EAF2E4] px-2.5 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3 text-[#4D6D2E]" />
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

