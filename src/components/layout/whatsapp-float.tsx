'use client';

import { useState } from 'react';
import Link from 'next/link';

const WHATSAPP_NUMBER = '6588345437'; // Fleetbase: +65 8834 5437
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Fleetbase team! I'd like to learn more about your logistics platform."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fleetbase on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        // Positioning & stacking — always visible
        'fixed bottom-8 right-8 z-[9999]',
        // Size — desktop
        'w-[72px] h-[72px]',
        // Shrink on small screens
        'max-[768px]:w-14 max-[768px]:h-14 max-[768px]:bottom-5 max-[768px]:right-5',
        // Shape & colour
        'rounded-full bg-[#25D366]',
        // Shadow
        'shadow-[0_12px_30px_rgba(0,0,0,0.35)]',
        // Flex centre
        'flex items-center justify-center',
        // Hover transition
        'transition-all duration-300 ease-out',
        hovered ? 'scale-110' : 'scale-100',
        // Accessibility ring
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50',
      ].join(' ')}
    >
      {/* WhatsApp SVG icon — inline, no extra network request */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        aria-hidden="true"
        className="w-[34px] h-[34px] max-[768px]:w-[26px] max-[768px]:h-[26px]"
      >
        <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.629 4.674 1.82 6.694L2.667 29.333l6.82-1.786A13.28 13.28 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 24.267a11.003 11.003 0 0 1-5.61-1.543l-.402-.239-4.047 1.06 1.08-3.938-.262-.415A10.96 10.96 0 0 1 5.003 16C5.003 9.925 9.928 5 16.003 5S27.003 9.925 27.003 16 22.078 26.934 16.003 26.934zm6.03-8.22c-.33-.165-1.953-.963-2.256-1.073-.303-.11-.524-.165-.744.165-.22.33-.854 1.073-1.047 1.293-.193.22-.385.247-.715.082-.33-.165-1.392-.513-2.651-1.636-.98-.874-1.641-1.952-1.833-2.282-.193-.33-.02-.508.145-.672.149-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.02-2.455-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.082-.88.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.554 5.64 4.985.788.34 1.403.543 1.882.695.79.252 1.51.216 2.079.131.634-.095 1.953-.798 2.228-1.569.275-.77.275-1.43.193-1.568-.083-.138-.303-.22-.633-.385z" />
      </svg>

      {/* Tooltip label — appears on hover, desktop only */}
      <span
        className={[
          'absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2',
          'hidden md:block',
          'whitespace-nowrap rounded-lg px-3 py-1.5',
          'bg-[#111827] text-white text-xs font-medium',
          'shadow-lg',
          'transition-all duration-200',
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2',
          'pointer-events-none select-none',
        ].join(' ')}
      >
        Chat with us
        {/* Arrow */}
        <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-[#111827]" />
      </span>
    </Link>
  );
}
