<script lang="ts">
	import Button from "$lib/components/buttons/button.svelte";
    import FieldForm from "$lib/components/forms/field-form.svelte";

    let value = ''

    function SendEmail(){

    }
</script>

<main class="recover-pass-container">
    <form class="recover-pass">
        <h1>
            Recuperar contraseña
        </h1>
        <p>
            Ingrese su correo electronico para poder cambiar su contraseña
        </p>
        <div class="form-fields">
            <FieldForm type="email" bind:value={value}>
                Correo electronico
            </FieldForm>
        </div>
        <Button>
            Enviar
        </Button>
    </form>
</main>

<style>
    .recover-pass-container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: var(--color-primary-darker);
    }

    .recover-pass{
        background-color: var(--color-gray-6);
        padding: 1rem;
        border-radius: 8px;
    }

    .form-fields{
        margin-bottom: 1rem;
    }
</style>