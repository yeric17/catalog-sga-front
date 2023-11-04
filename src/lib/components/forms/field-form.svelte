<script lang="ts">
    export let id = crypto.randomUUID().replace('-','')
    export let type = 'text'
    export let full:boolean = false

    let value = ''
    function HandlerInput(event:Event){

        if(!(event.target instanceof HTMLInputElement)) return

        const input = event.target

        value = input.value
    }
</script>


<label class="field-form" class:full-w={full} class:filled={value !== ''}>
    <input 
        type="{type}" 
        id="{id}" 
        class="field-form-input" 
        autocomplete="off"
        on:input={HandlerInput}>
    <span class="field-form-label" >
        <slot></slot>
    </span>
</label>

<style>

    .field-form{

        --bg-color: white;
        margin-top: .8rem;
        display: flex;
        position: relative;
        height: 34px;
    }

    .field-form-label{
        position: absolute;
        left: .5em;
        top: 50%;
        transform: translateY(-50%);
        transition: all .3s;
        color: rgb(158, 158, 158);
        font-size: .9em;
    }

    .field-form-input{
        outline: none;
        border: 1px solid rgb(209, 209, 209);
        background-color: var(--bg-color);
        border-radius: 4px;
        padding-inline: .5em;
        width: 100%;
    }

    .field-form-input:focus + .field-form-label, .filled .field-form-label{
        top: 0;
        font-size: .8em;
    }

    .field-form-input:focus + .field-form-label::before, .filled .field-form-label::before{
        content: "";
        position: absolute;
        display: block;
        width: calc(100% + 2px);
        height: 1.5px;
        background-color: var(--bg-color);
        left: 50%;
        top: 50%;
        transform: translateY(calc(-50% + .5px)) translateX(-50%);
        z-index: -1;
    }

    .field-form.full-w{
        width: 100%;
    }

    .field-form-input:focus, .filled .field-form-input{
        border: 1px solid var(--color-secondary);
    }

</style>