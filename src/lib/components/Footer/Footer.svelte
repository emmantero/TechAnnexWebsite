<script lang="ts">
	import { controllers } from '$lib/routing/routeController.svelte';
	import * as index from '$lib';
	import './style.css';
	import { onMount } from 'svelte';

	// IMPORT FOOTER ASSETS
	import * as FooterAssets from '../../assets/Footer-Assets/footer-assets.svelte';

	let { routes } = $props();
	let message = 'Add your message here!';
	let highlight = 'This is a highlight message of this website.';
	let loadIn = $state(false);
	onMount(() => {
		setTimeout(() => {
			loadIn = true;
		}, 50);
	});
</script>

{#if loadIn}
	<footer class="page-footer">
		
		<div class="btm-text">
			<p id="">@2025 TechAnnex</p>
		</div>
	</footer>
{/if}
