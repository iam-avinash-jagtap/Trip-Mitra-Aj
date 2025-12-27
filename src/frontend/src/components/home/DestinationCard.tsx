"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DestinationCardProps {
    title: string;
    location: string;
    image: string;
    price: string;
    rating: number;
    duration: string;
    category?: string;
    href: string;
    className?: string;
}

export function DestinationCard({
    title,
    location,
    image,
    price,
    rating,
    duration,
    category,
    href,
    className
}: DestinationCardProps) {
    return (
        <motion.div
            whileHover={{ y: -16 }}
            className={cn(
                "group relative bg-white dark:bg-primary rounded-[2.5rem] overflow-hidden border border-black/[0.03] dark:border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] transition-all duration-700",
                className
            )}
        >
            <Link href={href}>
                {/* Image Section - Portrait 4:5 */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                    />

                    {/* Minimal Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Top Badges - Refined */}
                    <div className="absolute top-6 left-6 flex gap-2">
                        {category && (
                            <span className="bg-white/10 backdrop-blur-xl text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-white/20">
                                {category}
                            </span>
                        )}
                    </div>

                    <div className="absolute top-6 right-6">
                        <span className="bg-teal-600 text-white text-[9px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xl">
                            <Star className="w-3 h-3 fill-current" />
                            {rating}
                        </span>
                    </div>

                    {/* Location Badge - Integrated into image */}
                    <div className="absolute bottom-10 left-10">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-3 h-3 text-teal-400" />
                            <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">{location}</span>
                        </div>
                        <h3 className="text-3xl font-black font-display text-white leading-[1.1] group-hover:text-teal-400 transition-colors duration-500">
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Content Section - Ultra Minimal */}
                <div className="p-10 border-t border-black/[0.03] dark:border-white/[0.05]">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-secondary/40 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                <Clock className="w-3 h-3" /> {duration}
                            </span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-black text-primary dark:text-white">{price}</span>
                                <span className="text-[9px] text-secondary/40 font-black uppercase">/ per seeker</span>
                            </div>
                        </div>

                        <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary dark:text-white transition-all duration-500 group-hover:bg-teal-600 group-hover:text-white group-hover:-translate-y-1">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
