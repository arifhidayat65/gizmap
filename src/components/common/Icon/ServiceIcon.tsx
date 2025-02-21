'use client'

interface ServiceIconProps {
  name?: string;
  className?: string;
  path?: string;
}

const icons = {
  smartphone: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3h6.75c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75a1.125 1.125 0 01-1.125-1.125V4.125z" clipRule="evenodd" />
    </svg>
  ),
  // ... other icons
};

const ServiceIcon = ({ name, className = '', path }: ServiceIconProps) => {
  const icon = icons[name as keyof typeof icons];

  if (path) {
    return (
      <div className={`w-16 h-16 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d={path} />
        </svg>
      </div>
    );
  }

  if (!icon) return null;

  return (
    <div className={`w-16 h-16 ${className}`}>
      {icon}
    </div>
  );
};

export default ServiceIcon;
