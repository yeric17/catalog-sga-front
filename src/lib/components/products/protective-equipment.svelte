
<script lang="ts">
	import type { ProtectiveCode, StyleSize } from "$lib/types";

    export let size:StyleSize = 'sm'
    export let protection:ProtectiveCode = 'EQ1'

    const protectiveEquipent:any = {
        'EQ1':'gafas.png',
        'EQ2':'guantes.png',
        'EQ3':'mascara.png',
        'EQ4':'botas.png',
    }
</script>

<img class="equipment {size}" src="assets/images/protection/{protectiveEquipent[protection]}" alt="equipo">

<style>
    .equipment{
        --picto-width: 24px;
        display: inline-flex;
        width: var(--picto-width);
    }
    .equipment.sm{
        --picto-width: 30px;
    }
    .equipment.md{
        --picto-width: 48px;
    }
    .equipment.lg{
        --picto-width: 86px;
    }
</style>