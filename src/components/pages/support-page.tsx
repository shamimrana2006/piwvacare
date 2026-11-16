"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
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
      q: "How can I collaborate or become a brand ambassador?",
      a: "We love partnering with thoughtful pediatric nurses, midwives, doulas, and parenting creators! Send a note to partners@piwva.com with your social links or nursery story.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="soft"
              className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-[#4D6D2E] fill-[#4D6D2E]/20" />
              Parent Care Concierge
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
            We&apos;re Here for You & Your Little One
          </h1>

          <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our upcoming product launch, ingredient sourcing, or need gentle newborn skincare guidance &mdash; our team of parents and pediatric nurses is here.
          </p>
        </div>

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
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
                Instant Answers
              </span>
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

