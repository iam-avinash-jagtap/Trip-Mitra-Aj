"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Heart, Mountain, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const moods = [
    {
        id: "weekend",
        title: "Weekend Getaways",
        copy: "Because 48 hours is all it takes to reset.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        cta: "Explore the Vibe",
        color: "bg-teal-500"
    },
    {
        id: "couples",
        title: "Best for Couples",
        copy: "Private corners in a busy world.",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        cta: "Peek Inside",
        color: "bg-coral"
    },
    {
        id: "adventure",
        title: "Adventure Escapes",
        copy: "Trading screen time for mountain air.",
        image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
        cta: "Chase the Silence",
        color: "bg-primary"
    },
    {
        id: "peaceful",
        title: "Peaceful Retreats",
        copy: "The luxury of absolute silence.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        cta: "Find Your Zen",
        color: "bg-teal-700"
    }
];

export function InspirationSection() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-teal-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block"
                        >
                            The Journey Starts Here
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-primary font-display leading-[0.9] tracking-tighter"
                        >
                            Find your <br />
                            <span className="font-serif italic text-teal-600 font-medium">next mood.</span>
                        </motion.h2>
                    </div>
                    <p className="text-secondary text-lg max-w-sm font-medium italic">
                        Not sure where to head? Let your current vibe lead the way through our curated collections.
                    </p>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                    {moods.map((mood, idx) => (
                        <motion.div
                            key={mood.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative min-w-[280px] md:min-w-[320px] aspect-[3/4] rounded-[2rem] overflow-hidden group snap-center shadow-xl"
                        >
                            <Image
                                src={mood.image}
                                alt={mood.title}
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="text-[9px] font-black text-teal-400 uppercase tracking-[0.3em] mb-3">
                                    {mood.title}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight font-display">
                                    {mood.copy}
                                </h3>
                                <Link
                                    href={`/destinations?mood=${mood.id}`}
                                    className="inline-flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-[0.2em] group/btn"
                                >
                                    {mood.cta}
                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover/btn:bg-teal-600 group-hover/btn:border-teal-600 transition-all">
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
