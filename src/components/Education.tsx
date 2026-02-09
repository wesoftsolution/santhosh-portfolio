"use client"

import { motion } from "framer-motion"
import { education } from "@/lib/data"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <p className="text-muted-foreground text-lg">
                        Academic foundation in engineering and early education details.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl border border-border bg-background relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GraduationCap size={48} />
                            </div>

                            <div className="flex items-center gap-2 text-primary mb-4">
                                <Calendar size={16} />
                                <span className="text-sm font-medium">{edu.year}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                            <p className="text-muted-foreground font-medium mb-4">{edu.institution}</p>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                                <Award size={14} />
                                <span>{edu.score}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
