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

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href={`mailto:${bio.email}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase">Gmail / Official</p>
                                        <p className="font-semibold text-sm truncate">{bio.email}</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:santhosh_84@yahoo.com" // Based on typical Yahoo format or if they provided one
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group"
                                >
                                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase">Yahoo Mail</p>
                                        <p className="font-semibold text-sm truncate">santhoshsugumar_84@yahoo.com</p>
                                    </div>
                                </a>
                            </div>

                            <a
                                href={`tel:${bio.phone.replace(/\s+/g, '')}`}
                                className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase">Phone</p>
                                    <p className="font-semibold">{bio.phone}</p>
                                </div>
                            </a>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href={bio.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                    className="p-4 rounded-2xl border border-border bg-background hover:border-blue-600 transition-colors text-muted-foreground hover:text-blue-600"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href={bio.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                    className="p-4 rounded-2xl border border-border bg-background hover:border-foreground transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href={bio.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Twitter / X"
                                    className="p-4 rounded-2xl border border-border bg-background hover:border-sky-500 transition-colors text-muted-foreground hover:text-sky-500"
                                >
                                    <Twitter size={24} />
                                </a>
                                <a
                                    href={bio.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                    className="p-4 rounded-2xl border border-border bg-background hover:border-blue-700 transition-colors text-muted-foreground hover:text-blue-700"
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
                        className="p-8 rounded-3xl bg-background border border-border shadow-sm"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Inquiry about Senior Python Role"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="I'd like to discuss a potential project..."
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-[1.02]"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
