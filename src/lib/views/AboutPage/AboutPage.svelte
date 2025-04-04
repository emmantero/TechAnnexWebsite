<script lang="ts">

	// IMPORTING ABOUT US PAGE ASSETS
	import * as AboutUsAssets from '../../assets/About-Us-Assets/about-us-assets.svelte'; 
	// IMPORTING CSS
	import './style.css';

	let aboutUsHeaderTitle1 = 'We are';
	let aboutUsHeaderTitle2 = 'TechAnnex';
	let aboutUsHeaderText = 'At TechAnnex, we make e-waste recycling easy, secure and impactful.';

	import { controllers } from '$lib/routing/routeController.svelte';
	import * as index from '$lib';

</script>

<main class="about-content">
	<!-- <div class="aboutUs-header">
		<img src={AboutUsAssets.Header} alt="" srcset="" />
	</div> -->
	<section class="aboutUs-header">
		<div class="floating-box-foo">
			<!-- = -->
			<div class="upper">
				<h1>{aboutUsHeaderTitle1} <span>{aboutUsHeaderTitle2}</span></h1>
				<p>{aboutUsHeaderText}</p>
			</div>
			<!-- = -->
		</div>
		<img src={AboutUsAssets.Header} alt="" srcset="" class="aboutUs-page-bg" />
	</section>

	<section class="aboutUs-summary">

		<div class="whoWeAre">
			<div class="whoWeAre-title">
				<h1>Who We Are</h1>
			</div>

			<div class="whoWeAre-card">
				<div class="whoWeAre-card-img">
					<img src={AboutUsAssets.CardImg} alt="" srcset="" class="" />
				</div>
				<div class="whoWeAre-card-desc">
					<div class="whoWeAre-card-header">
						<h1>TechAnnex has been serving the <br> community since 2007</h1>
					</div>
					<div class="whoWeAre-card-text">
						<p>
							providing reliable and secure e-waste pickup services for <br> businesses and local communities. We offer a safe and legal <br> solution to dispose of unwanted electronics while ensuring the <br> protection of sensitive data.
						</p>
					</div>
					<p class="readMoreHere">Read more here</p>
				</div>
			</div>
		</div>

		<div class="ourImpact">
			<div class="ourImpact-title">
				<h1>Our Impact</h1>
			</div>

			<div class="ourImpact-cards-container">
				<div class="ourImpact-card">
					<img src={AboutUsAssets.ImpactOne} alt="" srcset="" class="" />
				</div>
				<div class="ourImpact-card">
					<img src={AboutUsAssets.ImpactTwo} alt="" srcset="" class="" />
				</div>
			</div>
		</div>

		<div class="howWeOperate">
			<div class="howWeOperate-title">
				<h1>How We Operate</h1>
			</div>

			<div class="howWeOperate-container">
				<div class="howWeOperate-desc">
					<h1>Partnering with certified <br>recyclers to safely process <br>collected e-waste</h1>

					<p>Collaborating with community <br>organizations for event locations</p>

					<button 
						type="submit" 
						onclick={() => {
							controllers.RouteTo("partnerships");
							index._setAnchorToActive("partnerships_id");
						}}
						id={"partnerships_id"}
						name={"partnerships"}
					>
						<p>Be a Partner</p>
						<span class="button-effect" id="mask"></span>
						<span class="button-effect" id="bg"></span>
					</button>
				</div>
				<div class="howWeOperate-img">
					<img src={AboutUsAssets.Operate} alt="" srcset="" class="" />
				</div>
			</div>

		</div>

	</section>
</main>
