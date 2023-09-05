"use client";

import RouteGuard from "@/components/RouteGuard";
import SidebarLayout from "@/layouts/Sidebar";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import "dayjs/locale/pt-br";
import TabPanel from "../components/TabPanel";
import CustomerRegister from "./CustomerRegister";
import CustomerList from "./CustomerList";

export default function Customer() {
  const tabs = [
    { label: "Listagem", content: CustomerList() },
    { label: "Cadastro", content: CustomerRegister() },
  ];

  return (
    <RouteGuard>
      <ThemeProvider theme={theme}>
        <SidebarLayout>
          <TabPanel tabItems={tabs} />
        </SidebarLayout>
      </ThemeProvider>
    </RouteGuard>
  );
}
