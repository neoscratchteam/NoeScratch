import React, { useState } from 'react';
import { Send, Check, MessageCircle, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const projectTypes = [
  'Business Website',
  'E-commerce Store',
  'Portfolio Website',
  'Blog/News Site',
  'Mobile App',
  'Web Application',
  'Landing Page',
  'Other',
];

const budgetRanges = [
  'Under 100,000 RWF',
  '100,000 - 250,000 RWF',
  '250,000 - 500,000 RWF',
  '500,000 - 1,000,000 RWF',
  'Over 1,000,000 RWF',
];

export default function RequestWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
    features: '',
    inspiration: '',
  });
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType || !formData.budget || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all core fields so we can architecturalize your solution.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const whatsappMessage = `
*NEW PROJECT INQUIRY | NEOSCRATCH*
-------------------------
*Client:* ${formData.name}
*Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp || 'N/A'}
*Company:* ${formData.company || 'N/A'}

*PROJECT DETAILS*
*Type:* ${formData.projectType}
*Budget:* ${formData.budget}
*Deadline:* ${formData.deadline || 'Flexible'}

*DESCRIPTION*
${formData.description}

*REQUIRED FEATURES*
${formData.features || 'Standard Features'}

*INSPIRATION*
${formData.inspiration || 'None provided'}
-------------------------
_Request sent from neoscratch.rw inquiry portal_
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '250792734752'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      toast({
        title: "Redirecting to WhatsApp",
        description: "Your architecture brief is ready. Please hit 'Send' in WhatsApp.",
      });
      setSubmitting(false);
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 🚀 MODERN HERO SECTION */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#1a73e8] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6 animate-slide-up">
            <span>Engineering Excellence</span>
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in max-w-4xl mx-auto uppercase">
            Architect Your <br /> Digital <span className="opacity-70">Presence.</span>
          </h1>
          <p className="text-sm lg:text-[15px] text-white/80 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up">
            Tell us about your global vision. We combine Rwandan creativity with international engineering standards to build platforms that scale.
          </p>
        </div>
      </section>

      {/* 📝 COMPLEX INQUIRY FORM */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border/40 rounded-[2.5rem] p-8 lg:p-16 shadow-2xl shadow-blue-500/5">
            <div className="mb-12">
               <h2 className="text-[12px] font-black tracking-[0.2em] text-[#1a73e8] uppercase mb-4 text-center">Project Architecture</h2>
               <p className="text-3xl font-bold text-center text-foreground">Tell us about your project</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Section */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Full Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border rounded-2xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-sm font-semibold"
                      placeholder="e.g. Theogene Iradukunda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Professional Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border rounded-2xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-sm font-semibold"
                      placeholder="contact@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">WhatsApp Connection</label>
                    <input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border rounded-2xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-sm font-semibold"
                      placeholder="+250 792 734 752"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Company / Brand</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border border-border rounded-2xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-sm font-semibold"
                      placeholder="NeoScratch Global"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Project Taxonomy *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-border rounded-2xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-sm font-bold appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Architecture</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Budget Allocation *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-border rounded-2xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-sm font-bold appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Range</option>
                    {budgetRanges.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              {/* Description Section */}
              <div>
                <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Project Brief *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-5 py-4 border border-border rounded-2xl bg-white focus:border-[#1a73e8] focus:ring-0 transition-all text-sm font-semibold resize-none"
                  placeholder="Tell us about your technical goals and vision..."
                  required
                />
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="xl"
                  className="w-full rounded-2xl bg-[#1a73e8] text-white hover:bg-black hover:scale-[1.02] transition-all duration-300 h-16 text-xs font-black uppercase tracking-widest shadow-2xl shadow-blue-500/20"
                  disabled={submitting}
                >
                  {submitting ? (
                    <Zap className="h-5 w-5 mr-3 animate-spin" />
                  ) : (
                    <MessageCircle className="h-5 w-5 mr-3" />
                  )}
                  {submitting ? 'Architecting Brief...' : 'Inquire via WhatsApp'}
                </Button>
                <div className="mt-6 flex items-center justify-center gap-6 text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">
                   <div className="flex items-center"><Shield className="h-3 w-3 mr-2" /> Secure Inquiry</div>
                   <div className="flex items-center"><Globe className="h-3 w-3 mr-2" /> Global Response</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 🏗️ ARCHITECTURE STEPS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
             {[
               { id: '01', title: 'TECHNICAL BRIEF', desc: 'Securely submit your project parameters through our portal.' },
               { id: '02', title: 'EXECUTIVE REVIEW', desc: 'Our lead engineers analyze your requirements for scalability.' },
               { id: '03', title: 'PROPOSAL PHASE', desc: 'Receive a full architecture map, timeline, and optimized quote.' },
               { id: '04', title: 'ENGINEERING', desc: 'We build your vision using industry-leading technical standards.' }
             ].map(step => (
               <div key={step.id} className="relative group">
                  <span className="text-4xl font-black text-[#1a73e8]/10 group-hover:text-[#1a73e8]/20 transition-colors mb-4 block">{step.id}</span>
                  <h3 className="text-[11px] font-black tracking-widest text-foreground mb-3">{step.title}</h3>
                  <p className="text-[13px] font-semibold text-muted-foreground leading-relaxed">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}