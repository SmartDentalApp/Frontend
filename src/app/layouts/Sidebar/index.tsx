// components/Layout.js
import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import { Box, CssBaseline } from '@mui/material';

interface ISidebarLayoutProps {
    children: ReactNode
}

export default function SidebarLayout ({ children }: ISidebarLayoutProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {children}
      </Box>

    </Box>
  );
};