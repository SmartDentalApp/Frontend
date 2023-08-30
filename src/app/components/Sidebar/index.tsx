import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Logo from "../icons/Logo";
import { Person, ExitToApp } from "@mui/icons-material";
import { useState } from "react";
import { removeAuthToken } from "@/composables/auth";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const logOut = () => {
    removeAuthToken();
    router.push("/login");
  };

  const RedirectToCustomer = () => {
    removeAuthToken();
    router.push("/customer");
  };

  const menuItems = [
    {
      name: "Clientes",
      icon: Person,
      action: RedirectToCustomer,
    },
    {
      name: "Sair",
      icon: ExitToApp,
      action: logOut,
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpen(true);
  }

  const drawerWidth = 240

  return (
    <Drawer
      anchor={"left"}
      open={isDrawerOpen}
      variant="permanent"
      onClose={toggleDrawer}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <div className="flex flex-col items-center">
        <Logo size="100px" />
        <Divider className="w-full" />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={item.action}>
                <ListItemIcon>
                  <item.icon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
