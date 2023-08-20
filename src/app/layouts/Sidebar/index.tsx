// components/Layout.js
import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

interface SidebarLayoutProps {
    children: ReactNode
}

export default function SidebarLayout ({ children }: SidebarLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};