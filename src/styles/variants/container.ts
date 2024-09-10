// cardVariants.ts
import { tv } from 'tailwind-variants';

export const container = tv(
	{
		base: 'mx-auto px-container-sp w-full md:max-w-screen-lg',
		variants: {
			wide: {
				header: 'mx-auto px-8 h-header w-full md:max-w-[none] md:px-20',
			},
		},
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);
