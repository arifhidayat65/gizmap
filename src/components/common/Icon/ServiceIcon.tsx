'use client'

interface ServiceIconProps {
  name?: string;
  className?: string;
}

const ServiceIcon = ({ name = '', className = '' }: ServiceIconProps) => {
  // Map service names to specific Font Awesome icons
  const iconMap: { [key: string]: string } = {
    smartphone: 'mobile-alt',  // fa-mobile-alt for smartphone
    laptop: 'laptop',          // fa-laptop for laptop/PC
    tv: 'tv',                 // fa-tv for LED/Smart TV
    gamepad: 'gamepad',       // fa-gamepad for console
    phone: 'phone-alt',       // fa-phone-alt for communication devices
    more: 'ellipsis-h',       // fa-ellipsis-h for more options
    search: 'search'          // fa-search for search functionality
  };

  // Get the icon class or use a default if not found
  const iconClass = iconMap[name] || 'question';

  return (
    <div className={`icon-wrapper ${className}`}>
      <i className={`fas fa-${iconClass}`} aria-hidden="true"></i>
    </div>
  );
};

export default ServiceIcon;
