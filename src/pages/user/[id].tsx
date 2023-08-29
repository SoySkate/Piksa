// pages/user/[id].tsx

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

function UserDetails() {
  const router = useRouter();
  const { id } = router.query; // Esto te dará el valor del "id" en la URL

  // Puedes usar "id" para buscar y mostrar los detalles del usuario correspondiente
  // Por ejemplo, haciendo una solicitud a la base de datos o utilizando un contexto de datos

  useEffect(() => {
    // Aquí puedes cargar los detalles del usuario basados en el ID
    // Puedes usar el valor de "id" para realizar consultas específicas a la base de datos
    
  }, [id]);

  return (
    <ProtectedRoute>
      {/* Aquí mostrarás los detalles del usuario */}
      <h1>ID del Usuario: {id}</h1>
      {/* ...otros detalles del usuario */}
    </ProtectedRoute>
  );
}

export default UserDetails;
