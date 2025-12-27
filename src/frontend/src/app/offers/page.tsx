"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Heart, Plane, MapPin, Clock, Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Itinerary, ItineraryDay } from "@/components/packages/Itinerary";

const rishikeshItinerary: ItineraryDay[] = [
    {
        day: 1,
        title: "Pune -> Delhi -> Rishikesh | Arrival & Relaxation",
        location: "Rishikesh",
        description: "Morning flight from Pune to Delhi. Private AC cab transfer to Rishikesh (5-6 hrs). Check-in and welcome refreshment. Evening riverside walk and calm sunset views.",
        highlights: ["Pune-Delhi Flight", "Scenic Drive", "Riverside Walk"],
        stay: "Premium Riverside Resort",
        meals: ["Dinner"],
        activities: ["Travel", "Leisure"]
    },
    {
        day: 2,
        title: "Spiritual Rishikesh & Ganga Aarti",
        location: "Rishikesh",
        description: "Breakfast with river views. Sightseeing: Laxman Jhula, Ram Jhula, and local ashrams. VIP access to the mesmerizing Triveni Ghat Ganga Aarti in the evening.",
        highlights: ["Laxman Jhula", "Ram Jhula", "VIP Ganga Aarti"],
        stay: "Premium Riverside Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Culture", "Spirituality"]
    },
    {
        day: 3,
        title: "River Adventure & Wellness",
        location: "Shivpuri",
        description: "Morning River Rafting on a safe, guided stretch. Optional cliff jumping. Afternoon rest. Evening private yoga and meditation session with herbal tea.",
        highlights: ["River Rafting", "Cliff Jumping", "Private Yoga Session"],
        stay: "Premium Riverside Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Adventure", "Wellness"]
    },
    {
        day: 4,
        title: "Waterfall Visit & Leisure",
        location: "Neer Garh",
        description: "Visit Neer Garh Waterfall. Free afternoon for optional spa therapy, cafe hopping, or reading. Special evening dining experience by the river.",
        highlights: ["Neer Garh Waterfall", "Cafe Hopping", "Special Dinner"],
        stay: "Premium Riverside Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Nature", "Leisure"]
    },
    {
        day: 5,
        title: "Rishikesh -> Delhi -> Pune",
        location: "Return Journey",
        description: "Leisure breakfast. Checkout and private cab to Delhi. Evening flight from Delhi to Pune. Trip ends with peace and refreshed energy.",
        highlights: ["Leisure Breakfast", "Return Flight", "Refreshed Energy"],
        meals: ["Breakfast"],
        activities: ["Travel", "Departure"]
    }
];

