import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	};

	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleMediaQuery = (e: MediaQueryListEvent | MediaQueryList) => {
			const savedTheme = localStorage.getItem("theme");
			if (savedTheme === null) {
				setTheme(e.matches ? "dark" : "light");
			}
		};

		handleMediaQuery(mediaQuery);
		mediaQuery.addEventListener("change", handleMediaQuery);

		return () => mediaQuery.removeEventListener("change", handleMediaQuery);
	}, []);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="p-2 transition-colors rounded-lg bg-surface-alt"
			aria-label="Toggle theme"
		>
			{theme === "light" ? (
				<Moon className="w-5 h-5 text-text-primary" />
			) : (
				<Sun className="w-5 h-5 text-text-primary" />
			)}
		</button>
	);
}
