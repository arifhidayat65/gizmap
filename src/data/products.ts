import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Repair Smartphone',
    category: 'Smartphone',
    image: 'https://storage.googleapis.com/a1aa/image/imf-iNZsYZmyZ0nR2fMSBEtX9rOSe_pbyEl4l-cSgOw.jpg',
    rating: 5,
    reviews: 143,
    shopName: 'iRoom Bandung'
  },
  {
    id: '2',
    title: 'Repair Smart TV',
    category: 'Smart TV',
    image: 'https://storage.googleapis.com/a1aa/image/GVPc_xDNdgiET3nzJ_ihVkNUKMClLVCSGVXx0ksh93Q.jpg',
    rating: 5,
    reviews: 110,
    shopName: 'iService Bandung'
  },
  {
    id: '3',
    title: 'Repair Console',
    category: 'Console',
    image: 'https://storage.googleapis.com/a1aa/image/74P3KoQmVF6tgADp92h2YcMn1g0dPplaVY5PYmkySNY.jpg',
    rating: 5,
    reviews: 74,
    shopName: 'iServices Bandung'
  }
];

export const serviceCategories = [
  {
    icon: 'fa-mobile-alt',
    name: 'Service Smartphone'
  },
  {
    icon: 'fa-laptop',
    name: 'Service Laptop / PC'
  },
  {
    icon: 'fa-tv',
    name: 'Service LED / Smart TV'
  },
  {
    icon: 'fa-gamepad',
    name: 'Service Consol'
  },
  {
    icon: 'fa-phone',
    name: 'Service Alat Komunikasi'
  },
  {
    icon: 'fa-ellipsis-h',
    name: 'Service Alat Lainnya'
  }
];

export const communityGroups = [
  'Alumni Borneofalsher',
  'Komunitas Teknisi Regional Bandung',
  'iColor Service Repair',
  'Komunitas Teknisi Garangan'
];

export const promoProducts = products;
