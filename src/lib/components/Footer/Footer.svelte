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
		<div class="box-container">
			<div class="box-cont1 desktop-only">
				<div class="box">
					<div class="upper-box">
						<div class="logo-sect desktop-only">
							<h3>Company</h3>
						</div>
						<div class="footer-upperbox-buttons">
							<button
								type="submit" 
								onclick={() => {
									controllers.RouteTo("about");
									index._setAnchorToActive("about_id");
								}}
								id={"about_id"}
								name={"about"}
								class="desktop-only"
							>
								<p>About</p>
							</button>
							<!-- <button>
								<p>Certificate and Registration</p>
							</button> -->
						</div>
					</div>
				</div>
				<div class="box">
					<div class="upper-box desktop-only">
						<div class="logo-sect">
							<h3>Useful Links</h3>
						</div>
						<div class="footer-upperbox-buttons">
							<!-- <button>
								<p>Learn more about our Mission</p>
							</button> -->
							<button
								type="submit" 
								onclick={() => {
									controllers.RouteTo("events");
									index._setAnchorToActive("events_id");
								}}
								id={"events_id"}
								name={"events"}
							>
								<p>Find an Event</p>
							</button>
							<button
								type="submit" 
								onclick={() => {
									controllers.RouteTo("partnerships");
									index._setAnchorToActive("partnerships_id");
								}}
								id={"partnerships_id"}
								name={"partnerships"}
							>
								<p>Partner with Us</p>
							</button>
						</div>
					</div>
				</div>
			</div>



			<div class="box-cont2">
				<div class="right-box-container">
					<div class="right-box">
						<!-- <div class="social-icons">
							<img src={FooterAssets.Instagram} alt="" srcset="" />
							<img src={FooterAssets.Twitter} alt="" srcset="" />
							<img src={FooterAssets.Facebook} alt="" srcset="" />
						</div> -->
						<div class="languages desktop-only">
							<p>English</p>
							<p>|</p>
							<p>Mexico</p>
							<p>|</p>
							<p>France</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		

		<div class="btm-text">
			<!-- COMMENT UNTIL FURTHER NOTICE (by Emman Tero on April 14, 2025) -->
			<!-- <div class="btm-text-group">
				
				<p>Legal</p>
				<p>Privacy Center</p>
				<p>Privacy Policy</p>
				<p>Terms and Condition</p>
			</div> -->
			<p id="">@2025 TechAnnex</p>
		</div>
	</footer>
{/if}
