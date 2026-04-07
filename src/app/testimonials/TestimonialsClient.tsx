'use client';

import React from 'react';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
       <div className="flex-1 flex flex-col justify-center">
          <TestimonialSlider />
       </div>
    </div>
  );
}
