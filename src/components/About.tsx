"use client"

import { motion } from "framer-motion"
import { bio } from "@/lib/data"
import { MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl bg-muted border border-border overflow-hidden relative shadow-lg">
                            <Image
                                src="/profile.jpg"
                                alt="Santhosh Sugumar – Senior Python Developer"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 p-6 bg-background border border-border rounded-2xl shadow-xl hidden md:block">
                            <p className="text-3xl font-bold text-primary">12+</p>
                            <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
                        </div>
                    </motion.div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Profile</h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a Senior Software Engineer with a deep specialization in Python and Django frameworks. My career has been defined by a commitment to data quality and robust backend engineering, particularly in the enterprise IT and banking sectors.
                            </p>
                            <p>
                                With over a decade of experience, I've transitioned from hardware QC to junior development, and eventually to leading backend initiatives at HPE. This diverse background gives me a unique perspective on the full lifecycle of software—from the initial protocol design to high-scale ETL testing and production-grade REST APIs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/30">
                                <MapPin size={20} className="text-primary" />
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase">Location</p>
                                    <p className="font-medium">{bio.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/30">
                                <Mail size={20} className="text-primary" />
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase">Email</p>
                                    <p className="font-medium text-sm">{bio.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
