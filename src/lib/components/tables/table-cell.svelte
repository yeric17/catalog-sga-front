<td class="table-cell">
    <slot></slot>
</td>

<style>
    .table-cell{
        text-align: left;
        padding: .25rem;
        padding-inline: .5rem;
        border-color: var(--color-gray-5);
        border-style: solid;
        border-width: 0;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-right-width: 1px;
        background-color: var(--color-gray-6);
    }

    .table-cell:first-child{
        border-left-width: 1px;
    }
</style>