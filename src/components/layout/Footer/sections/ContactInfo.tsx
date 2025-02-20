'use client'

import ServiceIcon from '@/components/common/Icon/ServiceIcon'
import FooterSection from '../components/FooterSection'
import { contactInfo } from '@/constants/footer'

const ContactInfo = () => (
  <FooterSection title="Contact Us">
    <ul className="space-y-2">
      {Object.entries(contactInfo).map(([key, { icon, text }]) => (
        <li key={key} className={`flex ${key === 'address' ? 'items-start' : 'items-center'}`}>
          <ServiceIcon 
            path={icon} 
            className="w-6 h-6 mr-2 text-primary"
          />
          <span className="text-neutral-600">
            {text.includes('\n') ? (
              text.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))
            ) : (
              text
            )}
          </span>
        </li>
      ))}
    </ul>
  </FooterSection>
)

export default ContactInfo
