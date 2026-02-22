import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme, mounted]);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-4 right-4 md:top-8 md:right-8 z-50 p-3 rounded-full bg-white/50 dark:bg-black/50 border border-stone-200 dark:border-stone-800 backdrop-blur-md shadow-lg text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Toggle Theme"
            title="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun size={20} strokeWidth={2} />
            ) : (
                <Moon size={20} strokeWidth={2} />
            )}
        </button>
    );
}
