<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    let currentIndex = $state(0);

    import * as ServicesAssets from '../lib/assets/Services-Assets/services-assets.svelte'; 
    let autoplayInterval: number;
  
    const servicesSlideShowImg: string[] = [
		ServicesAssets.SlideShow1,
        ServicesAssets.SlideShow2,
        ServicesAssets.SlideShow3,
	];
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % servicesSlideShowImg.length;
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + servicesSlideShowImg.length) % servicesSlideShowImg.length;
    }
  
    function goToSlide(index: number) {
      currentIndex = index;
    }
  
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 2000);
    }
  
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
  
    onMount(() => {
      startAutoplay();
    });
  
    onDestroy(() => {
      stopAutoplay();
    });
  </script>
  
  <div 
    class="carousel"
    on:mouseenter={stopAutoplay}
    on:mouseleave={startAutoplay}
  >
    <!-- <button class="nav-button prev" on:click={prevSlide}>←</button> -->
    <div class="slide">
      <img 
        src={servicesSlideShowImg[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`}
        class="slide-image"
      />
    </div>
    <!-- <button class="nav-button next" on:click={nextSlide}>→</button> -->
    
    <!-- <div class="dots">
      {#each servicesSlideShowImg as _, i}
        <button 
          class="dot" 
          class:active={currentIndex === i}
          on:click={() => goToSlide(i)}
        />
      {/each}
    </div> -->
  </div>
  
  <style>
    .carousel {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      height: 400px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  
    .slide {
      width: 100%;
      height: 100%;
    }
  
    .slide-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  
    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 16px;
      cursor: pointer;
      font-size: 20px;
      transition: background-color 0.3s;
      z-index: 2;
    }
  
    .nav-button:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  
    .prev {
      left: 0;
      border-radius: 0 4px 4px 0;
    }
  
    .next {
      right: 0;
      border-radius: 4px 0 0 4px;
    }
  
    .dots {
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 2;
    }
  
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      border: none;
      padding: 0;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .dot:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  
    .dot.active {
      background: white;
    }
  </style>