import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const { id } = params; // Obtén el ID dinámico de la URL

  // Realiza la solicitud al endpoint
  const response = await fetch(`/dashboard/partidos/${id}`);
  
  if (!response.ok) {
    throw new Error(`Error al cargar los datos del partido: ${response.statusText}`);
  }

  // Parsear los datos devueltos por el endpoint
  const { partido } = await response.json();

  // Retorna los datos al componente
  return { partido };
};
