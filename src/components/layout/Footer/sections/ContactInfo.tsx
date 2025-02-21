'use client';

import ServiceIcon from '@/components/common/Icon/ServiceIcon';
import FooterSection from '../components/FooterSection';
import { contactInfo, type ContactInfo as ContactInfoType } from '@/constants/footer';

const ContactInfo = () => (
  <FooterSection title="Contact Us">
    <ul className="space-y-2">
      {Object.entries(contactInfo).map(([key, { icon, text }]: [string, ContactInfoType[string]]) => (
        <li key={key} className={`flex ${key === 'address' ? 'items-start' : 'items-center'}`}>
          <ServiceIcon 
            name={icon} 
            className="w-6 h-6 mr-2 text-primary"
          />
          <span className="text-neutral-600">
            {text.includes('\n') ? (
              text.split('\n').map((line: string, i: number) => (
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
);

export default ContactInfo;
