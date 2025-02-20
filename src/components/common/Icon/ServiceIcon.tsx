interface ServiceIconProps {
  path: string;
  className?: string;
}

const ServiceIcon = ({ path, className = "w-5 h-5 mr-2" }: ServiceIconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);

export default ServiceIcon;
