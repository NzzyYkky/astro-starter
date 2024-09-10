// cardVariants.ts
import { tv } from 'tailwind-variants';

export const button = tv(
	{
		base: 'text-base rounded-full block w-fit px-4 py-2 font-bold cursor-pointer',
		variants: {
			color: {
				primary: 'bg-neutral-200',
				secondary: 'bg-black',
			},
		},
	},
	{
		responsiveVariants: ['sm', 'md'],
	}
);
