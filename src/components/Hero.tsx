"use client"

import { motion } from "framer-motion"
import { Download, ArrowRight, Mouse, Linkedin, Github, Twitter, Facebook, Mail } from "lucide-react"
import { bio } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0a0c14]">
            {/* Topographical Background Pattern (Subtle SVG) */}
            <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="topo" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 Q 25 25, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M0 70 Q 25 45, 50 70 T 100 70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topo)" />
                </svg>
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-1/4 -left-20 -z-10 h-[600px] w-[600px] bg-blue-600/20 blur-[150px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 -z-10 h-[500px] w-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-blue-400 font-medium mb-4 tracking-wide">
                                Welcome to my portfolio!
                            </p>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-6">
                                Hello, my <br />
                                name's <span className="text-blue-500">{bio.name.split(' ')[0]}</span>.
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                                I'm a <span className="text-white font-medium">Senior Python Developer</span> from India.
                                Currently building high-scale <span className="text-white font-medium">ETL Systems</span> and
                                enterprise solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4"
                        >
                            <a
                                href="/Santhosh_Sugumar_Resume_2026.pdf"
                                download
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-500 text-white font-bold transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
                            >
                                <Download size={18} className="mr-2" />
                                Download Resume
                            </a>
                            <Link
                                href="/resume"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-700 bg-transparent text-white font-bold transition-all hover:bg-slate-800 active:scale-95"
                            >
                                View Resume
                            </Link>
                        </motion.div>

                        {/* Scroll Down Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="hidden lg:flex items-center gap-3 pt-12 text-slate-500"
                        >
                            <div className="p-2 rounded-full border border-slate-700">
                                <Mouse size={20} className="animate-bounce" />
                            </div>
                            <span className="text-sm font-medium uppercase tracking-[0.2em]">Scroll down</span>
                        </motion.div>
                    </div>

                    {/* Right Image Content */}
                    <div className="relative flex-1 flex justify-center lg:justify-end pr-8">
                        {/* Floating Decor - Prism/Pyramid */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 left-1/4 z-20 hidden lg:block"
                        >
                            <div className="w-16 h-16 bg-blue-400 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] shadow-2xl blur-[1px]" />
                        </motion.div>

                        {/* Floating Decor - Coil/Spring */}
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, -10, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-4 -right-4 z-20 hidden lg:block"
                        >
                            <div className="text-blue-500 opacity-80">
                                <svg width="60" height="80" viewBox="0 0 60 80">
                                    <path d="M10 10 C 50 10, 50 20, 10 20 C -30 20, -30 30, 10 30 C 50 30, 50 40, 10 40 C -30 40, -30 50, 10 50 C 50 50, 50 60, 10 60 C -30 60, -30 70, 10 70" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Profile Image with Stadium Mask */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative w-[280px] h-[450px] md:w-[350px] md:h-[550px] rounded-[1000px] overflow-hidden border-[12px] border-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-800">
                                <Image
                                    src="/profile.jpg"
                                    alt={bio.name}
                                    fill
                                    className="object-cover scale-110 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                    priority
                                />
                                {/* Bottom Inner Glow */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Social Sidebar */}
                            <div className="absolute top-1/2 -right-16 -translate-y-1/2 flex flex-col items-center gap-6 z-30 hidden xl:flex">
                                <div className="h-20 w-px bg-gradient-to-b from-transparent via-slate-700 to-slate-700" />
                                <p className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500 whitespace-nowrap">Follow me on</p>
                                <div className="flex flex-col gap-4">
                                    <a href={bio.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href={bio.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-foreground hover:border-white transition-all">
                                        <Github size={18} />
                                    </a>
                                    <a href={bio.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-all">
                                        <Twitter size={18} />
                                    </a>
                                </div>
                                <div className="h-20 w-px bg-gradient-to-t from-transparent via-slate-700 to-slate-700" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
