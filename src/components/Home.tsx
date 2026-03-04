import React, { useEffect, useRef, useState } from "react";

interface HomeProps {
	name: string;
	title: string;
}

const Home: React.FC<HomeProps> = ({ name, title }) => {
	const nameParts = (name || "PORTFOLIO").split(" ");
	const displayName = (nameParts[0] || "PORTFOLIO").toUpperCase();
	const letters = displayName.split("");

	const [lettersVisible, setLettersVisible] = useState<boolean[]>(
		Array(letters.length).fill(false),
	);
	const [strikeVisible, setStrikeVisible] = useState(false);
	const [isSplitting, setIsSplitting] = useState(false);
	const [titleVisible, setTitleVisible] = useState(false);
	const [shakeActive, setShakeActive] = useState(false);
	const hasAnimated = useRef(false);

	useEffect(() => {
		if (hasAnimated.current) return;
		hasAnimated.current = true;

		// Stagger each letter's entrance with a 3D slam
		letters.forEach((_, i) => {
			const delay = 100 + i * 80; // stagger: 80ms per letter
			setTimeout(() => {
				setLettersVisible((prev) => {
					const next = [...prev];
					next[i] = true;
					return next;
				});
			}, delay);
		});

		// After all letters land, trigger the blade slash + aftershock + SPLIT
		const allLettersDone = 100 + letters.length * 80 + 350;
		setTimeout(() => {
			setStrikeVisible(true);

			// Trigger the split precisely when the blade slashes
			setIsSplitting(true);
			setTimeout(() => setIsSplitting(false), 1200); // Extended duration

			// Brief screen shake on strikethrough impact
			setTimeout(() => setShakeActive(true), 50);
			setTimeout(() => setShakeActive(false), 450);
		}, allLettersDone);

		// Fade in the subtitle after everything
		setTimeout(() => {
			setTitleVisible(true);
		}, allLettersDone + 1300); // Adjusted delay for longer split
	}, [letters.length]);

	return (
		<div
			className={`flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center px-4 overflow-hidden${shakeActive ? " hero-shake" : ""}`}
		>
			<div className="relative mb-6 md:mb-10">
				{/* Letter group */}
				<h1
					className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-outline uppercase select-none leading-none relative flex"
					style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}
				>
					{letters.map((letter, i) => (
						<span
							key={i}
							className={`relative inline-block hero-letter${lettersVisible[i] ? " hero-letter--visible" : ""}`}
							style={
								{
									animationDelay: `0ms`,
									"--letter-skew": `${(i % 2 === 0 ? 1 : -1) * (i % 3) * 0.5}deg`,
								} as React.CSSProperties
							}
						>
							{/* Inner container to hold the slices */}
							<span
								className={`block transition-transform duration-500 ${isSplitting ? "scale-[1.02]" : "scale-100"}`}
							>
								{/* Top Slice */}
								<span
									className={`absolute inset-0 slice-top ${isSplitting ? "slice-top--split" : ""}`}
									aria-hidden="true"
								>
									{letter}
								</span>
								{/* Bottom Slice */}
								<span
									className={`absolute inset-0 slice-bottom ${isSplitting ? "slice-bottom--split" : ""}`}
									aria-hidden="true"
								>
									{letter}
								</span>
								{/* Invisible original to maintain layout */}
								<span className="opacity-0">{letter}</span>
							</span>
						</span>
					))}
				</h1>

				{/* Strikethrough blade slash */}
				<span
					className={`hero-strikethrough${strikeVisible ? " hero-strikethrough--visible" : ""}`}
					aria-hidden="true"
				/>
			</div>

			<p
				className={`mono text-orange-500 text-[10px] md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase px-4 hero-title${titleVisible ? " hero-title--visible" : ""}`}
			>
				{title}
			</p>
		</div>
	);
};

export default Home;
