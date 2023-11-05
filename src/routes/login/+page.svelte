<script lang="ts">
	import Button from "$lib/components/buttons/button.svelte";
    import FieldForm from "$lib/components/forms/field-form.svelte";

</script>
<section class="login-page">
    <main>
        <form class="login-form">
            <header>
                <h1 class="login-title">Login</h1>
            </header>
            <div class="fields-group">
                <FieldForm>Email</FieldForm>
                <FieldForm type='password'>Contraseña</FieldForm>
                <a href="/account/forgot-pass">¿Olvido la contraseña?</a>
            </div>
            <div class="form-buttons">
                <Button style="primary" full>Login</Button>
            </div>
        </form>
    </main>    
</section>

<style>
    .login-page{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: var(--color-primary-darker);
    }
    .login-form {
        display: grid;
        gap: 1rem;
        padding: 1.5rem;
        min-width: 18rem;
        border: 2px solid var(--color-secondary-light);
        border-radius: 8px;
        aspect-ratio: 4/5;
        background-color: #fff;
    }
    .login-title{
        color: var(--color-secondary-dark);
        font-size: 28px;
    }
</style>