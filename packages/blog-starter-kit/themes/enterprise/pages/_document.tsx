import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	const darkModeScript = `
    (function() {
      const saved = localStorage.getItem('darkMode');
      const isDark = saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

	return (
		<Html lang="en">
			<Head>
				<script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
