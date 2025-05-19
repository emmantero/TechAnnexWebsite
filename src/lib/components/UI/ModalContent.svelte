<script lang="ts">
    export let imageUrl: string;
    export let title: string;
    export let description: string;
  </script>
  
  <div class="modal-content">
    <img src={imageUrl} alt={title} class="modal-image" />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  
  <style>
    .modal-content {
      text-align: left;
      max-height: 80vh;
      overflow-y: auto;
      padding-right: 10px;
    }
  
    .modal-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      object-fit: cover;
      max-height: 300px;
    }
  
    h2 {
      font-size: 1.8rem;
      color: #A37B45;
      margin-bottom: 1rem;
      text-align: center;
    }
  
    p {
      font-size: 1rem;
      line-height: 1.6;
      color: #A37B45;
      margin: 0;
      white-space: pre-line;
    }
  
    @media (max-width: 768px) {
      .modal-content {
        padding-right: 5px;
      }
  
      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
      }
  
      .modal-image {
        max-height: 250px;
        margin-bottom: 1rem;
      }
    }
  
    @media (max-width: 480px) {
      h2 {
        font-size: 1.2rem;
      }
  
      p {
        font-size: 0.9rem;
        line-height: 1.5;
      }
  
      .modal-image {
        max-height: 200px;
      }
    }
  </style>