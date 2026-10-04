"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Star, 
  Send, 
  Plus, 
  X, 
  ChevronLeft, 
  ChevronRight,
  MessageSquareQuote,
  Terminal
} from "lucide-react";
import { ServiceNavbar } from "@/components/layout/ServiceNavbar";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { Contact } from "@/components/sections/Contact/Contact";
import { supabase } from "@/lib/supabase";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  created_at?: string;
}

export default function ServicesPage() {
  const [feedbacks, setFeedbacks] = useState<TestimonialItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Form State
  const [formData, setFormData] = useState({ name: "", role: "", comment: "", rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Fetch Realtime Feedback from Supabase Database
  const fetchFeedbacks = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching testimonials:", error.message);
      } else if (data) {
        setFeedbacks(data as TestimonialItem[]);
      }
    } catch (err) {
      console.error("Supabase fetch failed:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  // 2. Auto-rotate Carousel with Safe Bounds
  useEffect(() => {
    if (feedbacks.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const handleNext = () => {
    if (feedbacks.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    if (feedbacks.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  // 3. Submit Feedback directly to Database
  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      role: formData.role.trim() || "Peer / Visitor",
      comment: formData.comment.trim(),
      rating: formData.rating,
    };

    const { error } = await supabase.from("testimonials").insert([payload]);

    if (error) {
      console.error("Error inserting testimonial:", error.message);
    } else {
      setFormData({ name: "", role: "", comment: "", rating: 5 });
      setIsFormOpen(false);
      await fetchFeedbacks(); // Refresh stream
      setCurrentIndex(0); // Reset carousel to newly posted feedback
    }

    setIsSubmitting(false);
  };

  // Ensure current feedback is safe from out-of-bounds errors
  const currentFeedback = feedbacks[currentIndex] || feedbacks[0];

  return (
    <>
      <ServiceNavbar />
      <main className="min-h-screen pb-24 pt-32 md:pt-36 bg-bg">
        <Container className="max-w-7xl px-4 sm:px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 border-l-2 border-lamp/60 pl-4 sm:pl-6"
          >
            <p className="font-mono text-[11px] font-bold tracking-[0.25em] text-lamp uppercase">
              WHAT I DO
            </p>
            <h1 className="mt-1 font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Services & Capabilities
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted/80 max-w-2xl leading-relaxed font-sans">
              Specialized engineering solutions across cloud infrastructure automation, modern full-stack web applications, and desktop software architecture.
            </p>
          </motion.div>

          {/* Minimal Services List Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#0e0e11] p-6 sm:p-7 shadow-[-4px_-4px_12px_rgba(255,255,255,0.015),5px_5px_12px_rgba(0,0,0,0.6)] hover:bg-[#121216] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-lamp uppercase bg-[#0A0A0C] border border-lamp/20 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                    <span className="font-mono text-xs text-muted/40 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-white transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-muted/90 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {service.deliverables && service.deliverables.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-white/[0.04] pt-3.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-mono text-xs text-muted/80">
                          <CheckCircle2 size={13} className="text-lamp flex-shrink-0 mt-0.5" />
                          <span className="leading-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {service.skills && service.skills.length > 0 && (
                  <div className="mt-6 border-t border-white/[0.04] pt-3 flex flex-wrap gap-1.5">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] text-zinc-300 bg-[#0A0A0C] border border-white/[0.05] px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Testimonials Showcase */}
          <div className="border-t border-white/[0.06] pt-16">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 border-l-2 border-lamp/60 pl-4 sm:pl-6">
              <div>
                <p className="font-mono text-[11px] font-bold tracking-[0.25em] text-lamp uppercase">
                  PEER ENDORSEMENTS
                </p>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                  Feedback & Testimonials
                </h2>
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-lamp bg-lamp/10 border border-lamp/20 px-4 py-2.5 rounded-xl hover:bg-lamp/20 transition-all duration-200"
              >
                <Plus size={14} />
                <span>GIVE FEEDBACK</span>
              </button>
            </div>

            {/* Rotating Testimonial Viewport */}
            {isLoading ? (
              <div className="rounded-2xl border border-white/[0.06] bg-[#0e0e11] p-8 text-center font-mono text-xs text-muted/60">
                LOADING_TESTIMONIALS...
              </div>
            ) : feedbacks.length > 0 && currentFeedback ? (
              <div className="relative rounded-2xl border border-white/[0.06] bg-[#0e0e11] p-6 sm:p-10 shadow-[-6px_-6px_16px_rgba(255,255,255,0.015),6px_6px_18px_rgba(0,0,0,0.7)] font-mono">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeedback.id || currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-white/[0.04] pb-4">
                        <div className="flex items-center gap-1.5 text-lamp">
                          {[...Array(currentFeedback.rating || 5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-lamp" />
                          ))}
                        </div>
                        <MessageSquareQuote size={20} className="text-white/10" />
                      </div>

                      <p className="mt-5 text-sm sm:text-base text-muted/95 font-sans leading-relaxed italic">
                        "{currentFeedback.comment}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h4 className="font-display text-sm sm:text-base font-bold text-ink">
                          {currentFeedback.name}
                        </h4>
                        <p className="text-xs text-lamp/80 mt-0.5">
                          {currentFeedback.role}
                        </p>
                      </div>

                      {/* Rotation Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {feedbacks.map((_, i) => (
                            <span
                              key={i}
                              onClick={() => setCurrentIndex(i)}
                              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                                i === currentIndex ? "w-5 bg-lamp" : "w-1.5 bg-white/20"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-1 ml-2">
                          <button
                            onClick={handlePrev}
                            className="p-1.5 rounded-lg bg-[#0A0A0C] border border-white/[0.06] text-muted hover:text-white transition-colors"
                          >
                            <ChevronLeft size={14} />
                          </button>
                          <button
                            onClick={handleNext}
                            className="p-1.5 rounded-lg bg-[#0A0A0C] border border-white/[0.06] text-muted hover:text-white transition-colors"
                          >
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.06] bg-[#0e0e11] p-8 text-center font-mono text-xs text-muted/60">
                No feedback recorded yet. Be the first to share your thoughts!
              </div>
            )}
          </div>

        </Container>
      </main>

      {/* Realtime Modal Form */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-6 shadow-2xl font-mono"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                <div className="flex items-center gap-2 text-lamp font-bold text-xs uppercase">
                  <Terminal size={14} />
                  <span>Submit Realtime Feedback</span>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-muted/60 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-muted/70 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg bg-[#060608] border border-white/[0.08] px-3.5 py-2 text-xs text-ink placeholder:text-muted/40 focus:border-lamp focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-muted/70 uppercase mb-1">
                    Role / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer / Student"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-lg bg-[#060608] border border-white/[0.08] px-3.5 py-2 text-xs text-ink placeholder:text-muted/40 focus:border-lamp focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-muted/70 uppercase mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-1 text-lamp">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          size={16}
                          className={star <= formData.rating ? "fill-lamp" : "text-white/20"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-muted/70 uppercase mb-1">
                    Feedback Comment *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share your thoughts or peer feedback..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full rounded-lg bg-[#060608] border border-white/[0.08] px-3.5 py-2 text-xs text-ink placeholder:text-muted/40 focus:border-lamp focus:outline-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-lamp/10 border border-lamp/30 px-4 py-2.5 text-xs font-bold text-lamp hover:bg-lamp/20 transition-all duration-200 mt-2"
                >
                  <Send size={12} />
                  <span>{isSubmitting ? "TRANSMITTING..." : "SUBMIT FEEDBACK"}</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Contact />
    </>
  );
}