<script lang="ts">
	import './style.css';

	// IMPORTING CONTACT US  ASSETS
	import * as ContactUsAssets from '../../assets/Contact-Us-Assets/contact-us-assets.svelte';
</script>

<div class="contacts-page">
	<div class="content">
		<h1>Contact us!</h1>
		<form class="grid">
			<div class="box">
				<div class="techAnnexImg-container">
					<img id="" src={ContactUsAssets.WeAreTechAnnex} alt="" srcset="" class="" />
				</div>
			</div>
			<div class="box form-box">

				<div class="form-text">
					<h2>Help us to reach you!</h2>
				</div>
				
				<div class="row">
					<div class="cell">
						<input type="name" id="email" name="name" placeholder="Full Name" />
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<input type="email" id="email" name="email" placeholder="Your email address" />
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<textarea id="message" name="message" placeholder="Your message here!"></textarea>
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<button type="submit">
							<p>Submit</p>
							<span class="button-effect" id="mask"></span>
							<span class="button-effect" id="bg"></span>
						</button>
					</div>
				</div>
			</div>
		</form>


		<div class="map-grid">
			<div class="map-box">
				<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.8135230820594!2d-117.68190569999999!3d33.66199339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce9d1cbcbb157%3A0x4c8e82010295599a!2s241%20Siena%2C%20Lake%20Forest%2C%20CA%2092630%2C%20USA!5e0!3m2!1sen!2sph!4v1743386460904!5m2!1sen!2sph" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
				<div class="map-container-foo">
					<a
					  href="https://maps.app.goo.gl/xDURxbuVRzmJSZBn6"
					  draggable="false"
					  target="_blank"
					>
					  <h3 id="maps-text-indicator-open">Open in Google Maps</h3>
					  <img draggable="false" src={ContactUsAssets.MapImage} alt="" />
					</a>
				  </div>
			</div>

			<div class="map-box">
				<h1>You may also contact us at:</h1>

				<div class="map-box-text">
					<p>edgar.reyes@techannexcorp.net</p>
					<p>techannexcorp.net</p>
					<p>241 Siena, Lake Forest, CA 92630</p>
				</div>
			</div>
		</div>
	</div>
</div>
