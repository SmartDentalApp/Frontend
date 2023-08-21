'use client';

import { Button, ThemeProvider } from "@mui/material";
import SidebarLayout from "./layouts/Sidebar";
import theme from "@/theme";
import RouteGuard from "./components/RouteGuard";

export default function Home() {
  return (
    <RouteGuard>
      <ThemeProvider theme={theme}>
        <SidebarLayout>
          <Button variant="contained">Hello World</Button>
        </SidebarLayout>
      </ThemeProvider>
    </RouteGuard>
  )
}
