"use client"

import { motion } from "framer-motion"
import { experiences, secondaryExperience } from "@/lib/data"
import { Briefcase, Calendar, Building2, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function Experience() {
    const [showAll, setShowAll] = useState(false)

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A track record of delivering value in enterprise environments, from backend architecture at HPE to high-stakes data validation in investment banking.
                    </p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={`${exp.company}-${idx}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12 border-l-2 border-border"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                                    <div className="flex items-center gap-2 mt-1 text-primary font-medium">
                                        <Building2 size={18} />
                                        <span>{exp.company}</span>
                                        {exp.client && (
                                            <span className="text-muted-foreground ml-1">
                                                (Client: {exp.client})
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground bg-muted px-4 py-1.5 rounded-full text-sm w-fit">
                                    <Calendar size={16} />
                                    <span>{exp.duration}</span>
                                </div>
                            </div>

                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            {exp.responsibilities && (
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                            <span className="shrink-0 h-1.5 w-1.5 rounded-full bg-primary/60 mt-2" />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {exp.projects && (
                                <div className="flex flex-col gap-6 mb-6">
                                    {exp.projects.map((project, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border">
                                            <h4 className="font-bold text-lg mb-2">{project.name}</h4>
                                            <p className="text-sm text-muted-foreground mb-3 italic">Client: {project.client}</p>
                                            <ul className="space-y-2">
                                                {project.tasks.map((task, j) => (
                                                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                                                        <span className="text-primary">•</span>
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-0.5 text-xs font-semibold rounded-md border border-border bg-background text-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Older Experience - Compressed View */}
                <div className="mt-20">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 mx-auto text-primary font-medium hover:underline py-4"
                    >
                        {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        {showAll ? "Show Less" : "View Early Career (2008 - 2015)"}
                    </button>

                    {showAll && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                        >
                            {secondaryExperience.map((exp, idx) => (
                                <div key={idx} className="p-6 rounded-2xl border border-border bg-muted/20">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-bold text-lg">{exp.role}</h4>
                                            <p className="text-primary text-sm">{exp.company}</p>
                                        </div>
                                        <span className="text-xs text-muted-foreground font-mono">{exp.duration}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}
