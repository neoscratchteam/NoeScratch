'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Zap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 🔴 NAVIGATION WRAPPER */}
      <div className="relative">
        {/* 🚀 MODERN HERO SECTION */}
        <section className="min-h-[40vh] py-24 flex flex-col justify-center bg-[#1a73e8] relative overflow-hidden text-center">
          <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
              <span>Tech Leadership & Innovation</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in max-w-4xl mx-auto uppercase leading-tight">
              Ignite Your <br /> Tech <span className="opacity-70">Trajectory.</span>
            </h1>
            <p className="text-sm lg:text-[15px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up">
              Join our high-impact workshops, global summit appearances, and software release events. We are building the future of African engineering through knowledge exchange.
            </p>
          </div>
        </section>

        {/* 🏛️ ABOUT EVENTS SECTION (Replaces Past Impact) */}
        <section className="py-24 bg-[#f8fafc] border-y border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
               <h2 className="text-[12px] font-black tracking-[0.2em] text-[#1a73e8] uppercase mb-4">About Events</h2>
               <p className="text-2xl font-bold text-foreground">Legacy of Innovation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white border border-border/40 rounded-3xl hover:border-[#1a73e8]/30 transition-all group">
                   <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded-2xl overflow-hidden">
                      <img src={project.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                   <div className="flex flex-col justify-center">
                      <p className="text-[10px] font-bold text-[#1a73e8] mb-2">{project.year}</p>
                      <h3 className="text-[15px] font-bold text-foreground mb-2 group-hover:text-[#1a73e8] transition-colors">{project.title}</h3>
                      <p className="text-[12px] font-medium text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 🚀 FINAL CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-block p-1.5 rounded-full bg-[#1a73e8]/10 mb-8">
              <div className="bg-[#1a73e8] p-3 rounded-full">
                 <Users className="h-6 w-6 text-white" />
              </div>
           </div>
           <h2 className="text-3xl lg:text-5xl font-bold mb-8 tracking-tight text-foreground">
             Host a Special <br /> <span className="text-[#1a73e8]">Technical Event?</span>
           </h2>
           <p className="text-sm lg:text-base text-muted-foreground font-semibold mb-12 max-w-2xl mx-auto">
             Contact Theogene Iradukunda to organize specialized tech workshops, product launch events, or corporate training sessions in Rwanda or globally.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" className="rounded-full bg-[#1a73e8] text-white hover:bg-[#1a73e8]/90 px-12 h-16 font-bold shadow-2xl shadow-blue-500/20" asChild>
                <Link href="/contact">Collaborate on Event</Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-[#1a73e8] text-[#1a73e8] hover:bg-black hover:text-white hover:border-black px-12 h-16 font-bold transition-colors" asChild>
                <a href="tel:+250792734752">Call Directly</a>
              </Button>
           </div>
        </div>
      </section>

    </div>
  );
}
