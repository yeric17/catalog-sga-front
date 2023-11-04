<script lang="ts">
	import type { ProtectiveCode } from "$lib/types";
	import ProtectiveEquipment from "./protective-equipment.svelte";



    export let protectiveEquipments:ProtectiveCode[] = []
</script>


<div class="pictograms-list">
    {#each protectiveEquipments as equip}
        <ProtectiveEquipment protection={equip}></ProtectiveEquipment>
    {/each}
</div>


<style>
    .pictograms-list{
        display: flex;
        gap: .25rem;
        align-items: center;
    }
</style>