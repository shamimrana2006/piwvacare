"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface StayUpdatedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StayUpdatedModal({ open, onOpenChange }: StayUpdatedModalProps) {
  const [email, setEmail] = useState("");
  const [babyStage, setBabyStage] = useState("0-6m");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4D6D2E", "#8EAF74", "#D5E6CD", "#E67E22"],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[460px] bg-[#FAF7F2] border-[#D6E5CF] text-[#1A3B22]">
        {!submitted ? (
          <>
            <DialogHeader className="text-center sm:text-center pt-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center mb-3">
                <Bell className="w-6 h-6 animate-pulse-subtle" />
              </div>
              <DialogTitle className="text-2xl font-bold text-[#1A3B22]">
                Join the Piwva Family
              </DialogTitle>
              <DialogDescription className="text-sm text-[#596D5C] mt-2">
                Be the first to hear about new launches, gentle baby skincare guides,
                and exclusive parent-first early access offers.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="text-xs font-semibold text-[#1A3B22] uppercase tracking-wider block mb-1.5">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-[#D6E5CF] h-12 text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1A3B22] uppercase tracking-wider block mb-1.5">
                  Your Baby&apos;s Stage
                </label>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {[
                    { id: "expecting", label: "Expecting" },
                    { id: "0-6m", label: "0-6 Months" },
                    { id: "6-12m", label: "6-12 Months" },
                    { id: "toddler", label: "1+ Years" },
                  ].map((stage) => (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setBabyStage(stage.id)}
                      className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                        babyStage === stage.id
                          ? "bg-[#4D6D2E] text-white border-[#4D6D2E] font-medium shadow-xs"
                          : "bg-white text-[#596D5C] border-[#D6E5CF] hover:border-[#4D6D2E]"
                      }`}
                    >
                      {stage.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-12 bg-[#4D6D2E] hover:bg-[#3D5624] text-white font-semibold rounded-full flex items-center justify-center gap-2 text-base shadow-md shadow-[#4D6D2E]/20"
                >
                  <Sparkles className="w-4 h-4" />
                  Keep Me Updated
                </Button>
              </div>

              <p className="text-[11px] text-center text-[#758878]">
                We respect your family privacy. Zero spam, unsubscribe anytime with one click.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6 px-2 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF3E7] text-[#4D6D2E] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#4D6D2E]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A3B22]">Welcome to Piwva!</h3>
            <p className="text-sm text-[#596D5C] max-w-xs mx-auto">
              We&apos;re thrilled to have you with us. Check your inbox ({email}) for a welcoming gentle care gift guide!
            </p>
            <Button
              onClick={handleReset}
              className="bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full px-8 mt-2"
            >
              Back to Experience
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

