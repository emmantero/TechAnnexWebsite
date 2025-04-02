<script lang="ts">

	// IMPORTING ABOUT US PAGE ASSETS
	import * as EventsAssets from '../../assets/Events-Assets/events-assets.svelte'; 
	// IMPORTING CSS
	import './style.css';

	// let eventHeader1 = 'Our events have collectively ';
    // let eventHeader2 = 'saved over ';
    // let eventHeaderHighlight = 'Our events have collectively ';

    let eventHeaders = {
        first: 'Our events have collectively ',
        second: 'saved over ',
        hightlight: '1.5 million pounds of e-waste'
    }

    let eventParagraph = {
        first: 'Help us reach our goal of ',
        highlight: 'doubling ',
        second: 'this in the next 12 months!'
    }

</script>

<main class="event-content">
	<section class="events-header">
		<div class="floating-box-foo">
			<!-- = -->
			<div class="upper">
				<div class="upper-h1">
                    <h1>{eventHeaders.first}</h1>
                    <h1>{eventHeaders.second} <span>{eventHeaders.hightlight}</span> </h1>
                </div>
                <div class="upper-p">
                    <p>
                        {eventParagraph.first} <span>{eventParagraph.highlight}</span> {eventParagraph.second}
                    </p>
                </div>
			</div>
			<!-- = -->
		</div>
		<img src={EventsAssets.EventsHeader} alt="" srcset="" class="event-page-bg" />
	</section>

    <section class="eventsBody">

        <div class="events-container">
            <div class="events-title">
                <h1>Take a look at our future events!</h1>
            </div>

            <div class="events-cards">
                <div class="card">
                    <div class="card-contents">
                        <div class="card-contents-text">
                            <h1>Event Name</h1>
                            <p>Date</p>
                        </div>
                        <div class="card-contents-btn">
                            <button>
                                <p>JOIN EVENT</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h1>hello</h1>
                </div>

                <div class="card">
                    <h1>hello</h1>
                </div>

                <div class="card">
                    <h1>hello</h1>
                </div>

                <div class="card">
                    <h1>hello</h1>
                </div>

                <div class="card">
                    <h1>hello</h1>
                </div>
            </div>
        </div>

    </section>


</main>
