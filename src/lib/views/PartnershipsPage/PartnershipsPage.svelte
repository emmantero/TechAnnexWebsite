<script lang="ts">

    // IMPORTING PARTNERSHIPS PAGE ASSETS
	import * as PartnershipsAssets from '../../assets/Partnerships-Assets/partnerships-assets.svelte'; 

    // IMPORTING CSS
	import './style.css';

    let ourPartners = 'Our Partners';

</script>

<main class="partnerships">

    <section class="partnership-content">

        <div class="ourPartners-container">

            <div class="ourPartners-text">
                <div class="ourPartners-title">
                    <h1>{ourPartners}</h1>
                </div>
                <div class="ourPartners-paragraph">
                    <p>TechAnnex proudly partners with a network of certified recycleres, local organizations and retail locations to bring our e-waste recycling initiatives to life.</p>
                </div>
            </div>

            <div class="partners-container">

                <div class="partners-card">
                    <div class="container">
                        <img src={PartnershipsAssets.Recycling} alt="" srcset="" class="image" />
                        <div class="overlay">
                          <div class="text">Our recyclers are vetted and certified to ensure br 
                            proper handling, data destruction, and environmental compliance for all collected e-waste.</div>
                        </div>
                    </div>

                    <div class="partners-text">
                        <h2>State-Certified <br>Recyclers</h2>
                    </div>
                </div>


                <div class="partners-card">
                    <div class="container">
                        <img src={PartnershipsAssets.Labdoo} alt="" srcset="" class="image" />
                        <div class="overlay">
                          <div class="text">Together, we give recycled laptops a second life, empowering over 800,000 students worldwide with access to technology and digital education.</div>
                        </div>
                    </div>
                    <div class="partners-text">
                        <h2>Labdoo <span>Non-Profit <br>Organization</span></h2>
                    </div>
                </div>


                <div class="partners-card">
                    <div class="container">
                        <img src={PartnershipsAssets.B2C} alt="" srcset="" class="image" />
                        <div class="overlay">
                          <div class="text">We collaborate with retail stores that generously provide space in their parking lots to host weekend recycling events, attracting 400-500 participants per event and reinforcing their brand's green initiatives.</div>
                        </div>
                    </div>
                    <div class="partners-text">
                        <h2>Retail Hosts</h2>
                    </div>
                </div>


                <div class="partners-card">
                    <div class="container">
                        <img src={PartnershipsAssets.Community} alt="" srcset="" class="image" />
                        <div class="overlay">
                          <div class="text">Schools, churches, and non-profits benefit from increased foot traffic, community visibility, and environmental credibility—all while supporting a cleaner planet.</div>
                        </div>
                    </div>
                    <div class="partners-text">
                        <h2>Community <br>Beneficiaries</h2>
                    </div>
                </div>


            </div>

            <div class="ourPartners-statement">
                <p>We only partner with Authorized E-Waste Recycler for the State</p>
            </div>

        </div>

        <div class="whyPartnerWithUs-container">
            <div class="whyPartnerWithUs-title">
                <h1>Why partner with us?</h1>
            </div>

            <form class="grid">
                <div class="box">
                    <div class="benefits-container">
                        <!-- <img id="" src={ContactUsAssets.WeAreTechAnnex} alt="" srcset="" class="" /> -->
                        <div class="benefits-title">
                            <h1>Receive enhanced benefits!</h1>
                        </div>

                        <div class="benefits-list">
                            <div class="benefits-item">
                                <img src={PartnershipsAssets.CheckMark} alt="" srcset="" class="checkmarkImg" /> 
                                <p>Gain valuable community exposure</p>
                            </div>
                        </div>
                        <div class="benefits-list">
                            <div class="benefits-item">
                                <img src={PartnershipsAssets.CheckMark} alt="" srcset="" class="checkmarkImg" /> 
                                <p>Increased foot traffic (~400-500 participants per event)</p>
                            </div>
                        </div>
                        <div class="benefits-list">
                            <div class="benefits-item">
                                <img src={PartnershipsAssets.CheckMark} alt="" srcset="" class="checkmarkImg" /> 
                                <p>Recognition for supporting environmental sustainability initiatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box">
    
                    <div class="form-text">
                        <h2>Be our partner today!</h2>
                    </div>
                    
                    <div class="row">
                        <div class="cell">
                            <input type="name" id="email" name="name" placeholder="Full Name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <input type="text" id="phone" name="contact number" placeholder="Contact Number" />
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


        </div>

    </section>

</main>