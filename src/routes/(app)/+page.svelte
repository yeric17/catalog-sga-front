<script lang="ts">
	import CardSection from "$lib/components/layout/card-section.svelte";
	import Table from "$lib/components/tables/table.svelte";
	import TableRowHeader from "$lib/components/tables/table-row-header.svelte";
	import TableCellHeader from "$lib/components/tables/table-cell-header.svelte";
	import TableRow from "$lib/components/tables/table-row.svelte";
	import TableCell from "$lib/components/tables/table-cell.svelte";
	import ProductType from "$lib/components/products/product-type.svelte";
	import Pictogram from "$lib/components/products/pictogram.svelte";
	import type { PictogramCode, Product, ProtectiveCode } from "$lib/types";
	import PictogramCollection from "$lib/components/products/pictogram-collection.svelte";
	import Icon from "$lib/components/icons/icon.svelte";
	import ProtectiveEquipment from "$lib/components/products/protective-equipment.svelte";
	import ProtectiveEquipmentCollection from "$lib/components/products/protective-equipment-collection.svelte";
	import { onMount } from "svelte";
	import { GetProducts } from "../../services/products/get-products";
	import Search from "$lib/components/forms/search.svelte";


	let products:Product[] = []
	onMount(()=>{
		products = GetProducts()
	})
</script>

<CardSection title="Catálogo de Reactivos y Soluciones">
	<div class="table-actions">
		<Search></Search>
	</div>
	<Table>
		<svelte:fragment slot="header">
			<TableRowHeader canSelected={false}>
				<TableCellHeader>Código</TableCellHeader>
				<TableCellHeader>Nombre</TableCellHeader>
				<TableCellHeader>Tipo</TableCellHeader>
				<TableCellHeader>Lugar</TableCellHeader>
				<TableCellHeader>Marca</TableCellHeader>
				<TableCellHeader>Pictogramas</TableCellHeader>
				<TableCellHeader>Proveedor</TableCellHeader>
				<TableCellHeader>Unidades</TableCellHeader>
				<TableCellHeader>Elementos de protección</TableCellHeader>
				<TableCellHeader>Acciones</TableCellHeader>
			</TableRowHeader>
		</svelte:fragment>
		<svelte:fragment slot="body">
			{#each products as product}
				<TableRow canSelected={false}>
					<TableCell>{product.code}</TableCell>
					<TableCell>{product.name}</TableCell>
					<TableCell>
						<ProductType type={product.type}/>
					</TableCell>
					<TableCell>{product.location}</TableCell>
					<TableCell>{product.brand}</TableCell>
					<TableCell>
						<PictogramCollection pictograms={product.pictograms}></PictogramCollection>
					</TableCell>
					<TableCell>{product.supplier}</TableCell>
					<TableCell>2</TableCell>
					<TableCell>
						<ProtectiveEquipmentCollection protectiveEquipments={product.protections}></ProtectiveEquipmentCollection>
					</TableCell>
					<TableCell>
					</TableCell>
				</TableRow>
			{/each}
		</svelte:fragment>
	</Table>
</CardSection>