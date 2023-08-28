import { useRouter } from 'next/router';
import { useEffect } from 'react';

function ProtectedRoute({ children }:any) {
  const router = useRouter();

  // ... lógica de autenticación ...

  useEffect(() => {
    // Si no estás autenticado, redirige a la página de inicio de sesión
    if (!verificacionExitosa) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
}

export default ProtectedRoute;
