<script lang="ts">
    import {page} from '$app/stores'
	import Avatar from "$lib/components/avatar.svelte";
	import Icon from "$lib/components/icons/icon.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";

</script>
<Sidebar>
    <svelte:fragment slot="header">
        <img class="header-logo" src="assets/images/lass-icon.png" alt="logo"/>
        <Avatar size="md"/>
    </svelte:fragment>
    <svelte:fragment slot="nav">
        <ul class="nav-list">
            <li class="nav-item">
                <a class="nav-link" href="/" class:active={$page.url.pathname ==='/'}>
                    <Icon type="catalog"></Icon>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/prints" class:active={$page.url.pathname.includes('/prints')}>
                    <Icon type="print"></Icon>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/users" class:active={$page.url.pathname.includes('/users')}>
                    <Icon type="users"></Icon>
                </a>
            </li>
        </ul>
    </svelte:fragment>
</Sidebar>

<style>
    .header-logo{
        width: 44px;
    }
    .nav-list{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
    }
    .nav-item{
        list-style: none;
    }
    .nav-link{
        --nav-link-color: var(--color-primary);
        color: var(--nav-link-color);
    }

</style>
