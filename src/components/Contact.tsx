"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Facebook } from "lucide-react"
import { bio } from "@/lib/data"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            I'm currently open to new opportunities as a Senior Python Developer or ETL Specialist. Whether you have a question or just want to connect, feel free to reach out.
                        </p>

                        <div className="space-y-4">
                            {/* Email Section */}
                            <div className="flex flex-col gap-4">
                                <a
                                    href={`mailto:${bio.email}`}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:border-primary/50 transition-all hover:translate-x-1 group shadow-sm"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-inner">
                                        <Mail size={24} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mb-1">Gmail / Official</p>
                                        <p className="font-bold text-sm text-foreground break-all">{bio.email}</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:santhoshsugumar_84@yahoo.com"
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:border-purple-500/50 transition-all hover:translate-x-1 group shadow-sm"
                                >
                                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors shadow-inner">
                                        <Mail size={24} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mb-1">Yahoo Mail</p>
                                        <p className="font-bold text-sm text-foreground break-all">santhoshsugumar_84@yahoo.com</p>
                                    </div>
                                </a>
                            </div>

                            {/* Phone Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a
                                    href={`tel:${bio.phone.replace(/\s+/g, "")}`}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:border-blue-500/50 transition-all hover:translate-x-1 group shadow-sm"
                                >
                                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-inner">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                                        <p className="font-bold text-sm">{bio.phone}</p>
                                    </div>
                                </a>

                                <a
                                    href={`https://wa.me/919944082673?text=Hi%20Santhosh,%20I%20saw%20your%20portfolio...`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:border-green-500/50 transition-all hover:translate-x-1 group shadow-sm"
                                >
                                    <div className="p-3 rounded-xl bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors shadow-inner">
                                        <Send size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mb-1">WhatsApp / Message</p>
                                        <p className="font-bold text-sm">+91 99440 82673</p>
                                    </div>
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href={bio.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                    className="p-4 rounded-2xl border border-border bg-background hover:bg-blue-600 hover:text-white transition-all hover:scale-110 shadow-sm"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href={bio.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                    className="p-4 rounded-2xl border border-border bg-background hover:bg-foreground hover:text-background transition-all hover:scale-110 shadow-sm"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href={bio.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Twitter / X"
                                    className="p-4 rounded-2xl border border-border bg-background hover:bg-sky-500 hover:text-white transition-all hover:scale-110 shadow-sm"
                                >
                                    <Twitter size={24} />
                                </a>
                                <a
                                    href={bio.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                    className="p-4 rounded-2xl border border-border bg-background hover:bg-blue-700 hover:text-white transition-all hover:scale-110 shadow-sm"
                                >
                                    <Facebook size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-background border border-border shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                        <form
                            className="relative z-10 space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const name = formData.get('name');
                                const subject = formData.get('subject');
                                const message = formData.get('message');
                                window.location.href = `mailto:${bio.email}?subject=${subject}&body=Name: ${name}%0D%0A%0D%0A${message}`;
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Santhosh. S"
                                        className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="santhosh@example.com"
                                        className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="Discussion about Project"
                                    className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Let's build something amazing..."
                                    className="w-full px-5 py-4 rounded-2xl border border-border bg-muted/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium resize-none text-base"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-black text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 group"
                            >
                                <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
