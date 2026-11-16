"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DayGuide,
  FIRST_90_DAYS_DATA,
} from "@/data/care-guide-days";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Heart,
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Grid,
  Check,
  BookOpen,
} from "lucide-react";
import { DoodleHeart } from "@/components/decorations";

interface DayGuideDetailViewProps {
  guide: DayGuide;
}

export function DayGuideDetailView({ guide }: DayGuideDetailViewProps) {
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [gridOpen, setGridOpen] = useState(false);

  const prevDay = guide.dayNumber > 1 ? guide.dayNumber - 1 : null;
  const nextDay = guide.dayNumber < 90 ? guide.dayNumber + 1 : null;

  const toggleCheck = (idx: number) => {
    if (completedItems.includes(idx)) {
      setCompletedItems(completedItems.filter((i) => i !== idx));
    } else {
      setCompletedItems([...completedItems, idx]);
    }
  };

  const progressPercent = Math.round((guide.dayNumber / 90) * 100);

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24">
      {/* Top Sticky Bar */}
      <div className="sticky top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3EDDD] py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            href="/care-guide"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4D6D2E] hover:text-[#2C4E20] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Care Guide Library</span>
            <span className="sm:hidden">Library</span>
          </Link>

          {/* Day indicator and progress */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#1B381E] bg-[#EBF3E7] px-3 py-1 rounded-full border border-[#D5E5CB]">
              Day {guide.dayNumber} of 90 ({progressPercent}%)
            </span>
            <button
              type="button"
              onClick={() => setGridOpen(!gridOpen)}
              className="text-xs font-semibold text-[#506853] hover:text-[#1A3B22] flex items-center gap-1 bg-white border border-[#D7E4D0] px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              <Grid className="w-3.5 h-3.5 text-[#4D6D2E]" />
              <span className="hidden sm:inline">All 90 Days</span>
            </button>
          </div>

          {/* Quick Prev / Next Buttons */}
          <div className="flex items-center gap-1.5">
            {prevDay ? (
              <Link
                href={`/care-guide/day-${prevDay}`}
                className="w-8 h-8 rounded-full border border-[#D7E4D0] bg-white flex items-center justify-center text-[#1A3B22] hover:bg-[#EBF3E7] transition-colors"
                title={`Go to Day ${prevDay}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <span className="w-8 h-8 rounded-full border border-transparent bg-transparent" />
            )}

            {nextDay && (
              <Link
                href={`/care-guide/day-${nextDay}`}
                className="w-8 h-8 rounded-full border border-[#D7E4D0] bg-white flex items-center justify-center text-[#1A3B22] hover:bg-[#EBF3E7] transition-colors"
                title={`Go to Day ${nextDay}`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* 90-Day Quick Drawer Menu (Collapsible) */}
        {gridOpen && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 animate-in slide-in-from-top-2">
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#DCE8D5] shadow-lg max-h-72 overflow-y-auto">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B381E]">
                  Jump to Any Day (1 to 90):
                </h4>
                <button
                  onClick={() => setGridOpen(false)}
                  className="text-xs text-[#7A8E7C] hover:text-[#1A3B22]"
                >
                  Close &times;
                </button>
              </div>
              <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-1.5">
                {FIRST_90_DAYS_DATA.map((d) => (
                  <Link
                    key={d.dayNumber}
                    href={`/care-guide/${d.slug}`}
                    onClick={() => setGridOpen(false)}
                    className={`py-1.5 text-center text-xs font-semibold rounded-xl border transition-all ${
                      d.dayNumber === guide.dayNumber
                        ? "bg-[#4D6D2E] text-white border-[#4D6D2E]"
                        : "bg-[#FAF7F2] text-[#4A5D4D] border-[#DEE8D8] hover:border-[#4D6D2E]"
                    }`}
                  >
                    D{d.dayNumber}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Main Day Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-xs text-[#6B806E] font-medium">
            <Clock className="w-3.5 h-3.5 text-[#4D6D2E]" />
            <span>{guide.readTime}</span>
            <span>&bull;</span>
            <span>{guide.phase}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B381E] leading-tight tracking-tight">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-[#596D5C] leading-relaxed">
            {guide.subtitle}
          </p>
        </div>

        {/* Day Visual Banner */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#F5EDE1] mb-10">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#DCECD6]">
                Day {guide.dayNumber} Routine
              </p>
              <h3 className="text-sm sm:text-base font-bold truncate">
                {guide.title}
              </h3>
            </div>
            <DoodleHeart className="w-8 h-8 text-white stroke-[2.2] hidden sm:block" />
          </div>
        </div>

        {/* Step-by-Step Guidance: কীভাবে কী করবেন */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DEE8D8] shadow-xs mb-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-[#1B381E]">
              What to Do on Day {guide.dayNumber}
            </h2>
            <p className="text-xs text-[#596D5C]">
              Pediatrician-recommended instructions to follow with love and patience.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {guide.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5EFE1]"
              >
                <div className="w-8 h-8 rounded-full bg-[#4D6D2E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  0{idx + 1}
                </div>
                <div className="flex-1 text-sm text-[#273D2A] leading-relaxed">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Checklist */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DEE8D8] shadow-xs mb-8 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#1B381E] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4D6D2E]" />
              Today&apos;s Gentle Checklist
            </h3>
            <span className="text-xs font-semibold text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
              {completedItems.length} of {guide.checklist.length} Completed
            </span>
          </div>

          <div className="space-y-2.5">
            {guide.checklist.map((item, idx) => {
              const isChecked = completedItems.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 cursor-pointer ${
                    isChecked
                      ? "bg-[#EBF3E7]/60 border-[#C4DEB8] text-[#1B381E]"
                      : "bg-[#FAF7F2] border-[#DEE8D8] text-[#4A5D4D] hover:border-[#4D6D2E]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                      isChecked
                        ? "bg-[#4D6D2E] border-[#4D6D2E] text-white"
                        : "border-[#AEC2AC] bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      isChecked ? "line-through opacity-80" : ""
                    }`}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* What Is Normal vs When to Call Doctor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-3xl bg-[#F4F9F1] border border-[#DCEAD6] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5323]">
              <CheckCircle2 className="w-4 h-4 text-[#4D6D2E]" />
              What Is Completely Normal
            </div>
            <p className="text-xs sm:text-sm text-[#4E6351] leading-relaxed">
              {guide.normalCheck}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FFF9F2] border border-[#F4E3D0] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9C5D1F]">
              <HelpCircle className="w-4 h-4 text-[#D97706]" />
              When to Consult Your Pediatrician
            </div>
            <p className="text-xs sm:text-sm text-[#775B3D] leading-relaxed">
              {guide.doctorNote}
            </p>
          </div>
        </div>

        {/* Parent Encouragement Quote */}
        <div className="bg-gradient-to-r from-[#F6F0E6] to-[#EFE7D8] rounded-3xl p-6 sm:p-8 border border-[#E7DDD0] flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 fill-[#4D6D2E]/20" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E]">
              Parent Whisper for Day {guide.dayNumber}
            </h4>
            <p className="text-sm font-medium text-[#1B381E] mt-0.5">
              &ldquo;{guide.parentTip}&rdquo;
            </p>
          </div>
        </div>

        {/* Next Day Navigation Button */}
        <div className="pt-4 border-t border-[#DFE8DA] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevDay ? (
            <Link
              href={`/care-guide/day-${prevDay}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#4D6D2E] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Day {prevDay} Routine
            </Link>
          ) : (
            <span />
          )}

          {nextDay ? (
            <Link
              href={`/care-guide/day-${nextDay}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4D6D2E] hover:bg-[#3D5624] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-md shadow-[#4D6D2E]/20"
            >
              <span>Continue to Day {nextDay} Routine</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/care-guide"
              className="inline-flex items-center gap-2 bg-[#4D6D2E] text-white px-7 py-3.5 rounded-full text-sm font-semibold"
            >
              Complete 90-Day Journey Celebration &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

