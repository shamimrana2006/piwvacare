"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CARE_PROGRAMS,
  FIRST_90_DAYS_DATA,
} from "@/data/care-guide-days";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Heart,
  ArrowRight,
  BookOpen,
  Filter,
  Sparkles,
  Layers,
} from "lucide-react";
import { DoodleHeart } from "@/components/decorations";

export function CareGuidePage() {
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>("all");
  const [searchDayQuery, setSearchDayQuery] = useState("");

  const filteredDays = FIRST_90_DAYS_DATA.filter((d) => {
    const matchesPhase =
      selectedPhaseFilter === "all" ||
      (selectedPhaseFilter === "phase-1" && d.dayNumber <= 14) ||
      (selectedPhaseFilter === "phase-2" && d.dayNumber > 14 && d.dayNumber <= 30) ||
      (selectedPhaseFilter === "phase-3" && d.dayNumber > 30 && d.dayNumber <= 60) ||
      (selectedPhaseFilter === "phase-4" && d.dayNumber > 60);

    const matchesSearch =
      searchDayQuery === "" ||
      d.title.toLowerCase().includes(searchDayQuery.toLowerCase()) ||
      d.subtitle.toLowerCase().includes(searchDayQuery.toLowerCase()) ||
      `day ${d.dayNumber}`.includes(searchDayQuery.toLowerCase()) ||
      `d${d.dayNumber}`.includes(searchDayQuery.toLowerCase());

    return matchesPhase && matchesSearch;
  });

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="soft"
              className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#4D6D2E]" />
              The Piwva Baby Care Library
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
            Gentle Developmental Pathways
          </h1>

          <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
            Evidence-based infant care roadmaps crafted with certified pediatric dermatologists. Every day has its own dedicated page with step-by-step guidance, normal checks, and loving rituals.
          </p>
        </div>

        {/* Available Programs Showcase (Multiple Guides) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E]">
                Comprehensive Care Library
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E]">
                Explore Our Developmental Roadmaps
              </h2>
            </div>
            <span className="text-xs text-[#7A8E7C] font-semibold hidden sm:inline">
              {CARE_PROGRAMS.length} Developmental Roadmaps
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARE_PROGRAMS.map((prog) => {
              const isActive = prog.status === "active";
              return (
                <div
                  key={prog.id}
                  className={`rounded-3xl border p-6 flex flex-col justify-between transition-all ${
                    isActive
                      ? "bg-white border-[#4D6D2E] shadow-md shadow-[#4D6D2E]/10 ring-1 ring-[#4D6D2E]/20"
                      : "bg-white/70 border-[#DEE8D8] opacity-90 hover:bg-white"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#F5EDE1] mb-4">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#1A3B22]">
                        {prog.duration}
                      </div>
                      {isActive && (
                        <div className="absolute top-3 right-3 bg-[#4D6D2E] text-white px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                          Active Now
                        </div>
                      )}
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#EBF3E7] text-[#325826]"
                          : "bg-[#F3EDE2] text-[#69563A]"
                      }`}
                    >
                      {prog.badge}
                    </span>

                    <h3 className="text-lg font-bold text-[#1B381E] leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-[#596D5C] leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#EEF5EA]">
                    {isActive ? (
                      <Link
                        href="/care-guide/day-1"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#4D6D2E] hover:bg-[#3D5624] text-white py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors"
                      >
                        <span>Start Day 1 Routine</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <div className="text-center py-2 text-[11px] font-semibold text-[#8C9E8E] bg-[#FAF7F2] rounded-full">
                        In Preparation &bull; Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Program: The First 90 Days Hub & Day Browser */}
        <div className="bg-white rounded-[36px] sm:rounded-[48px] p-6 sm:p-12 lg:p-16 border border-[#DEE8D8] shadow-sm mb-16">
          <div className="max-w-3xl space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5" />
              Featured Flagship Pathway
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B381E] leading-tight">
              The First 90 Days: Complete Daily Roadmap
            </h2>

            <p className="text-sm sm:text-base text-[#596D5C] leading-relaxed">
              Every single day from birth to 3 months has a dedicated page with step-by-step guidance on how to care for your baby&apos;s skin, cord, bath, sleep, and emotional bonding.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/care-guide/day-1"
                className="inline-flex items-center gap-2 bg-[#4D6D2E] hover:bg-[#3D5624] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-[#4D6D2E]/20 transition-all"
              >
                <span>Begin with Day 1: Vernix & Gentle Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-[#7A8E7C]">
                Or select any day below to jump straight to its guidance
              </span>
            </div>
          </div>

          {/* Phase Filter Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E7EFE2] mb-8">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All 90 Days" },
                { id: "phase-1", label: "Phase 1: Days 1–14 (Newborn)" },
                { id: "phase-2", label: "Phase 2: Days 15–30 (Rhythm)" },
                { id: "phase-3", label: "Phase 3: Days 31–60 (Senses)" },
                { id: "phase-4", label: "Phase 4: Days 61–90 (Resilience)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedPhaseFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedPhaseFilter === tab.id
                      ? "bg-[#4D6D2E] text-white shadow-2xs"
                      : "bg-[#FAF7F2] text-[#556958] hover:bg-[#EBF3E7]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search Day (e.g. Day 14, cradle cap...)"
                value={searchDayQuery}
                onChange={(e) => setSearchDayQuery(e.target.value)}
                className="w-full h-10 px-4 rounded-full border border-[#D6E4CF] bg-[#FAF7F2] text-xs text-[#1A3B22] placeholder:text-[#889B8A] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
              />
            </div>
          </div>

          {/* 90-Day Interactive Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDays.map((day) => (
              <Link
                key={day.dayNumber}
                href={`/care-guide/${day.slug}`}
                className="group p-5 rounded-2xl bg-[#FAF7F2] border border-[#DEE8D8] hover:bg-white hover:border-[#4D6D2E] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#4D6D2E] bg-white border border-[#D6E5CF] px-2.5 py-0.5 rounded-full">
                      Day {day.dayNumber}
                    </span>
                    <span className="text-[11px] text-[#7A8E7C] flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#4D6D2E]" />
                      {day.readTime}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#1B381E] leading-snug group-hover:text-[#4D6D2E] transition-colors">
                    {day.title}
                  </h4>

                  <p className="text-xs text-[#596D5C] line-clamp-2 leading-relaxed">
                    {day.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#E8EFE3] flex items-center justify-between text-xs font-semibold text-[#4D6D2E]">
                  <span>Open Day {day.dayNumber} Guidance</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {filteredDays.length === 0 && (
            <div className="text-center py-12 space-y-2">
              <p className="font-semibold text-sm text-[#1B381E]">
                No day matched your filter &ldquo;{searchDayQuery}&rdquo;
              </p>
              <button
                onClick={() => {
                  setSelectedPhaseFilter("all");
                  setSearchDayQuery("");
                }}
                className="text-xs text-[#4D6D2E] font-semibold underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
