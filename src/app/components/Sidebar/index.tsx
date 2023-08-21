import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Logo from "../icons/Logo";
import { Person, ExitToApp } from "@mui/icons-material";
import { useState } from "react";
import { removeAuthToken } from "@/composables/auth";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter()

    const logOut = () => {
        removeAuthToken()
        router.push("/login")
    }

    const menuItems = [
        {
            name: "Clientes",
            icon: Person
        },
        {
            name: "Sair",
            icon: ExitToApp,
            action: logOut
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
    )
}