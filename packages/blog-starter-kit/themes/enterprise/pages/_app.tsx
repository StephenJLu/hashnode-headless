import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const isDarkTheme = (pageProps as any)?.isDarkTheme ?? false;

	useEffect(() => {
		(window as any).adjustIframeSize = (id: string, newHeight: string) => {
			const i = document.getElementById(id);
			if (!i) return;
			// eslint-disable-next-line radix
			i.style.height = `${parseInt(newHeight)}px`;
		};
	}, []);

	useEffect(() => {
		// Apply dark mode class to HTML element based on publication preferences
		const html = document.documentElement;
		if (isDarkTheme) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	}, [isDarkTheme]);

	return <Component {...pageProps} />;
}
