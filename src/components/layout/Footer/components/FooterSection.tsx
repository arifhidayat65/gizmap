'use client';

import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div className="col-span-1">
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    {children}
  </div>
);

export default FooterSection;
