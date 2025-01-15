<script lang="ts">
  interface Props {
    title: string;
    image: string;
    imageAlt: string;
    tags: string[];
    description: string;
    points: string[];
    url: string;
  }

  let { title, image, imageAlt, tags, description, points, url }: Props = $props();
</script>

<div class="feature rounded-xl w-fit p-4 !mb-6 variant-glass-secondary">
  <div class="top">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <h2 class="h2 text-surface-400 max-md:text-4xl">{title}</h2>
    </a>
    <ul class="tags my-2">
      {#each tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  </div>
  <div class="flex flex-row gap-4 mt-2 mx-auto w-fit items-center flex-wrap md:flex-nowrap">
    <div class="feature-images">
      <a href={url} target="_blank" rel="noopener noreferrer"><img width="640" src={image} alt={imageAlt} /></a>
    </div>
    <div class="max-w-xl text-justify mt-2 leading-7">
      <p>{@html description}</p>
      <ul class="list-disc pl-8 mt-2 mb-8">
        {#each points as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .feature {
    /* width: 80%; */
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

  .feature-images {
    flex-basis: 40rem;
  }

  .feature-images img {
    border-radius: 10px;
    /* width: 100%; */
    object-fit: contain;
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
