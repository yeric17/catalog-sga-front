<script lang="ts">
    import MainSidebar from "$lib/components/main-sidebar.svelte";
</script>

<div class="app">
    <MainSidebar></MainSidebar>
    <main class="main">
        <slot></slot>
    </main>
</div>

<style>
    .app{
        display: grid;
        grid-template-columns: auto 1fr;
        min-height: 100vh;
        background-color: var(--color-gray-5);
    }
    .main{
        padding: 1.5rem;
    }
</style>