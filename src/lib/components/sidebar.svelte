<aside class="sidebar">
    <header class="header">
        <slot name="header"></slot>
    </header>
    <section class="nav-container">
        <nav>
            <slot name="nav"></slot>
        </nav>
    </section>
    <footer>
        <slot name="footer"></slot>
    </footer>
</aside>

<style>
    .sidebar{
        height: 100%;
        display: grid;
        grid-template-rows: auto auto 1fr;
        justify-items: center;
        padding: 1rem .25rem;
        background-color: var(--color-gray-6);
        box-shadow: var(--shadow-lv-2);
        position: relative;
        z-index: 10;
    }
    .header{
        display: grid;
        justify-items: center;
        row-gap: .5rem;
        padding-bottom: 1rem;
        border-bottom: 1.5px solid var(--color-primary-light);
    }
    .nav-container{
        padding-top: 1rem;
    }
    
</style>