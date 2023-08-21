import { getAuthToken } from "@/composables/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface IRouteGuardProps {
    children: ReactNode;
  }

export default function RouteGuard({children}: IRouteGuardProps) {
    const router = useRouter()

    useEffect(() => {
        const authToken = getAuthToken()
        if (!authToken) router.push('/login')
    }, [])

    return (<>{children}</>)
}

