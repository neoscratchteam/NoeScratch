import React from 'react';
import { Target, Eye, Heart, Users, Award, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We create cutting-edge software and design solutions to address real-world challenges in Rwanda and beyond.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Fostering collaboration and empowering Rwanda’s tech ecosystem through education and partnerships.',
  },
  {
    icon: Sparkles,
    title: 'Impact',
    description: 'Our work drives positive change by delivering accessible and impactful tech solutions.',
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We deliver high-quality software, designs, and networking services with precision and care.',
  },
];

const aboutData = {
  story: [
    "NeoScratch is a Rwanda-based software development and open-source technology company focused on building modern, scalable, and high-performance digital solutions for businesses, startups, and institutions across Rwanda and Africa.",
    "We design and develop a wide range of custom web and mobile applications, advanced business automation tools, business analytics platforms, and open-source systems that help organizations innovate, scale efficiently, and gain real-time insights.",
    "NeoScratch combines modern technologies with a deep passion for digital transformation, delivering state-of-the-art systems that solve modern challenges in the digital era."
  ],
  mission: "To empower businesses and individuals in Rwanda and across Africa with reliable, intelligent, and world-class software solutions that drive productivity and digital growth in the modern economy.",
  vision: "To become a leading global African software house, building world-class technology products from Rwanda that set new standards for innovation."
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="secondary" className="bg-primary/5 text-primary border-none mb-4 px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
            ESTABLISHED 2024
          </Badge>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6 leading-tight max-w-2xl">
            Engineering the future of <span className="text-primary italic">digital Rwanda.</span>
          </h1>
          <p className="text-muted-foreground text-[13px] md:text-sm max-w-xl leading-relaxed font-medium">
            We are a team of passionate creators, engineers, and strategists dedicated to transforming businesses through high-end digital solutions and technical excellence.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3 block">OUR NARRATIVE</span>
              <h2 className="text-2xl font-bold mb-6 text-foreground leading-snug">Built on the philosophy of open innovation.</h2>
              <div className="space-y-5">
                {aboutData.story.map((para, i) => (
                  <p key={i} className="text-muted-foreground text-[13px] leading-relaxed font-medium">
                    {para}
                  </p>
                ))}
              </div>
              <div className="pt-8">
                <Button size="sm" className="rounded-full px-6 h-10 font-bold shadow-lg shadow-primary/10 text-xs" asChild>
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border aspect-[5/4]">
                <img 
                  src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=2000&auto=format&fit=crop" 
                  alt="Our workspace" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                   <p className="text-foreground text-[11px] font-bold leading-relaxed italic border-l border-primary/40 pl-4 py-0.5">
                     "We believe that the best software is built through collaboration and a deep understanding of local needs."
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 bg-secondary/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-8 rounded-2xl group hover:border-primary/20 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed font-medium">
                {aboutData.mission}
              </p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl group hover:border-primary/20 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed font-medium">
                {aboutData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-64 flex-shrink-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-lg">
                 <img 
                    src="/theodev.png" 
                    alt="Théogène Iradukunda" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white font-bold text-sm mb-0.5">Théogène Iradukunda</p>
                    <p className="text-primary text-[8px] uppercase font-bold tracking-widest leading-none">Founder & CEO</p>
                 </div>
              </div>
            </div>
            
            <div className="flex-1">
              <span className="text-[9px] font-extrabold text-primary uppercase tracking-[0.2em] mb-3 block">LEADERSHIP</span>
              <h2 className="text-xl font-bold mb-6 text-foreground leading-snug">Driven by a passion for technical excellence.</h2>
              <div className="space-y-4 text-[13px] text-muted-foreground font-medium leading-relaxed">
                <p>
                   Théogène Iradukunda is a software engineer and technology entrepreneur passionate about open-source innovation and digital transformation in Africa.
                </p>
                <p>
                   Under his leadership, NeoScratch has helped multiple businesses improve stock control, operational efficiency, and financial visibility through smart software solutions. He leads NeoScratch’s vision, product development, and technical strategy.
                </p>
                <div className="pt-4 flex gap-3">
                  <span className="text-[10px] font-bold text-foreground cursor-pointer hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20">LINKEDIN</span>
                  <span className="text-[10px] font-bold text-foreground cursor-pointer hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20">TWITTER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="text-[9px] font-extrabold text-primary uppercase tracking-[0.2em] mb-2 block">OUR VALUES</span>
          <h2 className="text-xl font-bold">What defines us.</h2>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center group">
                <div className="h-10 w-10 rounded-full bg-primary/5 mx-auto flex items-center justify-center text-primary mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">{v.title}</h4>
                <p className="text-muted-foreground text-[12px] leading-relaxed font-medium px-4">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer with Grid Background */}
      <section className="py-20 bg-primary relative overflow-hidden mt-12">
        <div className="absolute inset-0 z-0 bg-grid opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Ready to bring your <br className="hidden md:block" /> technical vision to life?
          </h2>
          <p className="text-white/70 text-[13px] md:text-sm mb-10 max-w-xl mx-auto font-medium">
            Join the forward-thinking businesses across Rwanda that trust NeoScratch for their digital transformation and software engineering needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-sm font-bold shadow-xl" asChild>
              <Link to="/request-website">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 h-14 text-sm font-bold backdrop-blur-sm" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}