<script lang="ts">
	
</script>


<table class="table">
    <thead class="table-header">
        <slot name="header"></slot>
    </thead>
    <tbody class="table-body">
        <slot name="body"></slot>
    </tbody>
</table>

<style>
    .table{
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }
    
</style>