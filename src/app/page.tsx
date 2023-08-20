'use client';

import { Button, ThemeProvider } from "@mui/material";
import SidebarLayout from "./layouts/Sidebar";
import theme from "@/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <SidebarLayout>
        <Button variant="contained">Hello World</Button>
      </SidebarLayout>
    </ThemeProvider>
  )
}
