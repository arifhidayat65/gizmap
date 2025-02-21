import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  iconPath?: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink = ({ href, children, className = "" }: FooterLinkProps) => (
  <Link 
    href={href} 
    className={`text-neutral-600 hover:text-primary flex items-center ${className}`}
  >
    {children}
  </Link>
);

export default FooterLink;
