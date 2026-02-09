"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Download } from "lucide-react"

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!mounted) return null

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-background/80 border-b border-border backdrop-blur-md py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        <span className="text-primary">Santhosh</span> <span className="hidden sm:inline">Portfolio</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-muted transition-colors mr-2"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a
                            href="/Santhosh_Sugumar_Resume_2026.pdf"
                            download
                            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold transition-all hover:bg-primary/90 hover:scale-105"
                        >
                            <Download size={16} className="mr-2" />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-base font-medium text-muted-foreground"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
