<script lang="ts">
	import './style.css';

	// IMPORTING CONTACT US  ASSETS
	import * as ContactUsAssets from '../../assets/Contact-Us-Assets/contact-us-assets.svelte';

	
	import { onMount } from 'svelte';
	import { successful, applyNow } from "../../../../src/stores";
	import { toggleActive } from '../../../scripts/navButtons';

	let url: string;
    onMount(() => {
        toggleActive;
        url = location.href;
    });
    
    const regex = "^(09|+639)d{9}$";
    const apiKey = "1d1d185e-e597-45a9-97b7-01a90d9809fd";
    const POST = "POST";
    const inputEmailID = "email-input-id";
    const phoneID = "buyi4c-32iy4g2c37cv428-cv29-b83c472c9b78xbn-43ertyu";
    const emailID = "09fajsd-fj32745h0927ehn7ch390-djmu0sim3u80-nn2345678";
    const addressID = "af9n4cv-578y02tx7b0483-347b-cv837495bcv3948-7k76iyjgh";

    $: Name = "";
    $: Email = "";
    $: Phone = "";
    $: Subject = "";
    $: Message = "";

	function ToggleApply() {
        $applyNow = !$applyNow;
    }

</script>

<div class="contacts-page">
	<div class="content">
		<h1>Contact us!</h1>
		<form class="grid" action="https://api.web3forms.com/submit" method={POST}>
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
						<input
							type="text"
							placeholder="Your name"
							name="name"
							bind:value={Name}
							id="your-name"
							required
						/>
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<input
							type="email"
							placeholder="Email address"
							name="email"
							bind:value={Email}
							id="{inputEmailID}required"
						/>
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<textarea name="Message" id="message" placeholder="Message" bind:value={Message} required
            			></textarea>
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<button 
						on:click={() => {
							if (
							  Name != "" &&
							  Email != "" &&
							  Message != ""
							 ){
							  ToggleApply();
							  $successful = true;
							 }
						  }}
						type="submit">
							<p>Submit</p>
							<span class="button-effect" id="mask"></span>
							<span class="button-effect" id="bg"></span>
						</button>
					</div>
					<input type="hidden" name="apikey" value={apiKey} />
					<input type="hidden" name="redirect" value={url}>
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
