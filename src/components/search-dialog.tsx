"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Search,
  TrendingUp,
  ArrowRight,
  BookOpen,
  ShoppingBag,
  Clock,
  Sparkles,
  X,
} from "lucide-react";
import {
  HUB_INFO_ITEMS,
  HUB_PRODUCT_ITEMS,
} from "@/data/hub-data";

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
  const [activeTab, setActiveTab] = useState<"all" | "info" | "product">("all");

  const popularSearches = [
    "Baby Moisture Lotion",
    "Fever Triage",
    "Dry Skin & Eczema",
    "Vernix Day 1",
    "Cradle Cap",
    "Gentle Wash",
    "Umbilical Cord",
  ];

  // Matching Information
  const matchedInfo = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return HUB_INFO_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.keyTakeaway.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 4);
  }, [query]);

  // Matching Products
  const matchedProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return HUB_PRODUCT_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 4);
  }, [query]);

  const totalResults = matchedInfo.length + matchedProducts.length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[620px] bg-[#FAF7F2] border-[#D6E5CF] text-[#1A3B22] p-6 max-h-[88vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-[#1B381E]">
            <Search className="w-5 h-5 text-[#4D6D2E]" />
            Search Piwva: Information & Products
          </DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="relative mt-2">
          <Input
            autoFocus
            type="text"
            placeholder="Search symptoms, care guides, or baby products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 pl-11 pr-10 bg-white border-[#D6E5CF] text-base text-[#1A3B22] rounded-full focus-visible:ring-2 focus-visible:ring-[#4D6D2E]"
          />
          <Search className="w-5 h-5 text-[#889B8B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Section Filter Pills */}
        {query && (
          <div className="flex gap-2 pt-1 border-b border-[#E3EDDD] pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#4D6D2E] text-white"
                  : "bg-white text-[#4A5D4D] border border-[#DEE8D8]"
              }`}
            >
              All Matches ({totalResults})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("info")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeTab === "info"
                  ? "bg-[#4D6D2E] text-white"
                  : "bg-white text-[#4A5D4D] border border-[#DEE8D8]"
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>1. Information ({matchedInfo.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("product")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeTab === "product"
                  ? "bg-[#4D6D2E] text-white"
                  : "bg-white text-[#4A5D4D] border border-[#DEE8D8]"
              }`}
            >
              <ShoppingBag className="w-3 h-3" />
              <span>2. Products ({matchedProducts.length})</span>
            </button>
          </div>
        )}

        {/* Popular Searches when no query is typed */}
        {!query && (
          <div className="mt-4">
            <p className="text-xs font-semibold text-[#596D5C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#4D6D2E]" />
              Popular Searches (Information & Products)
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setQuery(item)}
                  className="text-xs bg-white hover:bg-[#EBF3E7] hover:text-[#2C4F22] border border-[#D8E6D2] text-[#425545] px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {item}
                  <ArrowRight className="w-3 h-3 text-[#4D6D2E] opacity-60" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Display */}
        {query && (
          <div className="space-y-4 pt-2">
            {totalResults === 0 && (
              <p className="text-xs text-[#596D5C] py-4 text-center">
                No matching guides or products found for &ldquo;{query}&rdquo;.
              </p>
            )}

            {/* Matching Section 1: Information Guides */}
            {(activeTab === "all" || activeTab === "info") && matchedInfo.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4D6D2E] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Information Section Results</span>
                </span>
                <div className="space-y-2">
                  {matchedInfo.map((info) => (
                    <Link
                      key={info.id}
                      href={info.link}
                      onClick={() => onOpenChange(false)}
                      className="p-3 bg-white rounded-2xl border border-[#DCE8D6] flex items-center justify-between hover:border-[#4D6D2E] hover:shadow-xs transition-all cursor-pointer group"
                    >
                      <div className="space-y-0.5 max-w-[85%]">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold uppercase bg-[#EBF3E7] text-[#2F5323] px-2 py-0.2 rounded-full">
                            {info.categoryLabel}
                          </span>
                          <span className="text-[10px] text-[#768C79] flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" />
                            <span>{info.readTime}</span>
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1B381E] group-hover:text-[#4D6D2E] transition-colors leading-snug">
                          {info.title}
                        </h4>
                        <p className="text-[11px] text-[#596D5C] line-clamp-1">
                          {info.keyTakeaway}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#4D6D2E] group-hover:translate-x-1 transition-transform shrink-0">
                        Read &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Section 2: Products */}
            {(activeTab === "all" || activeTab === "product") && matchedProducts.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4D6D2E] flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Product Section Results</span>
                </span>
                <div className="space-y-2">
                  {matchedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onOpenChange(false);
                        if (onSelectProduct) onSelectProduct();
                      }}
                      className="p-3 bg-white rounded-2xl border border-[#DCE8D6] flex items-center justify-between hover:border-[#4D6D2E] hover:shadow-xs transition-all cursor-pointer group"
                    >
                      <div className="space-y-0.5 max-w-[85%]">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold uppercase bg-[#FAF4EB] text-[#7A6038] px-2 py-0.2 rounded-full">
                            {prod.badge}
                          </span>
                          <span className="text-[10px] font-bold text-[#1B381E]">
                            {prod.price}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1B381E] group-hover:text-[#4D6D2E] transition-colors leading-snug">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] text-[#596D5C] line-clamp-1">
                          {prod.volume} &bull; {prod.keyIngredients.join(" • ")}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#4D6D2E] group-hover:translate-x-1 transition-transform shrink-0">
                        View &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
