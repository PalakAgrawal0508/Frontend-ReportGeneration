import { create } from "zustand";
import { AuthState, User, UserRole } from "../types/auth";
// This is the custom hook for handling authentication state

const storedUser = localStorage.getItem("user");
const persistedUser = storedUser ? JSON.parse(storedUser) : null;

interface AuthStore extends AuthState {
	login: (email: string, password: string, role: UserRole) => Promise<void>;
	logout: () => void;
}

const demoUsers = {
	FACULTY: {
		id: "1",
		email: "faculty@manit.ac.in",
		role: "FACULTY" as UserRole,
		name: "Ramesh Kumar Thakur",
	},
	HOD: {
		id: "2",
		email: "hodcse@manit.ac.in",
		role: "HOD_CSE" as UserRole,
		name: "Demo HOD",
	},
	DIRECTOR: {
		id: "3",
		email: "director@manit.ac.in",
		role: "DIRECTOR" as UserRole,
		name: "Demo Director",
	},
};

export const useAuth = create<AuthStore>((set) => ({
	// Initialize state from localStorage
	user: persistedUser,
	isAuthenticated: !!persistedUser,
	isLoading: false,
	login: async (email: string, password: string, role: UserRole) => {
		set({ isLoading: true });

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (password === "password123") {
			const user = {
				...demoUsers[role],
				...(role === "FACULTY" ? { name: "Ramesh Kumar Thakur" } : {}),
			};
			localStorage.setItem("user", JSON.stringify(user));
			set({ user, isAuthenticated: true, isLoading: false });
		} else {
			set({ isLoading: false });
			throw new Error("Invalid credentials");
		}
	},
	logout: () => {
		// Remove persisted user on logout
		localStorage.removeItem("user");
		set({ user: null, isAuthenticated: false });
	},
}));
