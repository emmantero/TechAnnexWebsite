<script lang="ts">

	// IMPORTING ABOUT US PAGE ASSETS
	import * as AboutUsAssets from '../../assets/About-Us-Assets/about-us-assets.svelte'; 
	// IMPORTING CSS
	import './style.css';

	let aboutUsHeaderTitle1 = 'We are';
	let aboutUsHeaderTitle2 = 'TechAnnex';
	let aboutUsHeaderText = 'At TechAnnex, we make e-waste recycling easy, secure and impactful.';

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
</main>
