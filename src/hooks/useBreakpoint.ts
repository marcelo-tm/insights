import { useState, useEffect, useMemo } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints = {
	xs: 0,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};

export default function useBreakpoint() {
	const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");

	const isSmallScreen = useMemo(
		() => ["xs", "sm", "md"].includes(breakpoint),
		[breakpoint]
	);

	const isBigScreen = useMemo(
		() => ["lg", "xl", "2xl"].includes(breakpoint),
		[breakpoint]
	);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			if (width >= breakpoints["2xl"]) {
				setBreakpoint("2xl");
			} else if (width >= breakpoints.xl) {
				setBreakpoint("xl");
			} else if (width >= breakpoints.lg) {
				setBreakpoint("lg");
			} else if (width >= breakpoints.md) {
				setBreakpoint("md");
			} else if (width >= breakpoints.sm) {
				setBreakpoint("sm");
			} else {
				setBreakpoint("xs");
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return { breakpoint, isSmallScreen, isBigScreen };
}
