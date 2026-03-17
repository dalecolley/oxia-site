"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-rose-50/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border overflow-hidden shadow-sm">
            <img 
              src="/PINK1.webp" 
              alt="OXIA" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">OXIA Wash</div>
            <div className="text-xs text-muted-foreground">
              Sensitive skin detergent
            </div>
          </div>
        </Link>

        {/* Middle: nav */}
        <nav className="hidden items-center gap-8 text-base font-medium md:flex">
          <Link className="text-foreground hover:text-rose-600 transition" href="/">Home</Link>
          <Link className="text-foreground hover:text-rose-600 transition" href="/sensitive-skin">Sensitive skin</Link>
       {/*  <Link className="text-foreground hover:text-rose-600 transition" href="/odour">Odour</Link>*/}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-2">
          <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/70">
            <Link href="/#pricing">Shop now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
