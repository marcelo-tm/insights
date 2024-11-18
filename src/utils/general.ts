import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getIconColor(color: string) {
	switch (color) {
		case "info":
			return "#3b82f6";
		case "warning":
			return "#f59e0b";
		case "error":
			return "#ef4444";
		case "success":
			return "#10b981";
	}
}
