interface ContactInfo {
  [key: string]: {
    icon: string;
    text: string;
  };
}

interface QuickLink {
  text: string;
  href: string;
}

export const contactInfo: ContactInfo = {
  address: {
    icon: 'location',
    text: 'Jl. Raya Cibiru\nBandung, Jawa Barat'
  },
  phone: {
    icon: 'phone',
    text: '+62 812-3456-7890'
  },
  email: {
    icon: 'mail',
    text: 'info@izmap.com'
  },
  hours: {
    icon: 'clock',
    text: 'Mon - Fri: 9:00 AM - 5:00 PM'
  }
};

export const quickLinks: QuickLink[] = [
  {
    text: 'About Us',
    href: '/about-us'
  },
  {
    text: 'Services',
    href: '/services'
  },
  {
    text: 'Products',
    href: '/products'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'FAQ',
    href: '/faq'
  }
];

export type { ContactInfo, QuickLink };
