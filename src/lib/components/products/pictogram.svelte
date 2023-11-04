<script lang="ts">
	import type { PictogramCode, StyleSize } from "$lib/types";


    export let pictogramCode:PictogramCode
    export let size:StyleSize = 'sm'

    const pictogramsImages = {
        'GHS01':'bomba.png',
        'GHS02':'llama.png',
        'GHS03':'llama-circulo.png',
        'GHS04':'botella-gas.png',
        'GHS05':'corrosion.png',
        'GHS06':'calavera.png',
        'GHS07':'exclamacion.png',
        'GHS08':'salud.png',
        'GHS09':'medio-ambiente.png',
    }

</script>


<img class="pictogram {size}" src="assets/images/pictograms/{pictogramsImages[pictogramCode]}" alt="pictogram">

<style>
    .pictogram{
        --picto-width: 24px;
        display: inline-flex;
        width: var(--picto-width);
    }
    .pictogram.sm{
        --picto-width: 30px;
    }
    .pictogram.md{
        --picto-width: 48px;
    }
    .pictogram.lg{
        --picto-width: 86px;
    }
</style>