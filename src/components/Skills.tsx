"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Code2, Database, ShieldCheck, Cloud, Layout } from "lucide-react"

const skillCategories = [
    {
        title: "Programming & Frameworks",
        items: skills.programming,
        icon: <Code2 className="text-blue-500" />
    },
    {
        title: "Databases & Data",
        items: skills.databases,
        icon: <Database className="text-indigo-500" />
    },
    {
        title: "ETL & Quality Assurance",
        items: skills.etlTesting,
        icon: <ShieldCheck className="text-teal-500" />
    },
    {
        title: "Cloud & DevOps",
        items: skills.devOps,
        icon: <Cloud className="text-purple-500" />
    },
    {
        title: "Frontend",
        items: skills.frontend,
        icon: <Layout className="text-pink-500" />
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive overview of my technical stack and engineering capabilities developed over 12+ years.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-muted">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-xl">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
