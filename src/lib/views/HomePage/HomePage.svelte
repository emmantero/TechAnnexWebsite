<script lang="ts">
	import * as HomePageAssets from '../../assets/HomePage-Assets/homepage-assets.svelte';
	import './style.css';

	let headerTitle = 'Sustainable Tech Solutions';
	let headerSubTitle = 'Empowering  Communities Through';
	let headerSpecialText = 'E-Waste Recycling';

	let text = "Find a Collection Event Near You";
</script>

<main class="main-page-content">
	<!-- LANDING PAGE SECTION -->
	<section class="landing-page">
		<div class="floating-box-foo" id="actions">
			<!-- = -->
			<div class="upper">
				<h1>{headerTitle}</h1>
				<div class="upper-p">
					<p>{headerSubTitle}</p>
					<p>{headerSpecialText}</p>
				</div>
				<div class="upper-button">
					<button class="header-btn">
						<p class="header-btn-text">{text}</p>
					</button>
				</div>
			</div>

			<!-- = -->
			<!-- <div class="lower">
				<button id="action-1">
					<p>Find a Collection Event Near You</p>
					<span class="button-effect" id="mask"></span>
					<span class="button-effect" id="bg"></span>
				</button>
				
				<button id="action-2">
					<p>Action 2</p>
					<span class="button-effect" id="mask"></span>
					<span class="button-effect" id="bg"></span>
				</button>
			</div> -->
		</div>
		<!-- = -->
		<!-- <div class="floating-box-foo" id="logo">
			<img src="" alt="logo element here" class="floating-logo" />
		</div> -->
		<!-- = -->
		<img src={HomePageAssets.HomePageHeader} alt="" srcset="" class="landing-page-bg" />
	</section>
	<!-- LANDING PAGE SECTION -->

	<!-- SUMMARY OF ABOUT US OR INTRODUCTION -->
	<section class="summary">


		<div class="content" style="flex-direction: row;">
			<div class="homepage-intro">
				<div class="homepage-quote">
					<img src={HomePageAssets.Quote} alt="" srcset="" class="" />
				</div>
				<div class="homepage-text">
					<h1>
						At <b>TechAnnex</b>, we are dedicated to promoting responsible <br> e-waste recycling by hosting community-driven collection <br> events and fostering environmental awareness. 
					</h1>
				</div>
			</div>
		</div>



		<div class="content" style="flex-direction: row;">
			<div class="keyHighlights-container">
				<div class="keyHighlights-title">
					<h1>Key Highlights</h1>
				</div>

				<div class="keyHighlights-carousel">
					<div class="carousel-slide">
						
					</div>
				</div>
			</div>
		</div>




		<div class="content" style="flex-direction: row;">
			<div class="left-box">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="" alt="Object image here" class="summary-img" />
				<span class="border" id="el1"></span>
				<span class="border" id="el2"></span>
			</div>
			<div class="right-box">
				<h1>Business summary here!</h1>
				<p class="section-typography">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo doloremque, architecto
					necessitatibus dignissimos, totam animi saepe enim accusamus modi cupiditate quisquam.
					Atque, corporis nihil.
				</p>
			</div>
		</div>
	</section>
	<!-- SUMMARY OF ABOUT US OR INTRODUCTION -->

	<!-- VISUALS -->
	<!-- VISUALS -->

	<!-- CALL TO ACTION -->
	<!-- CALL TO ACTION -->
</main>
