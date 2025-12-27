"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { DestinationCard } from "@/components/home/DestinationCard";
import { FloatingOffer } from "@/components/home/FloatingOffer";
import { TravelCategories } from "@/components/home/TravelCategories";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { trendingDestinations } from "@/data/destinations";
import { TrustSection } from "@/components/home/TrustSection";
import { InspirationSection } from "@/components/home/InspirationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand">
      <Navbar />
      <Hero />
      <FloatingOffer />

      {/* Inspiration Hub - The Storyteller */}
      <InspirationSection />

      {/* Trending Destinations - The Proof */}
      <section className="py-32 bg-white/40 dark:bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12">

          {/* Section Header - Refined */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-teal-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Seasonal Picks</span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black font-display text-primary dark:text-white leading-[0.85]"
                style={{ letterSpacing: '0.02em' }}
              >
                Trending <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-orange-500" style={{ letterSpacing: '0.02em' }}>
                  Destinations.
                </span>
              </motion.h2>
            </div>

            <Link href="/destinations" className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary hover:text-teal-600 transition-colors">
              Explore All Journeys
              <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Modern 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {trendingDestinations.slice(0, 4).map((dest) => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden mt-16 text-center">
            <Link href="/destinations" className="inline-flex items-center px-10 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-[10px] shadow-2xl">
              View All <ArrowRight className="w-4 h-4 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories - The Selection */}
      <TravelCategories />

      {/* Trust Section - The Confirmation */}
      <TrustSection />

      {/* Final Premium CTA - The Invitation */}
      <section className="py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
            alt="Adventure"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-400 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Your Story Awaits</span>
            <h2 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter mb-16 font-display">
              Escape <br /> the Ordinary.
            </h2>
            <Link href="/book" className="inline-flex items-center px-16 py-8 bg-teal-600 text-white rounded-[2rem] font-black text-[12px] uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(13,148,136,0.4)] hover:bg-white hover:text-primary transition-all active:scale-95">
              Start Your Path
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
