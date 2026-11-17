"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StayUpdatedModal } from "@/components/stay-updated-modal";
import { SearchDialog } from "@/components/search-dialog";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductDetailModal } from "@/components/product-detail-modal";
import {
  CARE_PROGRAMS,
  FIRST_90_DAYS_DATA,
  DayGuide,
} from "@/data/care-guide-days";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Clock,
  ArrowRight,
  ArrowLeft,
  Edit3,
  Trash2,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { BookCinematic } from "./book-cinematic";

const DAY_CARD_IMAGES = [
  "/images/hero-baby.jpg",
  "/images/baby-footprints.jpg",
  "/images/promise-hands.jpg",
  "/images/baby-handprint-sand.jpg",
  "/images/lotion-sand-nature.jpg",
];

const getDayCardImage = (dayNumber: number, fallback?: string): string => {
  if (fallback && fallback !== "/images/hero-baby.jpg") {
    return fallback;
  }
  return DAY_CARD_IMAGES[(dayNumber - 1) % DAY_CARD_IMAGES.length];
};

interface DayNote {
  note: string;
  preferredTime?: string;
  completed?: boolean;
}

export default function CareGuideRoute() {
  const router = useRouter();
  const [stayUpdatedOpen, setStayUpdatedOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Pathways / Course selection state
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>("all");
  const [searchDayQuery, setSearchDayQuery] = useState("");

  // Edit / Note modal state
  const [editingDay, setEditingDay] = useState<DayGuide | null>(null);
  const [editNoteText, setEditNoteText] = useState("");
  const [editTimeText, setEditTimeText] = useState("");
  const [customNotes, setCustomNotes] = useState<Record<number, DayNote>>({});

  // Load custom notes and check URL hash on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("piwva_day_notes");
        if (saved) {
          setCustomNotes(JSON.parse(saved));
        }
      } catch {
        // ignore
      }

      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;
      if (
        params.get("program") === "first-90-days" ||
        hash === "#first-90-days" ||
        hash === "#roadmap"
      ) {
        setSelectedCourse("first-90-days");
      }
    }
  }, []);

  const handleOpenEdit = (day: DayGuide) => {
    setEditingDay(day);
    const existing = customNotes[day.dayNumber];
    setEditNoteText(existing?.note || "");
    setEditTimeText(existing?.preferredTime || "");
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDay) return;

    const updated = {
      ...customNotes,
      [editingDay.dayNumber]: {
        note: editNoteText.trim(),
        preferredTime: editTimeText.trim(),
      },
    };

    setCustomNotes(updated);
    try {
      localStorage.setItem("piwva_day_notes", JSON.stringify(updated));
    } catch {
      // ignore
    }
    setEditingDay(null);
  };

  const handleDeleteNote = (dayNumber: number) => {
    const updated = { ...customNotes };
    delete updated[dayNumber];
    setCustomNotes(updated);
    try {
      localStorage.setItem("piwva_day_notes", JSON.stringify(updated));
    } catch {
      // ignore
    }
    setEditingDay(null);
  };

  const filteredDays = FIRST_90_DAYS_DATA.filter((d) => {
    const matchesPhase =
      selectedPhaseFilter === "all" ||
      (selectedPhaseFilter === "phase-1" && d.dayNumber <= 14) ||
      (selectedPhaseFilter === "phase-2" &&
        d.dayNumber > 14 &&
        d.dayNumber <= 30) ||
      (selectedPhaseFilter === "phase-3" &&
        d.dayNumber > 30 &&
        d.dayNumber <= 60) ||
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
    <main className="min-h-screen bg-[#FAF7F2] text-[#1A3B22]">
      <Navbar
        onOpenStayUpdated={() => setStayUpdatedOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartCount}
      />

      <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* VIEW 1: Main Care Guide Library (Interactive 3D Book & Upcoming Course) */}
          {!selectedCourse && (
            <div>
              {/* Header Hero */}
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
                  Gentle Developmental Pathways
                </h1>

                <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
                  Evidence-based infant care roadmaps crafted with certified pediatric dermatologists.
                  Open our interactive 90-Day Book to explore day-by-day rituals, skin biology, and gentle guidance.
                </p>
              </div>

              {/* 3D Interactive Book + Upcoming Course Showcase */}
              <div className="mb-20">
                <BookCinematic
                  isOpen={selectedCourse === "first-90-days"}
                  onOpenRoadmap={() => {
                    setSelectedCourse("first-90-days");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  onCloseBook={() => setSelectedCourse(null)}
                />
              </div>
            </div>
          )}

          {/* VIEW 2: Inside Course View - The First 90 Days Complete Daily Roadmap (With Images & Edit Options) */}
          {selectedCourse === "first-90-days" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Top Back Navigation Bar */}
              <div className="flex items-center justify-between pb-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCourse(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#4D6D2E] hover:text-[#2E4822] bg-white border border-[#D5E4CE] px-4 py-2 rounded-full shadow-2xs transition-all hover:-translate-x-1 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Pathways</span>
                </button>

                <div className="text-xs text-[#7A8E7C] font-semibold hidden sm:flex items-center gap-2">
                  <span>The First 90 Days</span>
                  <span>&bull;</span>
                  <span>90 Dedicated Daily Pages</span>
                </div>
              </div>

              {/* The First 90 Days Roadmap Container */}
              <div className="bg-white rounded-[36px] sm:rounded-[48px] p-6 sm:p-12 lg:p-16 border border-[#DEE8D8] shadow-sm mb-16">
                {/* Section Header */}
                <div className="max-w-3xl space-y-3 mb-10">
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

                {/* 90-Day Interactive Cards Grid with IMAGES & EDIT OPTIONS (Click anywhere to navigate) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDays.map((day) => {
                    const cardImg = getDayCardImage(day.dayNumber, day.image);
                    const hasCustomNote = !!customNotes[day.dayNumber]?.note;

                    return (
                      <div
                        key={day.dayNumber}
                        onClick={() => router.push(`/care-guide/${day.slug}`)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            router.push(`/care-guide/${day.slug}`);
                          }
                        }}
                        className="group rounded-3xl bg-[#FAF7F2] border border-[#DEE8D8] hover:bg-white hover:border-[#4D6D2E] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer text-left"
                      >
                        <div>
                          {/* Card Image Banner */}
                          <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F5EDE1]">
                            <Image
                              src={cardImg}
                              alt={day.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                            {/* Floating Day Badge */}
                            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-[#2D5323] shadow-xs">
                              Day {day.dayNumber}
                            </div>

                            {/* Floating Read Time */}
                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#B8DC9E]" />
                              <span>{day.readTime}</span>
                            </div>

                            {/* Saved Note Indicator Badge */}
                            {hasCustomNote && (
                              <div className="absolute bottom-2.5 left-3 bg-[#4D6D2E] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-xs">
                                <Edit3 className="w-2.5 h-2.5" />
                                <span>Personalized</span>
                              </div>
                            )}
                          </div>

                          {/* Content Area */}
                          <div className="p-5 space-y-2">
                            <h4 className="text-base font-bold text-[#1B381E] leading-snug group-hover:text-[#4D6D2E] transition-colors">
                              {day.title}
                            </h4>

                            <p className="text-xs text-[#596D5C] line-clamp-2 leading-relaxed">
                              {day.subtitle}
                            </p>

                            {/* Preview of custom note if saved */}
                            {hasCustomNote && (
                              <div className="mt-2 p-2.5 rounded-xl bg-[#EBF3E7] border border-[#D5E5CB] text-[11px] text-[#2F4F24] italic line-clamp-2">
                                &ldquo;{customNotes[day.dayNumber].note}&rdquo;
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Footer Actions: Click anywhere navigates; button edits note */}
                        <div className="p-5 pt-0 border-t border-[#E8EFE3]/80 flex items-center justify-between gap-2 mt-2">
                          <div className="inline-flex items-center gap-1 text-xs font-bold text-[#4D6D2E] group-hover:text-[#2F4D20] transition-colors">
                            <span>Open Guidance</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEdit(day);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-[#EBF3E7] text-[#4F6753] hover:text-[#2F4D20] border border-[#DCE7D6] text-xs font-semibold shadow-2xs transition-all cursor-pointer relative z-10"
                            title="Edit Day Routine / Add Personal Notes"
                          >
                            <Edit3 className="w-3 h-3 text-[#4D6D2E]" />
                            <span>{hasCustomNote ? "Edit Note" : "Add Note"}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
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
                      className="text-xs text-[#4D6D2E] font-semibold underline cursor-pointer"
                    >
                      Reset all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Modal: Edit Routine / Add Personal Note */}
          {editingDay && (
            <Dialog
              open={!!editingDay}
              onOpenChange={(open) => !open && setEditingDay(null)}
            >
              <DialogContent className="sm:max-w-[480px] bg-[#FAF7F2] border-[#D6E5CF] text-[#1A3B22] p-6 rounded-3xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-[#1B381E]">
                    Edit Day {editingDay.dayNumber} Routine Note
                  </DialogTitle>
                  <p className="text-xs text-[#596D5C]">
                    Personalize this day for your baby with milestone notes, feeding times, or skin observations.
                  </p>
                </DialogHeader>

                <form onSubmit={handleSaveNote} className="space-y-4 pt-3">
                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Day Topic
                    </label>
                    <div className="p-3 rounded-2xl bg-white border border-[#DCE7D6] text-xs font-medium text-[#2F4432]">
                      {editingDay.title}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Personal Baby Note / Observation
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Maya loved the skin-to-skin touch after 10am feed. Umbilical cord stump looks clean and dry."
                      value={editNoteText}
                      onChange={(e) => setEditNoteText(e.target.value)}
                      className="w-full rounded-2xl border border-[#D6E5CF] bg-white p-3 text-xs text-[#1A3B22] placeholder:text-[#889B8A] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Preferred Routine Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 10:30 AM (After sponge wipe)"
                      value={editTimeText}
                      onChange={(e) => setEditTimeText(e.target.value)}
                      className="w-full h-11 px-4 rounded-full border border-[#D6E5CF] bg-white text-xs text-[#1A3B22] placeholder:text-[#889B8A] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {customNotes[editingDay.dayNumber] ? (
                      <button
                        type="button"
                        onClick={() => handleDeleteNote(editingDay.dayNumber)}
                        className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-semibold cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove Note</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setEditingDay(null)}
                        className="rounded-full text-xs h-9 px-4 cursor-pointer"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full text-xs h-9 px-5 font-bold cursor-pointer"
                      >
                        Save Note
                      </Button>
                    </div>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <Footer />

      <StayUpdatedModal
        open={stayUpdatedOpen}
        onOpenChange={setStayUpdatedOpen}
      />
      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onSelectProduct={() => setProductDetailOpen(true)}
      />
      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      <ProductDetailModal
        open={productDetailOpen}
        onOpenChange={setProductDetailOpen}
        onAddToCart={() => setCartCount((c) => c + 1)}
      />
    </main>
  );
}
