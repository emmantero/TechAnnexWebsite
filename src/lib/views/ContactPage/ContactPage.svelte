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
			<div class="box">

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


		<div class="grid">
			<div class="box">
				
			</div>

		</div>
	</div>
</div>
