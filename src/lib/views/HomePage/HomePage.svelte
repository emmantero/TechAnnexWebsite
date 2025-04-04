<script lang="ts">
	import * as HomePageAssets from '../../assets/HomePage-Assets/homepage-assets.svelte';
	import './style.css';

	let headerTitle = 'Sustainable Tech Solutions';
	let headerSubTitle = 'Empowering  Communities Through';
	let headerSpecialText = 'E-Waste Recycling';

	let text = "Find a Collection Event Near You";

	import { controllers } from '$lib/routing/routeController.svelte';
	import * as index from '$lib';
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
					<button 
						class="header-btn"
						onclick={() => {
							controllers.RouteTo("events");
							index._setAnchorToActive("events_id");
						}}
						id={"events_id"}
						name={"events"}
					>
						<p class="header-btn-text">{text}</p>
					</button>
				</div>
			</div>
			<!-- = -->
		</div>
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

						<div class="carousel-card">
							<div class="carousel-image">
								<img src={HomePageAssets.Electronics} alt="" srcset="" />
							</div>
							<div class="carousel-text">
								<h2>
									1.5 Million Pounds of <br> Electronic Diverted <br> from Landfills!
								</h2>
							</div>
						</div>

						<div class="carousel-card">
							<div class="carousel-image">
								<img src={HomePageAssets.Partneering} alt="" srcset="" />
							</div>
							<div class="carousel-text">
								<h2>
									Partnering with <br> Churches, Schools & <br> Non-Profits
								</h2>
							</div>
						</div>

						<div class="carousel-card">
							<div class="carousel-image">
								<img src={HomePageAssets.CollectionEvent} alt="" srcset="" />
							</div>
							<div class="carousel-text">
								<h2>
									Join our Next Collection <br> Event!
								</h2>
							</div>
						</div>

						<div class="carousel-card">
							<div class="carousel-image">
								<img src={HomePageAssets.Electronics} alt="" srcset="" />
							</div>
							<div class="carousel-text">
								<h2>
									1.5 Million Pounds of <br> Electronic Diverted <br> from Landfills!
								</h2>
							</div>
						</div>

						<div class="carousel-card">
							<div class="carousel-image">
								<img src={HomePageAssets.Partneering} alt="" srcset="" />
							</div>
							<div class="carousel-text">
								<h2>
									Partnering with <br> Churches, Schools & <br> Non-Profits
								</h2>
							</div>
						</div>

						<div class="carousel-card">
							<div class="carousel-image">
								<img src={HomePageAssets.CollectionEvent} alt="" srcset="" />
							</div>
							<div class="carousel-text">
								<h2>
									Join our Next Collection <br> Event!
								</h2>
							</div>
						</div>
						

					</div>
					

					

					
				</div>
			</div>
		</div>


		<div class="content" style="flex-direction: row;">
			<div class="upcomingEvents-container">
				<div class="upcomingEvents-title">
					<h1>Upcoming Events</h1>
				</div>

				<div class="upcomingEvents-carousel">

					<div class="events-carousel-slide">
	
						<div class="events-carousel-card">
							<img src={HomePageAssets.Dec19} alt="" srcset="" />
							<img src={HomePageAssets.Feb23} alt="" srcset="" />
							<img src={HomePageAssets.Apr9} alt="" srcset="" />
						</div>
						
	
					</div>
	
				</div>
			</div>

		</div>

		
	</section>
	<!-- SUMMARY OF ABOUT US OR INTRODUCTION -->

	<!-- VISUALS -->
	<!-- VISUALS -->

	<!-- CALL TO ACTION -->
	<!-- CALL TO ACTION -->
</main>
