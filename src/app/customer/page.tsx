"use client";

import RouteGuard from "@/components/RouteGuard";
import SidebarLayout from "@/layouts/Sidebar";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import "dayjs/locale/pt-br";
import BasicTabs from "../components/TabPanel";
import CustomerRegister from "./CustomerRegister";
import CustomerEdit from "./CustomerEdit";

export default function Customer() {
  const tabs = [
    { label: "Listagem", content: CustomerEdit() },
    { label: "Cadastro", content: CustomerRegister() },
  ];

  return (
    <RouteGuard>
      <ThemeProvider theme={theme}>
        <SidebarLayout>
          <BasicTabs tabItems={tabs} />
        </SidebarLayout>
      </ThemeProvider>
    </RouteGuard>
  );
}
