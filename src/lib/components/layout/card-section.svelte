<script lang="ts">
    export let title = 'Un titulo'
</script>

<article class="card-section">
    <h2 class="section-title">{title}</h2>
    <div class="content">
        <slot></slot>
    </div>
</article>

<style>
    .card-section{
        background-color: var(--color-gray-6);
        border-radius: 8px;
        padding-inline: 1.5rem;
        padding-block: .8rem;
        box-shadow: var(--shadow-lv-1);
    }
    .section-title {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
        padding-bottom: 1rem;
    }
</style>