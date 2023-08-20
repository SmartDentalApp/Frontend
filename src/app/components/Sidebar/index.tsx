import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Logo from "../icons/Logo";
import { Person } from "@mui/icons-material";
import { useState } from "react";

export default function Sidebar() {
    const menuItems = [
        {
            name: "Clientes",
            icon: Person
        }
    ]

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function toggleDrawer() {
        setIsDrawerOpen(true)
    }

    return (
        <Drawer
            anchor={"left"}
            open={isDrawerOpen}
            variant="permanent"
            onClose={toggleDrawer}
        >
            <div className="flex flex-col items-center">
                <Logo size="100px" />
                <Divider className="w-full" />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton>
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
    )
}