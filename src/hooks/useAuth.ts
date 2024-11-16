export function useAuth() {
	function signIn() {
		localStorage.setItem("isAuthenticated", "true");
	}

	function signOut() {
		localStorage.removeItem("isAuthenticated");
	}

	const isLogged = () => localStorage.getItem("isAuthenticated") === "true";

	return { signIn, signOut, isLogged };
}

export type AuthContext = ReturnType<typeof useAuth>;
