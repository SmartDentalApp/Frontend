import { ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
}
export interface ITabPanelProps {
  tabItems: TabItem[];
}
