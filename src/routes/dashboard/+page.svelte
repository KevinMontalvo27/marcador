    <script lang="ts">
        export let data: { partidos: { id: number; idUser: number; fecha: string; equipoLocalID: number; equipoVisitanteID: number; lugar: number; puntos_local: number; puntos_visitante: number }[] };

        //console.log(data);  
    </script>   

 

    {#if data.partidos.length === 0}
    <p>No hay partidos disponibles.</p>
    {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each data.partidos as partido}
          {console.log(partido)}
          <a 
            href={`/dashboard/partidos/${partido.id}`} 
            class="card text-white p-4 rounded shadow-md hover:shadow-lg transition-shadow"
          >
            <p class="text-xl text-center font-bold mb-8">
              {new Date(partido.fecha).toLocaleDateString()}
            </p>
            <div class="flex justify-between items-center">
              <div class="text-center text-white">
                <p class="text-2xl font-bold">{partido.puntos_local}</p>
                <p class="text-sm">Local</p>
              </div>
              <div class="text-center text-white">
                <p class="text-2xl font-bold">{partido.puntos_visitante}</p>
                <p class="text-sm">Visitante</p>
              </div>
            </div>
          </a>
        {/each}
      </div>
      
    {/if}