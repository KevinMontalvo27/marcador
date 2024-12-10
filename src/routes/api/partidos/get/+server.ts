import { json } from '@sveltejs/kit';
import { supabase } from '../../../../supabaseClient'; // Ajusta la ruta según tu estructura
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler = async () => {
  const { data, error } = await supabase
    .from('Partidos') // Nombre exacto de la tabla
    .select('*'); // Selecciona todas las columnas

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json(data || []);
};