import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

function ProtectedRoute({ children }:any) {
  const router = useRouter();
  const {verificacionExitosa}:any = useAuth();

  // ... lógica de autenticación ...

  useEffect(() => {
    // Si no estás autenticado, redirige a la página de inicio de sesión
    if (!verificacionExitosa) {
      router.push('/');
    }
  }, [verificacionExitosa]);

  return <>{children}</>;
}

export default ProtectedRoute;
