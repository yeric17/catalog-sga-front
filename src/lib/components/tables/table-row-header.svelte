<script lang="ts">
	import Checkbox from "../forms/checkbox.svelte";
	import TableCellHeader from "./table-cell-header.svelte";

    export let canSelected:boolean = false
</script>

<tr>
    {#if canSelected}
        <TableCellHeader>
            <Checkbox></Checkbox>
        </TableCellHeader>
    {/if}
    <slot></slot>
</tr>