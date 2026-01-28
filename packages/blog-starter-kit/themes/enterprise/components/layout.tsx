'use client';

import { useEffect, useState } from 'react';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	const [isDark, setIsDark] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		// Check localStorage and system preference
		const saved = localStorage.getItem('darkMode');
		const shouldBeDark = saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
		setIsDark(shouldBeDark);
		document.documentElement.classList.toggle('dark', shouldBeDark);
	}, []);

	const toggleDarkMode = () => {
		const newState = !isDark;
		setIsDark(newState);
		localStorage.setItem('darkMode', JSON.stringify(newState));
		document.documentElement.classList.toggle('dark', newState);
	};

	// Prevent flash of unstyled content
	if (!isMounted) {
		return null;
	}

	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen bg-white dark:bg-neutral-950">
				<main>{children}</main>
				<button
					onClick={toggleDarkMode}
					className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-neutral-800 text-slate-900 dark:text-white shadow-lg hover:shadow-xl transition-shadow"
					aria-label="Toggle dark mode"
					title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{isDark ? '☀️' : '🌙'}
				</button>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
