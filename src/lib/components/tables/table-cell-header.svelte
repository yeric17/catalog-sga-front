<th class="table-cell-header">
    <slot></slot>
</th>

<style>
    .table-cell-header{
        text-align: left;
        padding: .25rem;
        padding-inline: .5rem;
        border-color: var(--color-gray-4);
        border-style: solid;
        border-width: 0;
        border-top-width: 1px;
        /* border-bottom-width: 1px; */
        border-right-width: 1px;
        background-color: var(--color-gray-5);
    }

    .table-cell-header:first-child{
        border-left-width: 1px;
    }
    .table-cell-header:last-child{
        border-top-right-radius: 6px;
        
    }
    .table-cell-header:first-child{
        border-top-left-radius: 6px;
    }
</style>