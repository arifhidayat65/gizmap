import Link from 'next/link'
import Image from 'next/image'
import SocialIcon from '../Icon/SocialIcon'
import { socialIcons } from '@/constants/footer'

const CompanyInfo = () => (
  <div className="col-span-1">
    <Link href="/">
      <Image
        src="/izmap.svg"
        alt="GizMap Logo"
        width={120}
        height={40}
        className="h-10 w-auto mb-4"
      />
    </Link>
    <p className="text-neutral-600 mb-4">
      Platform layanan service terpercaya untuk perangkat elektronik Anda
    </p>
    <div className="flex space-x-4">
      {Object.entries(socialIcons).map(([key, { path, href, className }]) => (
        <SocialIcon key={key} path={path} href={href} className={className} />
      ))}
    </div>
  </div>
);

export default CompanyInfo;
