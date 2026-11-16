"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  MessageCircle,
  HelpCircle,
  Clock,
  CheckCircle2,
  Send,
  Heart,
  Calendar,
  PhoneCall,
  ShieldAlert,
  AlertTriangle,
  HeartPulse,
  Activity,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import confetti from "canvas-confetti";

export function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    babyAge: "0-3m",
    subject: "Upcoming Launch Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#4D6D2E", "#8EAF74", "#E5EEDD"],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const [emergencyQuery, setEmergencyQuery] = useState("");
  const [emergencyResult, setEmergencyResult] = useState<{
    query: string;
    level: "critical" | "urgent" | "moderate";
    levelLabel: string;
    levelColor: string;
    title: string;
    summary: string;
    actions: string[];
    warnings: string[];
    doNot: string[];
    hotline: string;
    hotlineName: string;
  } | null>(null);

  const getEmergencyTriage = (q: string) => {
    const text = q.toLowerCase();

    // 1. Fever / জ্বর
    if (
      text.includes("fever") ||
      text.includes("temp") ||
      text.includes("hot") ||
      text.includes("জ্বর") ||
      text.includes("গরম") ||
      text.includes("তাপ")
    ) {
      return {
        query: q,
        level: "critical" as const,
        levelLabel: "জরুরি সতর্কতা (Urgent / Critical)",
        levelColor: "bg-red-50 text-red-800 border-red-200",
        title: "বাচ্চার জ্বর / High Fever Triage",
        summary:
          "নবজাতক বা ৩ মাসের কম বয়সী শিশুর শরীরের তাপমাত্রা ১০০.৪°F (৩৮°C) বা তার বেশি হলে বিলম্ব না করে তাৎক্ষণিক ডাক্তার দেখান।",
        actions: [
          "বাচ্চার শরীরের অতিরিক্ত ভারী পোশাক খুলে দিন; পাতলা সুতি আরামদায়ক পোশাক পরান।",
          "ঘরের তাপমাত্রা স্বাভাবিক ও আরামদায়ক রাখুন (২২–২৪° সেলসিয়াস)।",
          "ঘন ঘন বুকের দুধ বা ফর্মুলা খাওয়ান যেন কোনোভাবেই পানিশূন্যতা না হয়।",
          "হালকা কুসুম গরম পানিতে নরম সুতি কাপড় ভিজিয়ে শরীর মুছে দিতে পারেন (কখনও ঠান্ডা পানি বা বরফ নয়)।",
        ],
        warnings: [
          "বাচ্চা খুব নিস্তেজ হয়ে পড়া বা জাগানো কঠিন হলে।",
          "টানা কান্নাকাটি বা গোঙানির মতো শব্দ করা।",
          "প্রস্রাবের পরিমাণ কমে যাওয়া (৬ ঘণ্টার বেশি ভেজা ডায়াপার না থাকা)।",
        ],
        doNot: [
          "ডাক্তারের সুনির্দিষ্ট প্রেসক্রিপশন ছাড়া প্যারাসিটামল বা কোনো ওষুধ দেবেন না।",
          "বাচ্চাকে কখনোই অ্যাসপিরিন (Aspirin) বা ঠান্ডা পানি দিয়ে স্নান করাবেন না।",
        ],
        hotline: "tel:18002221222",
        hotlineName: "জরুরি পেডিয়াট্রিক হেল্পলাইনে কল করুন: 1-800-222-1222",
      };
    }

    // 2. Swallowed / মুখে দিয়েছে / খেয়েছে
    if (
      text.includes("swallow") ||
      text.includes("mouth") ||
      text.includes("eat") ||
      text.includes("ingest") ||
      text.includes("মুখে") ||
      text.includes("খেয়ে") ||
      text.includes("ক্রিম") ||
      text.includes("lotion") ||
      text.includes("soap") ||
      text.includes("বিষ") ||
      text.includes("পয়জন")
    ) {
      return {
        query: q,
        level: "urgent" as const,
        levelLabel: "দ্রুত পর্যবেক্ষণ (Urgent Assessment)",
        levelColor: "bg-amber-50 text-amber-800 border-amber-200",
        title: "ক্রিম, লোশন বা অপরিচিত বস্তু মুখে দেওয়া / Accidental Ingestion",
        summary:
          "বাচ্চা মুখে কোনো লোশন বা অপরিচিত বস্তু দিলে আতঙ্কিত না হয়ে শান্ত থাকুন। Piwva সহ ভালো বেবি লোশন নন-টক্সিক হলেও সঠিক উপায়ে মুখ পরিষ্কার করা দরকার।",
        actions: [
          "বাচ্চার মুখে আঙুল দিয়ে জোর করবেন না; নরম ভেজা কাপড় দিয়ে মুখের ভেতরের অবশিষ্ট অংশ মুছে পরিষ্কার করুন।",
          "বাচ্চাকে অল্প বুকের দুধ বা পানি পান করান যেন গলার অস্বস্তি কমে।",
          "যে জিনিসটি মুখে দিয়েছিল তার বোতল বা মোড়ক নিজের কাছে রাখুন যাতে প্রয়োজনে হেল্পলাইনে নাম বলা যায়।",
          "বাচ্চার শ্বাস-প্রশ্বাস এবং স্বাভাবিক আচরণ ২০-৩০ মিনিট নিবিড়ভাবে লক্ষ্য করুন।",
        ],
        warnings: [
          "বাচ্চা বমি করলে বা অতিরিক্ত লালা ঝরলে।",
          "কাশি, গলায় আটকে যাওয়ার মতো আওয়াজ বা শ্বাসকষ্ট হলে।",
          "বাচ্চা নিস্তেজ বা অস্বাভাবিক আচরণ করলে দ্রুত ডাক্তারের কাছে যান।",
        ],
        doNot: [
          "বাচ্চাকে জোর করে বমি করানোর চেষ্টা করবেন না (Do NOT induce vomiting)।",
          "ডাক্তারের পরামর্শ ছাড়া কোনো লবণ-পানি বা ঘরোয়া ওষুধ খাওয়াবেন না।",
        ],
        hotline: "tel:18002221222",
        hotlineName: "পয়জন কন্ট্রোল হেল্পলাইনে কল করুন (ফ্রি ২৪/৭): 1-800-222-1222",
      };
    }

    // 3. Rash / র‍্যাশ / এলার্জি / লাল দাগ
    if (
      text.includes("rash") ||
      text.includes("hive") ||
      text.includes("allergy") ||
      text.includes("spot") ||
      text.includes("র‍্যাশ") ||
      text.includes("এলার্জি") ||
      text.includes("লাল") ||
      text.includes("চুলকানি") ||
      text.includes("ফোলা")
    ) {
      return {
        query: q,
        level: "urgent" as const,
        levelLabel: "ত্বকের জরুরি পর্যবেক্ষণ (Skin & Allergy Triage)",
        levelColor: "bg-amber-50 text-amber-800 border-amber-200",
        title: "আকস্মিক লাল র‍্যাশ বা এলার্জি / Sudden Skin Rash",
        summary:
          "বাচ্চার ত্বকে হঠাৎ লাল দাগ বা ফোলা দেখা দিলে প্রথমে খেয়াল করুন তার শ্বাসকষ্ট বা মুখমণ্ডল ফোলা আছে কিনা।",
        actions: [
          "নতুন কোনো সাবান, তেল, ওয়াইপ্স বা লোশন ব্যবহার করে থাকলে সাথে সাথে ধুয়ে বন্ধ করে দিন।",
          "আক্রান্ত ত্বক পরিষ্কার ও শুষ্ক রাখুন; আঁটসাঁট পোশাক খুলে হালকা সুতি কাপড় পরান।",
          "বাচ্চার হাত দিয়ে আঁচড়াতে দেবেন না; নখ ছোট রাখুন বা সুতি মিটেন পরিয়ে দিন।",
          "প্রয়োজনে চিকিৎসকের পরামর্শের জন্য র‍্যাশের স্পষ্ট ছবি তুলে রাখুন।",
        ],
        warnings: [
          "ঠোঁট, চোখ বা জিব ফুলে উঠলে (অ্যানাফিল্যাক্সিস ইমার্জেন্সি)।",
          "র‍্যাশের সাথে জ্বর বা শ্বাস নেওয়ার সময় শব্দ হলে তাৎক্ষণিক হাসপাতালে যান।",
        ],
        doNot: [
          "ডাক্তার না দেখিয়ে ফার্মেসি থেকে স্টেরয়েড ক্রিম বা কোনো মলম লাগাবেন না।",
          "খুব গরম পানি দিয়ে গোসল করাবেন না।",
        ],
        hotline: "tel:18002221222",
        hotlineName: "অন-কল পেডিয়াট্রিক নার্স: 1-800-222-1222",
      };
    }

    // 4. Breathing / শ্বাসকষ্ট / কাশি
    if (
      text.includes("breath") ||
      text.includes("gasp") ||
      text.includes("cough") ||
      text.includes("chok") ||
      text.includes("শ্বাস") ||
      text.includes("কাশি") ||
      text.includes("ঘড়ঘড়") ||
      text.includes("দম")
    ) {
      return {
        query: q,
        level: "critical" as const,
        levelLabel: "জরুরি হাসপাতাল সতর্কতা (Immediate ER Care)",
        levelColor: "bg-red-50 text-red-800 border-red-200",
        title: "বাচ্চার শ্বাসকষ্ট বা তীব্র কাশি / Respiratory Distress",
        summary:
          "বাচ্চা দ্রুত বা অস্বাভাবিক শব্দে শ্বাস নিলে বা বুকের খাঁচা ডেবে গেলে এটি তাৎক্ষণিক জরুরি চিকিৎসার লক্ষণ।",
        actions: [
          "বাচ্চাকে সোজা করে নিজের কোলে রাখুন (মাথা ও ঘাড় সোজা রাখুন যেন শ্বাসনালী খোলা থাকে)।",
          "বাচ্চার গলার চারপাশের আঁটসাঁট পোশাক ঢিলে করে দিন।",
          "নাক বন্ধ থাকলে ১-২ ফোঁটা নরমাল স্যালাইন দিয়ে নাক পরিষ্কার করুন।",
          "এক মুহূর্তও বিলম্ব না করে জরুরি অ্যাম্বুলেন্স (999 / 911 / 112) ডাকুন বা নিকটস্থ হাসপাতালে নিন।",
        ],
        warnings: [
          "প্রতি মিনিটে ৬০ বারের বেশি দ্রুত শ্বাস নেওয়া।",
          "শ্বাস নেওয়ার সময় বুকের খাঁচা ও পাঁজরের চামড়া ভেতরে ডেবে যাওয়া (retractions)।",
          "ঠোঁট বা নখ নীলচে হয়ে যাওয়া।",
        ],
        doNot: [
          "বাচ্চাকে শোয়ানো অবস্থায় রাখবেন না।",
          "ডাক্তারের পরামর্শ ছাড়া কোনো কাশির সিরাপ খাওয়াবেন না।",
        ],
        hotline: "tel:999",
        hotlineName: "জরুরি অ্যাম্বুলেন্স কল করুন: 999 / 911 / 112",
      };
    }

    // 5. Crying / কান্না / পেট ব্যথা / colic
    if (
      text.includes("cry") ||
      text.includes("colic") ||
      text.includes("pain") ||
      text.includes("screaming") ||
      text.includes("কান্না") ||
      text.includes("পেট") ||
      text.includes("ব্যথা") ||
      text.includes("চিৎকার")
    ) {
      return {
        query: q,
        level: "moderate" as const,
        levelLabel: "শান্ত করার জরুরি গাইড (Soothing & Comfort)",
        levelColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
        title: "বাচ্চার কান্না থামছে না / Inconsolable Crying & Colic",
        summary:
          "বাচ্চা একটানা কাঁদলে প্রথমে ক্ষুধা, ডায়াপার, পেটে গ্যাস বা শরীরের তাপমাত্রা চেক করুন।",
        actions: [
          "বাচ্চাকে কোলে নিয়ে পেটে বৃত্তাকারে ঘড়ির কাঁটার মতো আলতো মালিশ করুন।",
          "বাচ্চাকে পিঠে শুইয়ে দুই পা ধরে সাইকেলের প্যাডেলের মতো আলতো করে নাড়ান (গ্যাস বের হতে সাহায্য করে)।",
          "কাঁধে নিয়ে মৃদু দোলান অথবা হালকা গরম কাপড় পেটে আলতো ছোঁয়া দিন।",
          "হোয়াইট নয়েজ (ফ্যান বা পানির মৃদু শব্দ) অনেক সময় বাচ্চার নার্ভ শান্ত করে।",
        ],
        warnings: [
          "টানা ৩ ঘণ্টার বেশি তীব্র চিৎকার করে কান্না।",
          "পেট খুব শক্ত ও ফোলা থাকা এবং বমি করা।",
          "কান্নার সাথে তাপমাত্রা ১০০.৪°F বা বেশি হওয়া।",
        ],
        doNot: [
          "অস্থির হয়ে বাচ্চাকে কখনো জোরে ঝাঁকুনি (Shake) দেবেন না।",
          "ডাক্তারের পরামর্শ ছাড়া কোনো ঘুমের ওষুধ বা ড্রপ খাওয়াবেন না।",
        ],
        hotline: "tel:18002221222",
        hotlineName: "পেডিয়াট্রিক নার্স সাপোর্ট: 1-800-222-1222",
      };
    }

    // Default intelligent triage
    return {
      query: q,
      level: "urgent" as const,
      levelLabel: "জরুরি গাইডেন্স (Instant Pediatric Guidance)",
      levelColor: "bg-rose-50 text-rose-800 border-rose-200",
      title: "আপনার প্রশ্নের তাৎক্ষণিক জরুরি গাইড",
      summary: `"${q}" সম্পর্কে জরুরি অবস্থায় আতঙ্কিত না হয়ে শান্তভাবে বাচ্চার শারীরিক অবস্থা পর্যবেক্ষণ করুন।`,
      actions: [
        "বাচ্চার তাপমাত্রা ও স্বাভাবিক শ্বাস-প্রশ্বাস পরীক্ষা করুন।",
        "বাচ্চা সক্রিয় আছে কিনা নাকি খুব নিস্তেজ ও অলস হয়ে পড়েছে লক্ষ্য করুন।",
        "বাচ্চা প্রতি ২৪ ঘণ্টায় অন্তত ৬ বার প্রস্রাব করছে কিনা দেখুন।",
        "যেকোনো সন্দেহ বা আশঙ্কায় সরাসরি অন-ডিউটি পেডিয়াট্রিক নার্সকে কল করুন।",
      ],
      warnings: [
        "বাচ্চার শ্বাস নিতে কষ্ট হওয়া বা গোঙানির শব্দ।",
        "জ্বর ১০০.৪°F এর বেশি হওয়া (বিশেষ করে ৩ মাসের নিচে)।",
        "বাচ্চা ডাকলে সাড়া না দেওয়া বা খাবার খেতে অস্বীকার করা।",
      ],
      doNot: [
        "ডাক্তারের পরামর্শ ছাড়া কোনো ওষুধ খাওয়াবেন না।",
        "ইন্টারনেটের অপ্রমাণিত ঘরোয়া টোটকা প্রয়োগ করবেন না।",
      ],
      hotline: "tel:18002221222",
      hotlineName: "জরুরি অন-কল পেডিয়াট্রিশিয়ান: 1-800-222-1222 (বা 999)",
    };
  };

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emergencyQuery.trim()) return;
    setEmergencyResult(getEmergencyTriage(emergencyQuery));
  };

  const supportFaqs = [
    {
      q: "When will the first batch of Piwva products be available to purchase?",
      a: "Our debut flagship, piwva Baby Moisture Lotion (250ml), is currently in its final bottling and clinical safety verification phase. Parents on our VIP Waitlist will receive priority access and an exclusive 20% launch voucher before public release.",
    },
    {
      q: "Can I use Piwva on premature infants or babies with severe eczema?",
      a: "Our formulations are designed specifically for the most fragile newborn skin (0+ months) and are free from all common allergens. However, for premature infants in neonatal care or clinical eczema under medical treatment, we always recommend consulting your pediatrician first.",
    },
    {
      q: "Do you offer sample sachets for sensitive skin patch testing?",
      a: "Yes! Every VIP waitlist family will receive complimentary sample miniatures with their launch order so you can perform a small 24-hour wrist patch test with complete peace of mind.",
    },
    {
      q: "How does the Emergency Baby Health support work, and is any login required?",
      a: "Our Emergency Baby Health support is 100% open with zero barriers: no login, no passwords, and no account creation. You can directly dial our pediatric triage line (1-tap call), open an instant WhatsApp chat with our nurse team, or request an emergency 3-minute callback.",
    },
    {
      q: "How can I collaborate or become a brand ambassador?",
      a: "We love partnering with thoughtful pediatric nurses, midwives, doulas, and parenting creators! Send a note to partners@piwva.com with your social links or nursery story.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
            We&apos;re Here for You & Your Little One
          </h1>

          <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our upcoming product launch, ingredient sourcing, or need gentle newborn skincare guidance &mdash; our team of parents and pediatric nurses is here.
          </p>
        </div>

        {/* Urgent Baby Health Emergency Support - Single Input Box (No Login Required) */}
        <section
          id="emergency-support"
          aria-label="Emergency Baby Health Support"
          className="mb-16 rounded-[36px] bg-gradient-to-br from-[#FFF5F2] via-[#FDF8F5] to-[#FFF1ED] border-2 border-[#F6C8C1] p-6 sm:p-10 lg:p-12 shadow-xl shadow-red-950/5 relative overflow-hidden"
        >
          {/* Subtle warm rose ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs font-bold shadow-2xs mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                <span>24/7 Emergency Baby Health Triage &bull; Zero Login Required</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8A1818] tracking-tight">
                Emergency Baby Health Question?
              </h2>
              <p className="text-xs sm:text-base text-[#7A2E2E]">
                জরুরি মুহূর্তে কোনো লগইন বা পাসওয়ার্ডের ঝামেলা নেই। বাচ্চার কী সমস্যা হচ্ছে শুধু লিখুন — তাৎক্ষণিক সঠিক করণীয় জেনে নিন।
              </p>
            </div>

            {/* Single Big Input Box */}
            <form onSubmit={handleEmergencySubmit} className="space-y-3">
              <div className="relative flex items-center bg-white rounded-full p-2 border-2 border-[#F4A8A0] shadow-md focus-within:border-[#D32F2F] transition-all">
                <Input
                  type="text"
                  required
                  placeholder="যেমন: বাচ্চার ১০০ জ্বর / ক্রিম মুখে দিয়ে ফেলেছে / হঠাৎ গায়ে লাল র‍্যাশ / জোরে শ্বাস নিচ্ছে..."
                  value={emergencyQuery}
                  onChange={(e) => setEmergencyQuery(e.target.value)}
                  className="flex-1 bg-transparent border-0 text-sm sm:text-base text-[#1A3B22] placeholder:text-[#9A7B76] focus-visible:ring-0 focus-visible:ring-offset-0 px-4 h-12"
                />
                <Button
                  type="submit"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full px-5 sm:px-8 h-12 text-xs sm:text-sm font-bold shadow-md shadow-red-700/25 shrink-0 cursor-pointer flex items-center gap-2"
                >
                  <HeartPulse className="w-4 h-4" />
                  <span>জরুরি পরামর্শ পান</span>
                </Button>
              </div>

              {/* Quick Clickable Suggestions for panicked parents */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-[#7A3636]">
                <span className="font-semibold text-[11px] text-[#8C4646]">কুইক ট্যাপ:</span>
                {[
                  { label: "🌡️ বাচ্চার জ্বর (Fever)", query: "বাচ্চার ১০০ জ্বর এসেছে কি করব" },
                  { label: "🧴 ক্রিম বা লোশন মুখে দিয়েছে", query: "বাচ্চা লোশন মুখে দিয়ে ফেলেছে" },
                  { label: "🔴 হঠাৎ লাল র‍্যাশ বা এলার্জি", query: "হঠাৎ শরীরে লাল র‍্যাশ বা আমবাত" },
                  { label: "🫁 জোরে বা অস্বাভাবিক শ্বাস নিচ্ছে", query: "বাচ্চা জোরে শ্বাস নিচ্ছে বুক ডেবে যাচ্ছে" },
                  { label: "😭 একটানা কান্না থামছে না", query: "বাচ্চার কান্না থামছে না পেটে গ্যাস" },
                ].map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setEmergencyQuery(chip.query);
                      setEmergencyResult(getEmergencyTriage(chip.query));
                    }}
                    className="bg-white/90 hover:bg-white text-[#8A1818] border border-[#F2BCB5] hover:border-[#D32F2F] px-3 py-1 rounded-full text-[11px] font-semibold transition-all shadow-2xs cursor-pointer"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </form>

            {/* Instant Emergency Result Card */}
            {emergencyResult && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F4CCC6] shadow-lg space-y-5 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F5E1DD] pb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-1.5 ${emergencyResult.levelColor}`}>
                      {emergencyResult.levelLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1B381E]">
                      {emergencyResult.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setEmergencyResult(null);
                      setEmergencyQuery("");
                    }}
                    className="text-xs text-[#8A1818] font-bold underline hover:text-[#5E0F0F] self-start sm:self-auto cursor-pointer"
                  >
                    নতুন প্রশ্ন লিখুন &times;
                  </button>
                </div>

                {/* Summary */}
                <p className="text-sm font-semibold text-[#3B4D3E] bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8EDE5] leading-relaxed">
                  {emergencyResult.summary}
                </p>

                {/* 2 Column Guidance: What to do NOW vs What NOT to do */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Immediate Actions */}
                  <div className="p-4 rounded-2xl bg-[#F4F9F1] border border-[#D7EACD] space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D5A22] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#4D6D2E]" />
                      <span>এই মুহূর্তে করণীয় (Do This Now)</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#2F4432] leading-relaxed">
                      {emergencyResult.actions.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4D6D2E] mt-1.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What NOT to do */}
                  <div className="p-4 rounded-2xl bg-[#FFF6F5] border border-[#F6D0CB] space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C2121] flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#D32F2F]" />
                      <span>যা কখনোই করবেন না (Do NOT Do)</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5C2323] leading-relaxed">
                      {emergencyResult.doNot.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Red Flag Hospital Signs */}
                <div className="p-4 rounded-2xl bg-[#FFF3CD]/60 border border-[#FBE09C] space-y-1.5">
                  <h4 className="text-xs font-bold text-[#8C5D07] flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-[#C68202]" />
                    <span>কখন তাৎক্ষণিক হাসপাতালে নিতে হবে (Hospital Red Flags)</span>
                  </h4>
                  <p className="text-xs text-[#6F4904] leading-relaxed">
                    {emergencyResult.warnings.join(" • ")}
                  </p>
                </div>

                {/* Direct 1-Tap Emergency Call Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F5E1DD]">
                  <div className="text-xs text-[#596D5C] text-center sm:text-left">
                    <p className="font-bold text-[#1B381E]">এখনও চিন্তিত? সরাসরি বিশেষজ্ঞের পরামর্শ নিন:</p>
                    <p className="text-[11px] text-[#7A8E7C]">২৪ ঘণ্টা ফ্রি ও সম্পূর্ণ গোপনীয় পেডিয়াট্রিক ট্রায়াজ লাইন</p>
                  </div>
                  <a
                    href={emergencyResult.hotline}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md shadow-red-700/25 transition-all hover:scale-105 shrink-0"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{emergencyResult.hotlineName}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3 Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-3xl border border-[#DFE8DA] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B381E]">
                Email Care Team
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                Direct parent assistance for questions, pre-orders, and ingredient transparency queries.
              </p>
            </div>
            <a
              href="mailto:care@piwva.com"
              className="text-sm font-bold text-[#4D6D2E] hover:underline"
            >
              care@piwva.com &rarr;
            </a>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-[#DFE8DA] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B381E]">
                VIP Launch Concierge
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                Inquire about early bottle reservations, nursery gift sets, or bulk order allocation.
              </p>
            </div>
            <a
              href="mailto:vip@piwva.com"
              className="text-sm font-bold text-[#4D6D2E] hover:underline"
            >
              vip@piwva.com &rarr;
            </a>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-[#DFE8DA] shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B381E]">
                Response Hours
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                Monday to Saturday, 8am &mdash; 7pm EST. Average response time is under 2 hours.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#667B69]">
              Always parent-first.
            </span>
          </div>
        </div>

        {/* Contact Form & Quick FAQ Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#DEE8D8] shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-4">
                  <h3 className="text-2xl font-bold text-[#1B381E]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-[#596D5C]">
                    We answer every single parent message with care and warmth.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="e.g. Sarah Mitchell"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-[#FAF7F2] border-[#D6E5CF] text-xs h-11"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-[#FAF7F2] border-[#D6E5CF] text-xs h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Baby&apos;s Stage
                    </label>
                    <select
                      value={formData.babyAge}
                      onChange={(e) =>
                        setFormData({ ...formData, babyAge: e.target.value })
                      }
                      className="w-full h-11 rounded-full border border-[#D6E5CF] bg-[#FAF7F2] px-4 text-xs text-[#1A3B22] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                    >
                      <option value="expecting">Expecting / Pregnant</option>
                      <option value="0-3m">0 &mdash; 3 Months (Newborn)</option>
                      <option value="3-6m">3 &mdash; 6 Months</option>
                      <option value="6-12m">6 &mdash; 12 Months</option>
                      <option value="toddler">1+ Years (Toddler)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full h-11 rounded-full border border-[#D6E5CF] bg-[#FAF7F2] px-4 text-xs text-[#1A3B22] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                    >
                      <option value="Upcoming Launch Inquiry">Upcoming Launch Inquiry</option>
                      <option value="Ingredient Transparency">Ingredient Transparency</option>
                      <option value="Skincare Guidance">Skincare Guidance</option>
                      <option value="Press & Partnerships">Press & Partnerships</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you and your baby today?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-2xl border border-[#D6E5CF] bg-[#FAF7F2] p-4 text-xs text-[#1A3B22] placeholder:text-[#889B8A] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full font-semibold flex items-center justify-center gap-2 text-sm shadow-md shadow-[#4D6D2E]/20"
                >
                  <Send className="w-4 h-4" />
                  Send to Parent Care Team
                </Button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EBF3E7] text-[#4D6D2E] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#4D6D2E]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B381E]">
                  Message Safely Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#596D5C] max-w-sm mx-auto">
                  Thank you for reaching out, {formData.name || "friend"}. Our team will review your note and respond to <strong>{formData.email}</strong> within 2 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-full border-[#4D6D2E] text-[#2F5323] hover:bg-[#EBF3E7] text-xs"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>

          {/* Quick FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-[#1B381E]">
                Common Support Questions
              </h3>
            </div>

            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {supportFaqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white">
                  <AccordionTrigger className="text-sm font-bold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-[#596D5C] leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

