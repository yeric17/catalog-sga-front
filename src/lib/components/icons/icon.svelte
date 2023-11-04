<script lang="ts">
	import CatalogIcon from "./catalog-icon.svelte";
	import PrintIcon from "./print-icon.svelte";
import UsersIcon from "./users-icon.svelte";

    export let size:'sm'|'md'|'lg' = 'lg'
    export let type:IconType = 'users'

    type IconType ='print'|'users'|'catalog'
    
</script>
<span class="icon {size}">
    {#if type === 'users'}
        <UsersIcon></UsersIcon>
    {:else if  type === 'catalog'}
        <CatalogIcon></CatalogIcon>
    {:else if type === 'print'}
        <PrintIcon></PrintIcon>
    {:else}
        <UsersIcon></UsersIcon>
    {/if}
</span>
