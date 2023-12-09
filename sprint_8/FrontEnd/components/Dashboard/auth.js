import { useEffect } from "react";
import { useRouter } from "next/router";

const WithAuth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Verifica si hay una cookie llamada "user" solo si estamos en el lado del cliente
    if (typeof window !== "undefined") {
      const hasUserCookie = document.cookie.includes("user");
      if (!hasUserCookie) {
        console.log('no está logueado');
        router.push('/');
      }
    }
  }, [router]);

  return null;
};

export default WithAuth;


