<script lang="ts">
    export let src:string = 'https://i.pravatar.cc/150?img=32'
    export let size:'sm'|'md'|'lg' = 'lg'
</script>

<div class="avatar {size}">
    <img class="avatar-img" src="{src}" alt="avatar">
</div>

<style>
    .avatar{
        --size-lg: 48px;
        --size-md: 28px;
        --size-sm: 16px;
        padding: 2px;
        background: var(--gradient-primary);
        border-radius: 999px;
    }

    .avatar.lg{
        width: var(--size-lg);
    }
    .avatar.md{
        width: var(--size-md);
    }
    .avatar.sm{
        width: var(--size-sm);
    }
    .avatar-img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        border-radius: 999px;
    }
</style>