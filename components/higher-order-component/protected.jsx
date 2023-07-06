"use client";
import { useRouter } from "next/navigation";

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("Akash"));
      const userIsAuthenticated = user !== null;
      if (!userIsAuthenticated) {
        router.push("/");
      }
    }, []);

    return <Component {...props} />;
  };
}
