"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CareGuidePage } from "@/components/pages";
import { StayUpdatedModal } from "@/components/stay-updated-modal";
import { SearchDialog } from "@/components/search-dialog";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductDetailModal } from "@/components/product-detail-modal";

export default function CareGuideRoute() {
  const [stayUpdatedOpen, setStayUpdatedOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1A3B22]">
      <Navbar
        onOpenStayUpdated={() => setStayUpdatedOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartCount}
      />
      <CareGuidePage />
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
