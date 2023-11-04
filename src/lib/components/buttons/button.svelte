<script lang="ts">
    export let type:'button'|'submit' = 'button'
    export let style:'primary'|'secondary'|'primary-v1'|'secondary-v1' = 'primary'
    export let full:boolean = false
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<button class="btn {style}" type="{type}" class:full-w={full}>
    <slot></slot>
</button>

<style>
    .btn {
        border: none;
        background-color: var(--color-gray-6);
        padding-block: .5rem;
        padding-inline: 1rem;
        border-radius: 4px;
        transition: opacity .3s;
        box-shadow: var(--shadow-lv-1);
    }

    .btn.primary{
        background: var(--gradient-primary);
        color: var(--color-on-primary);
    }

    .btn.secondary{
        background-color: var(--color-secondary);
    }

    .btn.full-w{
        width: 100%;
    }

    .btn.primary:hover{
        opacity: .8;
    }

</style>