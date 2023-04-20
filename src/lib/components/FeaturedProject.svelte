<script lang="ts">
  export let title: string;
  export let image: string;
  export let tags: string[];
  export let description: string;
  export let points: string[];
</script>

<div class="feature">
  <div class="top">
    <a href="https://blendreading.com" target="_blank" rel="noopener noreferrer"><h2>{title}</h2></a>
    <ul class="tags">
      {#each tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  </div>
  <div class="side-by-side">
    <div class="feature-images">
      <a href="https://blendreading.com" target="_blank" rel="noopener noreferrer"><img src={image} alt="Blend App Play Screen" /></a>
    </div>
    <div class="text-content">
      <p>{@html description}</p>
      <ul>
        {#each points as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .feature {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
  }
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .side-by-side {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
  }

  .feature-images {
    flex-basis: 40rem;
  }

  .feature-images img {
    border-radius: 10px;
    width: 100%;
    object-fit: contain;
  }

  .text-content {
    flex-basis: 40rem;
    text-align: justify;
  }

  h2 {
    margin: 0;
    font-size: 2.5rem;
  }

  .tags {
    padding: 0;
    font-family: 'Lora';
    font-size: 1rem;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: auto;
    margin-top: 0;
  }

  .tags li {
    margin-right: 1rem;
  }

</style>
