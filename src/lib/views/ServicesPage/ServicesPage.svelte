<script lang="ts">

    // IMPORTING PARTNERSHIPS PAGE ASSETS
	import * as ServicesAssets from '../../assets/Services-Assets/services-assets.svelte'; 

    // IMPORTING CSS
	import './style.css';

    let ourServices = 'Our Services';

    import Carousel from './../../Carousel.svelte';
	import Slideshow from '../../Slideshow.svelte';
	import { onMount } from 'svelte';

    const servicesImgCarousel: string[] = [
		ServicesAssets.ServicesCarousel1,
        ServicesAssets.ServicesCarousel2,
        ServicesAssets.ServicesCarousel3,
        ServicesAssets.ServicesCarousel4,
        ServicesAssets.ServicesCarousel5,
	];

    // 
    let isMobile = false;

    const checkIfMobile = () => {
        isMobile = window.matchMedia('(max-width: 768px)').matches;
    };

    onMount(() => {
        checkIfMobile();

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const listener = () => checkIfMobile();
        mediaQuery.addEventListener('change', listener);

        return () => mediaQuery.removeEventListener('change', listener);
    });

</script>

<main class="services">

    <section class="services-content">

        <div class="ourServices-container">

            <div class="ourServices-text">
                <div class="ourServices-title">
                    <h1>{ourServices}</h1>
                </div>
            </div>

            <div class="ourServices-offer">
                <div class="slideShow-container">
                    <Slideshow />
                </div>

                <div class="whatWeOffer-text">
                    <h1>What we offer</h1>
                    <p>TechAnnex offers a range of e-waste recycling solutions tailored to meet the needs of businesses, residents, and communities</p>
                </div>
            </div>

            <div class="ourServices-carousel">
                {#if !isMobile}
                <Carousel>
                    {#each servicesImgCarousel as img}
                        <div class="carousel-item">
                            <img src={img} alt="Gallery image" />
                        </div>
                    {/each}
                </Carousel>
                {:else} 
                <div class="ourServices-column">
                    {#each servicesImgCarousel as img}
                        <div class="carousel-item">
                            <img src={img} alt="Gallery image" />
                        </div>
                    {/each}
                </div>
                {/if}
            </div>

            <div class="recycle-container">
                <div class="howToRecycle-text">
                    <h1>How we recycle</h1>
                </div>

                <div class="howToRecycle-img">
                    <img src={ServicesAssets.Recycle} alt="" srcset="" />
                </div>
            </div>

        </div>

    </section>

</main>