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
    };
  </script>
  
  <h1>Detalles del Partido</h1>
  
  {#if data.partido}
    <p>Fecha: {new Date(data.partido.fecha).toLocaleDateString()}</p>
    <p>Lugar: {data.partido.lugar}</p>
    <p>Puntos Local: {data.partido.puntos_local}</p>
    <p>Puntos Visitante: {data.partido.puntos_visitante}</p>
  {:else}
    <p>No se encontraron datos para este partido.</p>
  {/if}
  