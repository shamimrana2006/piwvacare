"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, ArrowRight } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectProduct?: () => void;
}

export function SearchDialog({
  open,
  onOpenChange,
  onSelectProduct,
}: SearchDialogProps) {
  const [query, setQuery] = useState("");

  const popularSearches = [
    "Baby Moisture Lotion",
    "Hypoallergenic Wash",
    "Newborn Cradle Cap",
    "Organic Shea Butter",
    "Sensitive Skin Care Guide",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] bg-[#FAF7F2] border-[#D6E5CF] text-[#1A3B22] p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-[#1A3B22]">
            <Search className="w-5 h-5 text-[#4D6D2E]" />
            Search Piwva Care
          </DialogTitle>
        </DialogHeader>

        <div className="relative mt-2">
          <Input
            autoFocus
            type="text"
            placeholder="Search baby lotions, ingredients, care guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 pl-11 pr-4 bg-white border-[#D6E5CF] text-base"
          />
          <Search className="w-5 h-5 text-[#889B8B] absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold text-[#596D5C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#4D6D2E]" />
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setQuery(item);
                  if (item.includes("Lotion") && onSelectProduct) {
                    onOpenChange(false);
                    onSelectProduct();
                  }
                }}
                className="text-xs bg-white hover:bg-[#EBF3E7] hover:text-[#2C4F22] border border-[#D8E6D2] text-[#425545] px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
              >
                {item}
                <ArrowRight className="w-3 h-3 text-[#4D6D2E] opacity-60" />
              </button>
            ))}
          </div>
        </div>

        {query && (
          <div className="mt-4 pt-3 border-t border-[#E3EDDD]">
            <p className="text-xs text-[#596D5C] mb-2">Showing results for &ldquo;{query}&rdquo;</p>
            <div
              onClick={() => {
                onOpenChange(false);
                if (onSelectProduct) onSelectProduct();
              }}
              className="p-3 bg-white rounded-xl border border-[#DCE8D6] flex items-center justify-between hover:border-[#4D6D2E] transition-colors cursor-pointer group"
            >
              <div>
                <h4 className="text-sm font-semibold text-[#1A3B22] group-hover:text-[#4D6D2E]">
                  piwva Baby Moisture Lotion (New Launch)
                </h4>
                <p className="text-xs text-[#596D5C]">Deep hydration • Hypoallergenic • 250ml</p>
              </div>
              <span className="text-xs font-semibold text-[#4D6D2E] group-hover:translate-x-1 transition-transform">
                View &rarr;
              </span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

