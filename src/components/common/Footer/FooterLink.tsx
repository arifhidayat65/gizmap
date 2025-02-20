import Link from 'next/link';
import ServiceIcon from '../Icon/ServiceIcon';

interface FooterLinkProps {
  href: string;
  iconPath?: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink = ({ href, iconPath, children, className = "" }: FooterLinkProps) => (
  <Link 
    href={href} 
    className={`text-neutral-600 hover:text-primary flex items-center ${className}`}
  >
    {iconPath && <ServiceIcon path={iconPath} />}
    {children}
  </Link>
);

export default FooterLink;
