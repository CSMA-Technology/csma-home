<script>
  import github from '$lib/assets/github.png';

  import FeaturedProject from '$lib/components/FeaturedProject.svelte';
  import featuredProjects from '$lib/data/featuredProjects';

  const githubUrl = 'https://github.com/CSMA-Technology';
</script>

<svelte:head>
  <title>Projects - CSMA Technology</title>
</svelte:head>

<div class="mt-20">
  <h1 class="h1 mb-6 max-md:text-5xl">Our Work</h1>
  <div class="projects">
    {#each featuredProjects as { title, image, tags, description, points, url, imageAlt }}
      <FeaturedProject {title} {image} {imageAlt} {tags} {description} {points} {url} />
    {/each}
    <div class="other-projects">
      <div style="width: 100%;">
        <h2 class="h1 text-center">Libraries & Other Projects</h2>
        <p class="banner-subtitle">
          We're always tinkering and building new tools.
          <br />
          Check our our Github page to get a peek at what we're working on.
        </p>
      </div>
      <div class="projects-cards">
        <a href={githubUrl} rel="noreferrer" target="_blank">
          <div class="card">
            <img class="project-snapshot" src={github} alt="Github Logo" style="max-height: 230px" />
            <div class="project-title">
              <h3 class="h3 font-light" style="font-size: 2em;">CSMA on Github</h3>
              <p>The home for our public code repositories.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .projects {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .projects-cards {
    width: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin: 0 auto;
  }

  .other-projects {
    width: min(40rem, 80%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
  }

  .card {
    text-align: left;
    display: flex;
    flex-flow: column wrap;
    margin: 20px;
    max-width: 300px;
  }

  .project-snapshot {
    border-radius: 10px 10px 0px 0px;
    max-width: min(300px, 85vw);
    object-fit: cover;
  }

  .project-title {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    background-color: white;
    color: black;
    border-radius: 0px 0px 10px 10px;
    padding: 10px;
    font-size: 0.8em;
  }

  .project-title h3,
  p {
    margin: 0px;
  }

  @media (prefers-color-scheme: dark) {
    .projects-cards {
      filter: none;
    }
    .project-title {
      color: white;
      background-color: #303e47;
    }
  }
</style>
