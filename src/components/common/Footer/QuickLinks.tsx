import FooterLink from './FooterLink'
import FooterSection from './FooterSection'
import { quickLinks } from '@/constants/footer'

const QuickLinks = () => (
  <FooterSection title="Quick Links">
    <ul className="space-y-2">
      {quickLinks.map(({ href, label }) => (
        <li key={href}>
          <FooterLink href={href}>
            {label}
          </FooterLink>
        </li>
      ))}
    </ul>
  </FooterSection>
);

export default QuickLinks;
