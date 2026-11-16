"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Bell, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/decorations";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenStayUpdated: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export function Navbar({
  onOpenStayUpdated,
  onOpenSearch,
  onOpenCart,
  cartCount,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "product", label: "Product", href: "/product", badge: "Upcoming" },
    { id: "care-guide", label: "Care Guide", href: "/care-guide" },
    { id: "promise", label: "Our Promise", href: "/our-promise" },
    { id: "support", label: "Support", href: "/support" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#E8EFE3]"
          : "bg-[#FAF7F2]/60 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#1A3B22] font-semibold"
                      : "text-[#4A5D4D] hover:text-[#1A3B22]"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] bg-[#EBF3E7] text-[#365D29] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#4D6D2E] rounded-full animate-in fade-in zoom-in-75 duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Stay Updated Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Icon */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#2A4725] hover:bg-[#EBF3E7] hover:text-[#1A3B22] transition-colors cursor-pointer"
              title="Search"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Shopping Bag Icon with Upcoming/Waitlist indicator */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#2A4725] hover:bg-[#EBF3E7] hover:text-[#1A3B22] transition-colors cursor-pointer"
              title="Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#4D6D2E] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* VIP Early Access / Stay Updated pill button */}
            <Button
              onClick={onOpenStayUpdated}
              variant="default"
              className="hidden sm:inline-flex bg-[#4D6D2E] hover:bg-[#3D5724] text-white rounded-full px-5 py-2 text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md hover:shadow-[#4D6D2E]/20 gap-2 items-center"
            >
              Join VIP Waitlist
              <Bell className="w-4 h-4" />
            </Button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#1A3B22] hover:bg-[#EBF3E7]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E1ECE0] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-xl flex items-center justify-between ${
                    isActive
                      ? "bg-[#EBF3E7] text-[#1A3B22] font-semibold"
                      : "text-[#4A5D4D] hover:bg-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] bg-[#EBF3E7] text-[#365D29] font-bold px-2 py-0.5 rounded-full uppercase">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-2">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStayUpdated();
                }}
                className="w-full bg-[#4D6D2E] text-white rounded-full h-11 flex items-center justify-center gap-2"
              >
                Join VIP Waitlist
                <Bell className="w-4 h-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
