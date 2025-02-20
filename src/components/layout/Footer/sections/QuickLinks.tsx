'use client'

import FooterLink from '../components/FooterLink'
import FooterSection from '../components/FooterSection'
import { quickLinks } from '@/constants/footer'

interface QuickLink {
  href: string
  label: string
}

const QuickLinks = () => (
  <FooterSection title="Quick Links">
    <ul className="space-y-2">
      {quickLinks.map(({ href, label }: QuickLink) => (
        <li key={href}>
          <FooterLink href={href}>
            {label}
          </FooterLink>
        </li>
      ))}
    </ul>
  </FooterSection>
)

export default QuickLinks
