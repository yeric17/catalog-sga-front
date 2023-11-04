<script lang="ts">
    export let name:string = ''
</script>


<label class="checkbox-wrapper">
    <span class="checkbox-label">
        <slot></slot>
    </span>
    <input class="checkbox-input" type="checkbox" name="{name}">
</label>

<style>
    
</style>