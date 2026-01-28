import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.darkMode?.logo || publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex w-full flex-col items-center gap-5">					
					<div className="flex flex-col items-center gap-5 text-center text-slate-600 dark:text-neutral-300">
						<SocialLinks />
						<p>&copy; {new Date().getFullYear()} Stephen J. Lu</p>
						<p>
							<a href="https://hashnode.com/privacy" className="hover:underline">
								Privacy Policy
							</a>{' '}
							·{' '}
							<a href="https://hashnode.com/terms" className="hover:underline">
								Terms
							</a>{' '}
							·{' '}
							<a href="https://hashnode.com/code-of-conduct" className="hover:underline">
								Code of Conduct
							</a>
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
