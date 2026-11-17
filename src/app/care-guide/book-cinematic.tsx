"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  RotateCcw,
  Bell,
  Heart,
  ChevronRight,
} from "lucide-react";
import { DoodleHeart } from "@/components/decorations";
import confetti from "canvas-confetti";

interface BookCinematicProps {
  onOpenRoadmap: () => void;
  isOpen: boolean;
  onCloseBook: () => void;
}

export function BookCinematic({
  onOpenRoadmap,
  isOpen,
  onCloseBook,
}: BookCinematicProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [bookOpened, setBookOpened] = useState(isOpen);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Sync internal open state with parent
  useEffect(() => {
    setBookOpened(isOpen);
  }, [isOpen]);

  // Canvas Magical Particle System for Cinematic Opening
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
      life: number;
      maxLife: number;
      sparkleSpeed: number;
    }

    const particles: Particle[] = [];
    const colors = [
      "rgba(245, 215, 120,", // Gold
      "rgba(255, 235, 170,", // Warm light gold
      "rgba(141, 180, 117,", // Piwva sage green
      "rgba(230, 242, 220,", // Pale cream
      "rgba(255, 255, 255,", // Pure sparkle white
    ];

    const createParticle = (originX: number, originY: number, burst = false): Particle => {
      const angle = burst ? Math.random() * Math.PI * 2 : (Math.random() - 0.5) * Math.PI - Math.PI / 2;
      const speed = burst ? Math.random() * 4 + 1.5 : Math.random() * 1.5 + 0.5;
      return {
        x: originX + (Math.random() - 0.5) * 40,
        y: originY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (burst ? 0 : 0.8),
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 80 + 40,
        sparkleSpeed: Math.random() * 0.1 + 0.05,
      };
    };

    let time = 0;
    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Ambient particles floating around the book
      if (particles.length < 50 && Math.random() < 0.3) {
        particles.push(createParticle(width / 2, height / 2 + 50));
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Gentle oscillation
        p.x += Math.sin(time * 0.05 + i) * 0.4;

        const progress = p.life / p.maxLife;
        const currentAlpha = p.alpha * Math.sin(progress * Math.PI);

        if (currentAlpha > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${currentAlpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(235, 205, 110, 0.8)";
          ctx.fill();
        }

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Trigger Cinematic Book Opening Sequence
  const handleOpenBook = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // 1. Confetti burst of golden & soft green sparkles
    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.55, x: 0.5 },
        colors: ["#D4AF37", "#4D6D2E", "#FAF7F2", "#8CB475", "#F7E7CE"],
        shapes: ["circle"],
        scalar: 0.9,
      });
    } catch {
      // ignore
    }

    // 2. Open book 3D animation
    setBookOpened(true);

    // 3. Smoothly invoke parent roadmap transition after cover swings open
    setTimeout(() => {
      setIsAnimating(false);
      onOpenRoadmap();
    }, 1100);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookOpened(false);
    onCloseBook();
  };

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Background Canvas for magical glowing sparkles & ambient dust */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Main Grid: 90 Days Interactive Book + 1 Upcoming Course */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ========================================================
            COURSE 1: THE FIRST 90 DAYS (Interactive 3D Hardcover Book)
            ======================================================== */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-[560px] perspective-1600 relative">
            {/* Floating Hint Pill */}
            {!bookOpened && (
              <div className="text-center mb-4">
                <button
                  type="button"
                  onClick={handleOpenBook}
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-[#EBF3E7] text-[#1B381E] border border-[#D5E4CE] px-4 py-1.5 rounded-full text-xs font-bold shadow-md shadow-[#2D4525]/10 hover:scale-105 transition-all cursor-pointer group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" />
                  <span>Click to Open 3D Care Book</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4D6D2E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* 3D BOOK CONTAINER */}
            <div
              onClick={() => {
                if (!bookOpened) handleOpenBook();
              }}
              className={`relative mx-auto transition-all duration-1000 ease-out preserve-3d cursor-pointer ${
                bookOpened
                  ? "w-full max-w-[540px] sm:max-w-[580px] h-[440px] sm:h-[480px] translate-y-0"
                  : "w-[280px] sm:w-[330px] h-[400px] sm:h-[460px] hover:scale-103 -rotate-y-12 rotate-x-6 hover:-rotate-y-4 hover:rotate-x-2"
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* ====================================================
                  CASE A: CLOSED BOOK STATE (3D Hardcover Journal)
                  ==================================================== */}
              {!bookOpened && (
                <div className="relative w-full h-full rounded-2xl book-paper-stack bg-[#1A381E] border-2 border-[#D4AF37]/40 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group">
                  {/* Leather texture / Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A2B]/40 via-transparent to-black/60 pointer-events-none" />

                  {/* Left Spine Shadow & Gold Foil Lines */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/50 via-white/10 to-transparent border-r border-[#D4AF37]/30 flex flex-col justify-between py-6 items-center">
                    <span className="w-2.5 h-0.5 bg-[#D4AF37]/60 rounded-full" />
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37]/70 -rotate-90 whitespace-nowrap font-serif font-bold">
                      PIWVA &bull; VOL I
                    </span>
                    <span className="w-2.5 h-0.5 bg-[#D4AF37]/60 rounded-full" />
                  </div>

                  {/* Golden Filigree Corner Ornaments */}
                  <div className="absolute top-3 right-3 text-[#D4AF37]/80">
                    <DoodleHeart className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="absolute bottom-3 left-10 text-[#D4AF37]/60">
                    <DoodleHeart className="w-5 h-5 stroke-[2] rotate-12" />
                  </div>

                  {/* Top Header of Cover */}
                  <div className="relative pl-6 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#E3D19F]">
                      <Sparkles className="w-3 h-3 text-[#F5D88A]" />
                      <span>Interactive Nursery Edition</span>
                    </div>
                    <p className="text-[11px] text-[#A6C5A2] font-serif italic">
                      From Birth to 3 Months
                    </p>
                  </div>

                  {/* Center Oval Picture Window */}
                  <div className="relative pl-6 flex flex-col items-center">
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-3 border-[#D4AF37] shadow-inner bg-[#224426] p-1">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/images/baby-footprints.jpg"
                          alt="The First 90 Days Baby Care Book"
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Gold Title Plaque */}
                    <div className="mt-4 text-center space-y-0.5">
                      <h3 className="text-xl sm:text-2xl font-black text-[#FFFDF7] tracking-tight uppercase font-serif drop-shadow-sm">
                        The First 90 Days
                      </h3>
                      <p className="text-[11px] font-semibold text-[#D4AF37] tracking-wide">
                        Complete Daily Care Roadmap
                      </p>
                    </div>
                  </div>

                  {/* Bottom Footer Stamp on Cover */}
                  <div className="relative pl-6 pt-2 border-t border-[#D4AF37]/25 flex items-center justify-between text-[10px] text-[#C2DCBE]">
                    <span>Pediatric Science &bull; 90 Days</span>
                    <span className="font-bold text-[#EADBB6]">Vol. 01</span>
                  </div>

                  {/* Silk Satin Bookmark Ribbon dangling out bottom right */}
                  <div className="absolute -bottom-6 right-12 w-4 h-12 bg-gradient-to-b from-[#B8860B] to-[#DAA520] shadow-md -rotate-6 rounded-b-xs" />

                  {/* Hover Shine Glint Sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-gold-shine" />
                </div>
              )}

              {/* ====================================================
                  CASE B: OPENED BOOK SPREAD VIEW (Cinematic 2 Pages)
                  ==================================================== */}
              {bookOpened && (
                <div className="relative w-full h-full rounded-3xl bg-[#FAF7F2] border-4 border-[#2D5A2B] shadow-2xl p-4 sm:p-7 flex flex-col justify-between overflow-hidden animate-in zoom-in-95 duration-500">
                  {/* Book Spine Center Fold Shadow */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/10 via-black/25 to-black/10 pointer-events-none z-20" />

                  {/* Opened 2 Pages Layout */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-8 h-full relative z-10">
                    {/* LEFT PAGE: Dedication & Milestone Phases */}
                    <div className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#E9DFCF] shadow-inner flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="border-b border-[#EBE1D0] pb-2">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#7B6A4C]">
                            Piwva Daily Care Journal
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-[#1B381E] leading-snug font-serif">
                            The First 90 Days
                          </h4>
                        </div>

                        <p className="text-[11px] sm:text-xs text-[#596D5C] italic leading-relaxed">
                          &ldquo;Every single day from birth to 3 months has a dedicated guidance page. Crafted with motherly love and certified pediatric dermatologists.&rdquo;
                        </p>

                        {/* 4 Phases List */}
                        <div className="space-y-1.5 pt-1 text-[10px] sm:text-[11px] text-[#2D5025]">
                          <div className="flex items-center gap-1.5 font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-[#4D6D2E]" />
                            <span>Phase 1 (Days 1–14): Newborn Vernix & Cord</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-[#4D6D2E]" />
                            <span>Phase 2 (Days 15–30): Rhythm & Soothing</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-[#4D6D2E]" />
                            <span>Phase 3 (Days 31–60): Senses & Touch</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-[#4D6D2E]" />
                            <span>Phase 4 (Days 61–90): Skin Resilience</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-[9px] text-[#8C7A5E] border-t border-[#EBE1D0] pt-2 flex items-center justify-between">
                        <span>90 Dedicated Daily Pages</span>
                        <DoodleHeart className="w-3.5 h-3.5 text-[#4D6D2E]" />
                      </div>
                    </div>

                    {/* RIGHT PAGE: Table of Milestones & Enter Button */}
                    <div className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#E9DFCF] shadow-inner flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="border-b border-[#EBE1D0] pb-2 flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#4D6D2E]">
                            Roadmap Curriculum
                          </span>
                          <span className="text-[10px] font-bold text-[#1B381E] bg-[#EBF3E7] px-2 py-0.5 rounded-full">
                            Days 1 to 90
                          </span>
                        </div>

                        <div className="space-y-2 text-[11px] sm:text-xs text-[#3E5242]">
                          <p className="leading-relaxed">
                            Turn each page as your baby grows. Includes daily step-by-step instructions, pediatrician checklists, and personal note saving.
                          </p>

                          <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E5EFE0] space-y-1">
                            <span className="text-[10px] font-bold text-[#1B381E] block">
                              First Step:
                            </span>
                            <span className="text-[11px] font-semibold text-[#4D6D2E] block">
                              Day 1: Vernix Caseosa Preservation
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Call to action inside open book */}
                      <div className="space-y-2 pt-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenRoadmap();
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#4D6D2E] hover:bg-[#3D5624] text-white py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-[#4D6D2E]/25 transition-all hover:scale-102 cursor-pointer"
                        >
                          <span>Explore Full Daily Roadmap</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={handleClose}
                          className="w-full text-center text-[11px] text-[#697E6B] hover:text-[#1B381E] font-semibold flex items-center justify-center gap-1 cursor-pointer pt-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Close Book</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            COURSE 2: UPCOMING COURSE (Volume II: Months 4 to 6)
            ======================================================== */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-8 border border-[#DEE8D8] shadow-sm relative overflow-hidden space-y-5">
            {/* Subtle background tone */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FAF4EA] rounded-full blur-2xl -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F3EDE2] text-[#7A6038] px-3 py-1 rounded-full border border-[#E8DDCD]">
                  Upcoming Milestone Course
                </span>
                <span className="text-xs font-semibold text-[#8C9E8E]">
                  Volume 02
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B381E] leading-tight">
                Months 4 to 6: Exploring, Teething & Solid Tastes
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#596D5C] leading-relaxed">
                As your baby transitions beyond the fourth trimester, new milestones begin. We are currently finalizing daily routines for rolling over, teething drool skin barriers, sensory touch, and gentle first solid tastes.
              </p>

              {/* Upcoming Feature Highlights */}
              <div className="space-y-2 pt-1 text-xs text-[#2A442E]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Teething skin comfort & drool barrier protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>First solid spoonful rituals & allergy safety checks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Tummy time progress & sitting balance exercises</span>
                </div>
              </div>

              {/* Upcoming Status Card */}
              <div className="pt-4 border-t border-[#EDF4E9] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#667E6A]">
                  <Clock className="w-4 h-4 text-[#4D6D2E]" />
                  <span>In Clinical Preparation &bull; 60 Daily Guides</span>
                </div>

                <div className="text-[11px] font-bold text-[#8C7A5E] bg-[#FAF7F2] border border-[#E5DECD] px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

