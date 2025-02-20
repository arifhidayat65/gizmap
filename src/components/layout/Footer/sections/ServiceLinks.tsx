'use client'

import FooterLink from '../components/FooterLink'
import FooterSection from '../components/FooterSection'

interface Service {
  href: string
  label: string
  iconPath?: string
}

const services: Service[] = [
  {
    href: '/services/smartphone',
    label: 'Smartphone Repair',
    iconPath: 'phone'
  },
  {
    href: '/services/laptop',
    label: 'Laptop Repair',
    iconPath: 'laptop'
  },
  {
    href: '/services/tablet',
    label: 'Tablet Repair',
    iconPath: 'tablet'
  }
]

const ServiceLinks = () => (
  <FooterSection title="Services">
    <ul className="space-y-2">
      {services.map((service) => (
        <li key={service.href}>
          <FooterLink href={service.href} iconPath={service.iconPath}>
            {service.label}
          </FooterLink>
        </li>
      ))}
    </ul>
  </FooterSection>
)

export default ServiceLinks
