import type { PropsWithChildren } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="relative min-h-screen font-sans p-4 md:p-8 md:py-16 overflow-hidden flex items-center justify-center">

			<ThemeToggle />

			{/* Ambient Glowing Orbs */}
			<div className="fixed top-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-300/40 dark:bg-purple-900/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse-slow"></div>
			<div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-300/40 dark:bg-indigo-900/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-float"></div>
			<div className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-emerald-300/30 dark:bg-emerald-900/5 blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

			<main className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
				{children}
			</main>
		</div>
	);
};

export default Layout;
