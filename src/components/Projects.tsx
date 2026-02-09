"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { ExternalLink, Tag, Briefcase } from "lucide-react"

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Projects</h2>
                    <p className="text-muted-foreground text-lg">
                        A selection of key projects where I applied my backend engineering and data validation expertise to solve complex business problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col h-full rounded-2xl bg-background border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-4">
                                    <Briefcase size={14} />
                                    <span>{project.domain}</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-4 pt-4 border-t border-border mt-auto">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2 flex items-center gap-2">
                                            <Tag size={12} />
                                            Key Impact
                                        </h4>
                                        <p className="text-sm font-medium">{project.impact}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-0.5 text-[10px] font-bold rounded bg-primary/10 text-primary"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
