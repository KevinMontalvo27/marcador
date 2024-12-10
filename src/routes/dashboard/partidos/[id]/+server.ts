import { json } from '@sveltejs/kit';
import { supabase } from '../../../../supabaseClient'; // Ajusta la ruta según tu estructura
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
  const { id } = params; // Captura el parámetro dinámico de la URL

  // Consulta a Supabase con un filtro por ID
  const { data, error } = await supabase
    .from('Partidos') // Nombre exacto de la tabla
    .select('*') // Selecciona todas las columnas necesarias
    .eq('id', id) // Filtra por el ID del partido
    .single(); // Asegura que solo obtienes un único partido

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json({partido: data }|| null);
};
