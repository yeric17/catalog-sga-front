<script lang="ts">
	import Checkbox from "../forms/checkbox.svelte";
import TableCell from "./table-cell.svelte";

    export let canSelected:boolean = false
</script>

<tr>
    {#if canSelected}
    <TableCell>
        <Checkbox></Checkbox>
    </TableCell>
    {/if}
    <slot></slot>
</tr>