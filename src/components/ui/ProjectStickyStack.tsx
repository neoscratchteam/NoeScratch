import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectStickyStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const activeProject = projects[activeIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      {/* Centered Header matches image */}
      <div className="text-center mb-16 lg:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Works</h2>
        <p className="text-gray-400 text-lg">Discover Our Most Recent Project Highlights</p>
      </div>

      {/* Main Perspective Container */}
      <div className="relative bg-[#212225] rounded-[40px] p-8 md:p-16 lg:p-20 shadow-2xl overflow-hidden border border-white/5 min-h-[700px] flex flex-col justify-between">
        
        {/* Abstract Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          {/* HORIZONTAL STACK CAROUSEL BODY */}
          <div className="relative w-full h-[320px] md:h-[450px] mb-12">
            <AnimatePresence mode='popLayout'>
              {projects.map((project, idx) => {
                let offset = idx - activeIndex;
                
                // Infinite wrap logic
                if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
                if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

                const isActive = offset === 0;
                const isVisible = offset >= 0 && offset <= 2;

                if (!isVisible && !isActive) return null;

                const xValue = offset * 120; // How much it shifts to the right
                const scaleValue = 1 - (offset * 0.1); // How much it shrinks
                const opacityValue = 1 - (offset * 0.4);
                const blurValue = offset * 4;

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ 
                      opacity: opacityValue, 
                      x: xValue, 
                      scale: scaleValue,
                      filter: `blur(${blurValue}px)`,
                      zIndex: 30 - offset,
                    }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    className="absolute inset-y-0 left-0 w-full max-w-[85%] md:max-w-[70%] lg:max-w-[65%] cursor-pointer"
                    onClick={() => { if (!isActive) setActiveIndex(idx); }}
                  >
                    <div className="w-full h-full rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 relative group">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      {!isActive && <div className="absolute inset-0 bg-black/40 transition-colors" />}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* BELOW CONTENT (Active Project Details) */}
          <div className="mt-8">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{activeProject.title}</h3>
              
              {/* Technology Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {activeProject.techStack.map(tag => (
                  <span key={tag} className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              {activeProject.liveDemo && activeProject.liveDemo !== '#' ? (
                <Button asChild size="xl" className="bg-[#fe4b33] hover:bg-[#e43f2a] text-white rounded-2xl px-12 py-7 h-auto border-none shadow-xl shadow-[#fe4b33]/20 text-lg font-bold group">
                  <a href={activeProject.liveDemo} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              ) : (
                 <Button disabled size="xl" className="bg-white/10 text-gray-500 rounded-2xl px-12 py-7 h-auto border-none cursor-not-allowed text-lg font-bold">
                    Development Phase
                 </Button>
              )}
            </motion.div>
          </div>
        </div>

        {/* NAVIGATION ARROWS (Bottom Right) */}
        <div className="flex justify-end gap-4 mt-8 md:mt-0 relative z-20">
          <button 
            onClick={prev}
            className="w-14 h-14 rounded-full bg-[#fe4b33]/15 hover:bg-[#fe4b33] text-[#fe4b33] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#fe4b33]/20 shadow-lg shadow-[#fe4b33]/10 active:scale-90"
            aria-label="Previous work"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button 
            onClick={next}
            className="w-14 h-14 rounded-full bg-[#fe4b33] text-white flex items-center justify-center transition-all duration-300 shadow-xl shadow-[#fe4b33]/30 hover:scale-105 active:scale-95"
            aria-label="Next work"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

      </div>
    </div>
  );
}
