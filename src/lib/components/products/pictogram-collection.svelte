<script lang="ts">
	import type { PictogramCode } from "$lib/types";
	import Pictogram from "./pictogram.svelte";

    export let pictograms:PictogramCode[] = []
</script>


<div class="pictograms-list">
    {#each pictograms as pictogram}
        <Pictogram pictogramCode={pictogram}></Pictogram>
    {/each}
</div>


<style>
    .pictograms-list{
        display: flex;
        gap: .25rem;
        align-items: center;
    }
</style>