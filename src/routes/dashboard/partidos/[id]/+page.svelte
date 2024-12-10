<script lang="ts">
  export let data: {
    partido: {
      id: string;
      fecha: string;
      equipo_local_id: number;
      equipo_visitante_id: number;
      puntos_local: number;
      puntos_visitante: number;
      lugar: string;
    };
    stats: Array<{
      id: number;
      jugador_id: number;
      puntos: number;
      faltas: number;
      tiros_libres_anotados: number;
      tiros_libres_fallados: number;
      id_equipo: number;
    }>;
    equipos: Array<{
      id: number;
      nombre: string;
      organizacion: string;
    }>;
    jugadores: Array<{
      id: number;
      equipo_id: number;
      nombre: string;
      dorsal: number;
      posicion: string;
    }>;
  };
</script>

<h1 class="text-3xl font-bold text-center mt-6 text-white">Detalles del Partido</h1>
<!-- Información General -->
<div class="card mt-10 max-w-6xl mx-auto shadow-md rounded-lg p-6 text-white">
  <h3 class="text-lg font-semibold">Información del Partido</h3>
  <p><span class="font-semibold">Fecha:</span> {new Date(data.partido.fecha).toLocaleDateString()}</p>
  <p><span class="font-semibold">Lugar:</span> {data.partido.lugar}</p>
</div>

<!-- Información del Partido -->
<div class="grid grid-cols-2 gap-4 max-w-6xl mx-auto mt-6">
  <!-- Equipo Local -->
  <div class="bg-blue-50 rounded-lg p-6 shadow-md">
    <h2 class="text-2xl font-bold text-blue-600 mb-4 text-center">
      {data.equipos.find(equipo => equipo.id === data.partido.equipo_local_id)?.nombre || "Equipo Local"}
    </h2>
    <p class="text-gray-600 text-center">
      <span class="font-semibold">Puntos:</span> {data.partido.puntos_local}
    </p>
    <h3 class="text-xl font-semibold text-blue-500 mt-4 mb-2">Jugadores</h3>
    {#if data.stats.filter(stat => stat.id_equipo === data.partido.equipo_local_id).length > 0}
      <ul class="space-y-2">
        {#each data.stats.filter(stat => stat.id_equipo === data.partido.equipo_local_id) as stat}
          {#each data.jugadores.filter(jugador => jugador.id === stat.jugador_id) as jugador}
            <li class="bg-white p-4 rounded shadow">
              <p class="text-gray-700">
                <span class="font-semibold">Nombre:</span> {jugador.nombre}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Posición:</span> {jugador.posicion}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Dorsal:</span> {jugador.dorsal}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Puntos:</span> {stat.puntos}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Faltas:</span> {stat.faltas}
              </p>
            </li>
          {/each}
        {/each}
      </ul>
    {:else}
      <p class="text-gray-500">No hay estadísticas para los jugadores locales.</p>
    {/if}
  </div>

  <!-- Equipo Visitante -->
  <div class="bg-red-50 rounded-lg p-6 shadow-md">
    <h2 class="text-2xl font-bold text-red-600 mb-4 text-center">
      {data.equipos.find(equipo => equipo.id === data.partido.equipo_visitante_id)?.nombre || "Equipo Visitante"}
    </h2>
    <p class="text-gray-600 text-center">
      <span class="font-semibold">Puntos:</span> {data.partido.puntos_visitante}
    </p>
    <h3 class="text-xl font-semibold text-red-500 mt-4 mb-2">Jugadores</h3>
    {#if data.stats.filter(stat => stat.id_equipo === data.partido.equipo_visitante_id).length > 0}
      <ul class="space-y-2">
        {#each data.stats.filter(stat => stat.id_equipo === data.partido.equipo_visitante_id) as stat}
          {#each data.jugadores.filter(jugador => jugador.id === stat.jugador_id) as jugador}
            <li class="bg-white p-4 rounded shadow">
              <p class="text-gray-700">
                <span class="font-semibold">Nombre:</span> {jugador.nombre}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Posición:</span> {jugador.posicion}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Dorsal:</span> {jugador.dorsal}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Puntos:</span> {stat.puntos}
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">Faltas:</span> {stat.faltas}
              </p>
            </li>
          {/each}
        {/each}
      </ul>
    {:else}
      <p class="text-gray-500">No hay estadísticas para los jugadores visitantes.</p>
    {/if}
  </div>
</div>  
