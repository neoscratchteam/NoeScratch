'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Construction } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="h-20 w-20 rounded-3xl bg-[#1a73e8]/10 flex items-center justify-center text-[#1a73e8] mx-auto mb-8 animate-bounce">
           <Construction className="h-10 w-10" />
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-6 tracking-tighter">404</h1>
        <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-widest">Protocol Terminated.</h2>
        <p className="text-sm font-semibold text-muted-foreground mb-12 leading-relaxed">
          The requested engineering resource is not available or has been migrated. Return to the global dashboard to continue.
        </p>
        <Button size="xl" className="rounded-2xl bg-[#1a73e8] text-white hover:bg-[#1a73e8]/90 px-12 h-16 font-bold shadow-2xl shadow-blue-500/20" asChild>
          <Link href="/">
            <ArrowLeft className="mr-3 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
