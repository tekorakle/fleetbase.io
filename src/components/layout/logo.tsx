import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface LogoProps {
 iconClassName?: string;
 wordmarkClassName?: string;
 className?: string;
 href?: string;
 noLink?: boolean;
}

export default function Logo({
 iconClassName,
 wordmarkClassName,
 className,
 href = '/',
 noLink = false,
}: LogoProps) {
 const Element = noLink ? 'div' : Link;

 return (
 <Element
 href={href}
 className={cn(
 'flex items-center gap-2.5 text-xl font-medium',
 className,
 )}
 >
 <Image
 src="/images/filled-icon.png"
 alt="Fleetbase"
 width={32}
 height={32}
 className={cn('w-8 h-8 object-contain rounded-lg shadow-md', iconClassName)}
 />
 <span className={cn('font-semibold', wordmarkClassName)}>Fleetbase</span>
 </Element>
 );
}
