import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DayGuideDetailView } from "./day-guide-detail-view";
import { FIRST_90_DAYS_DATA, getDayBySlug, getDayGuide } from "@/data/care-guide-days";
import type { Metadata } from "next";

export const instant = false;

export async function generateStaticParams() {
  return FIRST_90_DAYS_DATA.map((d) => ({
    day: d.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ day: string }>;
}): Promise<Metadata> {
  const { day } = await params;
  const guide =
    getDayBySlug(day) ||
    getDayGuide(parseInt(day.replace("day-", ""), 10));

  if (!guide) {
    return {
      title: "Care Guide Day | Piwva Baby Care",
    };
  }

  return {
    title: `Day ${guide.dayNumber}: ${guide.title} | Piwva Care Guide`,
    description: guide.subtitle,
  };
}

export default async function CareGuideDayRoute({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const guide =
    getDayBySlug(day) ||
    getDayGuide(parseInt(day.replace("day-", ""), 10));

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1A3B22]">
      <Navbar />
      <DayGuideDetailView guide={guide} />
      <Footer />
    </main>
  );
}
