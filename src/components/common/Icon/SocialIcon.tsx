interface SocialIconProps {
  path: string;
  href: string;
  className: string;
}

const SocialIcon = ({ path, href, className }: SocialIconProps) => (
  <a href={href} className={`text-neutral-600 ${className}`}>
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </a>
);

export default SocialIcon;
