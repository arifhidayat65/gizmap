'use client';

import Link from 'next/link';
import FooterSection from '@/components/layout/Footer/components/FooterSection';
import { quickLinks, type QuickLink } from '@/constants/footer';

const QuickLinks = () => (
  <FooterSection title="Quick Links">
    <ul className="space-y-2">
      {quickLinks.map(({ text, href }: QuickLink) => (
        <li key={href}>
          <Link 
            href={href}
            className="text-neutral-600 hover:text-primary transition-colors"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </FooterSection>
);

export default QuickLinks;
