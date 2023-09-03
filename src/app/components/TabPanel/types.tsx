import { ReactNode } from "react";

export interface ITabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export interface TabItem {
  label: string;
  content: ReactNode;
}

export interface IBasicTabsProps{
  tabItems: TabItem[]
}