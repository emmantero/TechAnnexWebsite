<script lang="ts">
    import { onMount } from 'svelte';
  
    let carousel: HTMLElement;
    let isDragging = $state(false);
    let startX = $state(0);
    let scrollLeft = $state(0);
  
    function handleMouseDown(e: MouseEvent) {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    }
  
    function handleMouseMove(e: MouseEvent) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    }
  
    function handleMouseUp() {
      isDragging = false;
    }
  
    onMount(() => {
      carousel.addEventListener('mouseleave', handleMouseUp);
      return () => {
        carousel.removeEventListener('mouseleave', handleMouseUp);
      };
    });
  </script>
  
  <div
    class="carousel"
    bind:this={carousel}
    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    class:grabbing={isDragging}
  >
    <div class="carousel-content">
      <slot />
    </div>
  </div>
  
  <style>
    .carousel {
      width: 100%;
      overflow-x: scroll;
      cursor: grab;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  
    .carousel::-webkit-scrollbar {
      display: none;
    }
  
    .carousel.grabbing {
      cursor: grabbing;
      user-select: none;
    }
  
    .carousel-content {
      display: flex;
      gap: 1rem;
    }
  </style>