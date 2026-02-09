"use client"

import Navigation from "@/components/Navigation"
import { Download, Printer, ArrowLeft, FileText, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ResumePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-[#0a0c14] text-white">
            <Navigation />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12"
                >
                    <div>
                        <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-4 group">
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Professional <span className="text-blue-500">Resume</span></h1>
                        <p className="text-slate-400 mt-2">Senior Python Developer & ETL Specialist</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => window.print()}
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 bg-slate-900/50 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95"
                        >
                            <Printer size={18} className="mr-2" />
                            Print Version
                        </button>
                        <a
                            href="/Santhosh_Sugumar_Resume_2026.pdf"
                            download
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                        >
                            <Download size={18} className="mr-2" />
                            Download Resume (PDF)
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900/40 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden min-h-[700px] relative flex flex-col items-center justify-center p-8 md:p-20 text-center backdrop-blur-sm"
                >
                    {/* Visual Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full -z-10" />

                    <div className="max-w-2xl w-full">
                        <div className="w-24 h-24 bg-blue-500/10 text-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-blue-500/20 shadow-inner">
                            <FileText size={48} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Resume Preview Ready</h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            A high-fidelity PDF version of my resume is available for viewing and download.
                            It is optimized for <span className="text-white font-medium">ATS systems</span> and designed for maximum readability by recruiters and hiring managers.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                            <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                                <CheckCircle2 size={20} className="text-blue-500" />
                                <span className="text-sm font-medium">ATS-Friendly Structure</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                                <CheckCircle2 size={20} className="text-blue-500" />
                                <span className="text-sm font-medium">Print-Ready High Quality</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                                <CheckCircle2 size={20} className="text-blue-500" />
                                <span className="text-sm font-medium">Selectable Digital Text</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                                <CheckCircle2 size={20} className="text-blue-500" />
                                <span className="text-sm font-medium">Mobile Optimized Viewing</span>
                            </div>
                        </div>

                        <a
                            href="/Santhosh_Sugumar_Resume_2026.pdf"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-black text-lg transition-all hover:bg-slate-200 hover:scale-105 active:scale-95 shadow-xl"
                        >
                            <Download size={24} className="mr-3" />
                            Download Full Resume
                        </a>
                        <p className="mt-6 text-slate-500 text-sm italic">
                            File size: ~250 KB | Updated: Jan 2026
                        </p>
                    </div>

                    {/* Print Version Fallback */}
                    <div className="hidden print:block w-full text-left bg-white text-black p-10">
                        <h1 className="text-4xl font-bold border-b-2 border-black pb-4 mb-6">Santhosh Sugumar</h1>
                        <p className="text-xl mb-2 font-semibold text-gray-700">Senior Python Developer | ETL Specialist</p>
                        <p className="mb-8 text-gray-600">santhoshsugumar_84@yahoo.com | +91 86670 25228 | Chidambaram, India</p>

                        <h2 className="text-2xl font-bold uppercase tracking-wider border-b-2 border-gray-300 mb-4">Professional Summary</h2>
                        <p className="mb-8 leading-relaxed">
                            Results-driven Senior Software Engineer with over 12 years of enterprise experience specializing in Python, Django, and high-scale ETL/Data Testing. Proven expertise in building robust backend systems and implementing comprehensive data validation frameworks.
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
