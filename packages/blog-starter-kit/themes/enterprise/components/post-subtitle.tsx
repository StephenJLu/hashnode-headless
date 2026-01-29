import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostSubtitle = ({ children }: Props) => {
	return (
		<div className="prose md:prose-lg dark:prose-invert prose-p:text-center mx-auto max-w-screen-lg px-5">
			<h3 className="text-slate-600 dark:text-neutral-400">{children}</h3>
		</div>
	);
};
