// components/Layout.js
import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

interface ISidebarLayoutProps {
    children: ReactNode
}

export default function SidebarLayout ({ children }: ISidebarLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};