'use client';

import React from 'react';
import { Handshake, Star, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const partners = [
  { name: 'kLab Rwanda', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop', type: 'Innovation Hub' },
  { name: 'University of Rwanda', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop', type: 'Education Partner' },
  { name: 'Rwanda ICT Chamber', logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop', type: 'Industry Partner' },
  { name: 'African Leadership University', logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=100&fit=crop', type: 'Academic Partner' },
];

export default function Partnerships() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-x-0 bottom-0 top-0 h-full w-full bg-grid opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 animate-fade-in">Partnerships</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Building stronger communities through strategic partnerships and collaborations.
          </p>
        </div>
      </section>
      
      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={partner.name} 
                className="bg-secondary/10 p-6 rounded-xl border border-border/40 hover:border-primary/20 transition-all duration-300 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={partner.logo} alt={partner.name} className="w-full h-16 object-contain mb-4" />
                <h3 className="font-semibold">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6">Become a Partner</h2>
          <p className="text-xl text-muted-foreground mb-8">Join us in empowering the next generation of African tech leaders.</p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors h-12 px-8 font-bold" asChild>
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
