<script lang="ts">
  export let showModal: boolean = false;
  export let onClose: () => void;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if showModal}
  <div 
    class="modal-backdrop"
    on:click={handleBackdropClick}
  >
    <div class="modal">
      <button class="close-button" on:click={onClose}>×</button>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 1rem;
  }

  .modal {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    max-width: 90%;
    width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: modal-in 0.3s ease-out;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    z-index: 1;
  }

  .close-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @keyframes modal-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .modal {
      padding: 1.5rem;
      width: 100%;
      margin: 0;
    }
    
    .close-button {
      top: 0.5rem;
      right: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    .modal-backdrop {
      padding: 0.5rem;
    }

    .modal {
      padding: 1rem;
      border-radius: 8px;
    }
  }
</style>