<script lang="ts">
	import { ProductTypeCode } from "$lib/types";

    export let type:ProductTypeCode = 1


</script>


<span 
    class="badge" 
    class:reactive={type === ProductTypeCode.Reactive} 
    class:solution={type === ProductTypeCode.Solution}>
    {#if type === ProductTypeCode.Reactive}
    Reactivo
    {:else if type === ProductTypeCode.Solution}
    Solución
    {/if}
</span>

<style>
    .badge{
        --badge-bg-color: var(--color-primary);
        --badge-color: var(--color-gray-6);
        background-color: var(--badge-bg-color);
        border-radius: 999px;
        display: inline-flex;
        padding-block: .2rem;
        font-size: var(--font-size-sm);
        padding-inline: .5rem;
        color: var(--badge-color);
    }
    .badge.reactive{
        --badge-bg-color: var(--color-secondary);
    }
    .badge.solution{
        --badge-bg-color: var(--color-primary);
    }
</style>