
<script lang="ts">
	import Button from "../buttons/button.svelte";

    export let placeholder:string = 'Buscar...'
    export let id:string = 'searchInput'
</script>
<form class="search">
    <input type="text" class="search-input" placeholder="{placeholder}" id={id}>
    <Button type='button' style='primary'>
        
    </Button>
</form>