export default function OffersPage() {
    return (
        <main className="min-h-screen bg-sand dark:bg-primary">
            <Navbar />

            {/* Hero Section - Refined for Ultra-Premium Minimalism */}
            <div className="relative h-screen min-h-[800px] w-full overflow-hidden">
                <Image
                    src="https://elements-resized.envatousercontent.com/elements-video-cover-images/e2765feb-159d-46c7-a8f3-435cee7c9b45/video_preview/video_preview_0000.jpg?cf_fit=cover&format=auto&q=85&s=84eb9377285eb2b52e247cd190d95262460823fcd75687923af442ccf424c394&w=500"
                    alt="Rishikesh Special Retreat"
                    fill
                    className="object-cover brightness-50"
                    priority
                />

                {/* Modern Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/95" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        {/* Elegant Minimal Badge */}
                        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 mb-10">
                            <Heart className="w-3.5 h-3.5 text-accent animate-pulse fill-accent" />
                            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.4em]">
                                The Private Collection: Couple's Retreat
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-[9rem] font-black text-white leading-[0.85] font-display tracking-tighter mb-8">
                            Rishikesh Special <br />
                            <span className="text-3xl md:text-5xl font-serif italic text-white/40 block mt-4">
                                Retreat Package 🌿
                            </span>
                        </h1>

                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium tracking-wide">
                            Designed for **working professionals & couples**. This retreat combines **spiritual experiences**, **gentle adventure**, and **comfortable riverside living** — perfect for travellers who want calm, clarity, and meaningful time away.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            {/* Price Card - Boutique Style */}
                            <div className="bg-white/5 backdrop-blur-2xl px-10 py-6 rounded-[2rem] border border-white/10 flex items-center gap-6">
                                <div className="text-left">
                                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">Entry Value</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black text-white">₹50,000</span>
                                        <span className="text-[10px] font-bold text-white/30 italic">/ couple</span>
                                    </div>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10" />
                                <div className="text-left">
                                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">Duration</p>
                                    <span className="text-lg font-bold text-white uppercase tracking-wider">5D / 4N</span>
                                </div>
                            </div>



                            <Link href="/book?package=rishikesh-premium" className="group px-14 py-8 bg-white text-primary rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] flex items-center gap-4 transition-all duration-500 hover:bg-teal-600 hover:text-white hover:shadow-[0_20px_50px_rgba(13,148,136,0.3)] active:scale-95">
                                Secure This Retreat
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Explore Itinerary</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
            </div>

            {/* Premium Floating DevOps Badge - Refined */}
            <motion.div
                className="fixed bottom-12 right-12 z-50 max-w-[320px] hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="bg-primary/95 backdrop-blur-3xl text-white p-8 rounded-[2.5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
                    <div className="flex items-start gap-5">
                        <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                            <Terminal className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-2">DevOps Exclusive</h3>
                            <p className="text-[12px] text-white/50 leading-relaxed font-medium">
                                Enrollment verified by professional proof. Restricted to dual-engineer couples.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                    <div className="lg:col-span-2 space-y-32">
                        {/* Intro */}
                        <section>
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Introduction</span>
                            <h2 className="text-5xl font-black text-primary dark:text-white mb-10 font-display">Peace · Spirituality <br /> Nature · Soft Adventure</h2>
                            <p className="text-xl text-secondary leading-relaxed mb-12 italic font-medium">
                                A **premium, experience-focused package** suitable for **devotional, wellness, and nature-loving travellers**.
                                Think of it as a stable production environment for your soul—calm mornings, structured adventure sprints, and zero-downtime romance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl">
                                    <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/91/5c/e4/caption.jpg?h=500&s=1&w=900" width={500} height={600} alt="Room" className="object-cover h-[400px] w-full transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                    <span className="absolute bottom-10 left-10 text-white font-black uppercase tracking-widest text-[10px]">Riverside Yoga</span>
                                </div>
                                <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl mt-12 md:mt-24">
                                    <Image src="https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Best_Time_to_Visit_Laxman_Jhula_fa2b5c527f.webp" width={500} height={600} alt="Laxman Jhula" className="object-cover h-[400px] w-full transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                    <span className="absolute bottom-10 left-10 text-white font-black uppercase tracking-widest text-[10px]">Laxman Jhula</span>
                                </div>
                            </div>
                        </section>

                        {/* Travel Overview */}
                        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-3xl rounded-[4rem] p-16 border border-white/20 shadow-2xl">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                                <div>
                                    <h3 className="text-2xl font-black text-primary dark:text-white uppercase tracking-widest text-sm mb-2">Travel Logistics</h3>
                                    <p className="text-secondary text-xs italic font-medium">Seamless movement across the Himalayas.</p>
                                </div>
                                <div className="flex items-center gap-4 bg-primary text-white px-6 py-3 rounded-2xl">
                                    <Plane className="w-5 h-5 text-accent" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Flights Included</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-10">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <MapPin className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Full Route</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Pune → Delhi → Rishikesh → Pune</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <Plane className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Transit Class</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Premium Economy Direct Flights</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-10">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <Heart className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Accommodation Style</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Premium Riverside Retreat</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <Clock className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Project Pace</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Relaxed with Scheduled High-Action Moments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* The Premium Itinerary */}
                        <section>
                            <div className="mb-20">
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Day-by-Day Deployment</span>
                                <h3 className="text-5xl font-black text-primary dark:text-white mb-4 font-display">The Experience Roadmap</h3>
                                <p className="text-secondary font-medium italic text-lg opacity-70">A five-day sprint through silence and thrill.</p>
                            </div>

                            <Itinerary days={rishikeshItinerary} />
                        </section>

                        {/* Stay Details Gallery */}
                        <section>
                            <div className="mb-16">
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Stay Experience</span>
                                <h3 className="text-5xl font-black text-primary dark:text-white mb-4 font-display">Premium Riverside <br /> Accommodation</h3>
                                <p className="text-secondary font-medium italic text-lg opacity-70">River-facing or balcony rooms in peaceful surroundings ideal for meditation & rest.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://images.trvl-media.com/lodging/3000000/2990000/2981300/2981278/ce7383e1.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Resort Room" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-[10px] uppercase tracking-wider">Luxury Rooms</span>
                                </div>
                                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://www.ragaontheganges.com/assets/img/yoga-meditation.jpg" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Yoga Session" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-[10px] uppercase tracking-wider">Yoga & Meditation</span>
                                </div>
                                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2c/f1/81/caption.jpg?h=400&s=1&w=500" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Riverside View" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-[10px] uppercase tracking-wider">River Views</span>
                                </div>
                                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://theneerajgangaheritagepalace.com/wp-content/themes/NeerajGangaHeritage/assets/img/gallery/cafe/sky-cafe2.jpg" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Cafe" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-[10px] uppercase tracking-wider">Sky Cafe</span>
                                </div>
                            </div>
                        </section>

                        {/* Activity Gallery */}
                        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-3xl rounded-[4rem] p-16 border border-white/20 shadow-2xl">
                            <div className="mb-16">
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Experiences</span>
                                <h3 className="text-5xl font-black text-primary dark:text-white mb-4 font-display">Adventure & <br /> Serenity Combined</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://img.avianexperiences.com/trek/2d3f1914-76ba-492d-a875-f90361caaaa7" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="River Rafting" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-sm uppercase tracking-wider">River Rafting</span>
                                </div>
                                <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://www.vinyasayogaashram.com/blog/wp-content/uploads/2025/11/Sunrise-Yoga-by-the-Ganges_-My-Most-Magical-Morning-in-Rishikesh.jpg" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Sunrise Yoga" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-sm uppercase tracking-wider">Sunrise Yoga</span>
                                </div>
                                <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://images.prismic.io/indiahike/651624c5-c6a1-43f7-af89-a5fb655976fb_Neergarh%2BWaterfalls_Indiahikes_PrajwalAgarwal%2B%284%29.jpg?auto=compress%2Cformat" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Waterfall" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-sm uppercase tracking-wider">Neergarh Falls</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://media.oars.com/wp-content/uploads/2024/02/20171441/G0302606_cropped-1680x900.jpg" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Adventure" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-sm uppercase tracking-wider">Group Adventures</span>
                                </div>
                                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <Image src="https://s7ap1.scene7.com/is/image/incredibleindia/laxman%20jhula-rishikesh-uttrakhand-hero?qlt=82&ts=1726646312953" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Laxman Jhula" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                                    <span className="absolute bottom-6 left-6 text-white font-black text-sm uppercase tracking-wider">Iconic Landmarks</span>
                                </div>
                            </div>
                        </section>

                        {/* Best Time to Visit */}
                        <section className="bg-gradient-to-br from-accent/10 to-transparent rounded-[4rem] p-16 border border-accent/20">
                            <div className="mb-12">
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Planning</span>
                                <h3 className="text-5xl font-black text-primary dark:text-white mb-4 font-display">Best Time to Visit</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/20">
                                    <div className="text-4xl mb-4">🌤️</div>
                                    <h4 className="text-2xl font-black text-primary dark:text-white mb-3 font-display">October – March</h4>
                                    <p className="text-secondary font-medium">Pleasant weather & spiritual events. Ideal for Ganga Aarti and outdoor exploration.</p>
                                </div>
                                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/20">
                                    <div className="text-4xl mb-4">☀️</div>
                                    <h4 className="text-2xl font-black text-primary dark:text-white mb-3 font-display">April – June</h4>
                                    <p className="text-secondary font-medium">Best for rafting & outdoor activities. Perfect water levels and adventure sports.</p>
                                </div>
                            </div>
                        </section>

                        {/* Target Audience */}
                        <section>
                            <div className="mb-12">
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Perfect For</span>
                                <h3 className="text-5xl font-black text-primary dark:text-white mb-4 font-display">Who Should Book <br /> This Retreat?</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Working Couples", desc: "Professionals seeking a mental reset and quality time together", icon: "👫" },
                                    { title: "Spiritual Seekers", desc: "Devotional travellers looking for authentic spiritual experiences", icon: "🕉️" },
                                    { title: "Wellness Enthusiasts", desc: "Those seeking yoga, meditation, and holistic healing", icon: "🧘" },
                                    { title: "Nature Lovers", desc: "Adventure seekers who appreciate calm riverside environments", icon: "🌿" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:shadow-xl transition-shadow">
                                        <div className="text-3xl mb-4">{item.icon}</div>
                                        <h4 className="text-xl font-black text-primary dark:text-white mb-2">{item.title}</h4>
                                        <p className="text-secondary text-sm font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-16">
                        <div className="bg-primary text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[60px]" />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 relative z-10">Why Choose This</h4>
                            <ul className="space-y-5 relative z-10">
                                {[
                                    "Ideal for working professionals seeking mental reset.",
                                    "Strong spiritual & devotional experiences.",
                                    "Light adventure without physical stress.",
                                    "Calm riverside environment."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-xs font-medium text-white/70 leading-relaxed">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary dark:text-white mb-6">Package Details</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-[9px] font-black uppercase tracking-widest text-emerald-500 mb-4">Inclusions</h5>
                                    <ul className="space-y-2.5 text-xs text-secondary font-bold">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Pune ↔ Delhi flights</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Delhi ↔ Rishikesh AC cab</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 4 Nights accommodation</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Breakfast & Dinner</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> River rafting</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> VIP Ganga Aarti</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Yoga & meditation</li>
                                    </ul>
                                </div>
                                <div className="h-px bg-black/5 dark:bg-white/5" />
                                <div>
                                    <h5 className="text-[9px] font-black uppercase tracking-widest text-accent mb-4">Exclusions</h5>
                                    <ul className="space-y-2 text-xs text-secondary font-bold">
                                        <li className="flex items-center gap-2 opacity-50">• Lunches</li>
                                        <li className="flex items-center gap-2 opacity-50">• Spa therapies</li>
                                        <li className="flex items-center gap-2 opacity-50">• Personal expenses</li>
                                        <li className="flex items-center gap-2 opacity-50">• Travel insurance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Sidebar */}
                        <div className="bg-teal-600 text-white rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(13,148,136,0.2)] text-center">
                            <h4 className="text-xl font-black mb-3 font-display">Ready to Book?</h4>
                            <p className="text-[9px] font-bold text-white/80 uppercase tracking-widest mb-6">Limited Slots Available</p>
                            <Link href="/book" className="block w-full py-4 bg-white text-teal-600 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-colors">
                                Book Your Slot
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
