import FooterLink from './FooterLink'
import FooterSection from './FooterSection'
import { serviceIcons } from '@/constants/footer'

const ServiceLinks = () => (
  <FooterSection title="Services">
    <ul className="space-y-2">
      {Object.entries(serviceIcons).map(([key, { path, href, label }]) => (
        <li key={key}>
          <FooterLink href={href} iconPath={path}>
            {label}
          </FooterLink>
        </li>
      ))}
    </ul>
  </FooterSection>
);

export default ServiceLinks;
