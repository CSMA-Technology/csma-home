<script>
  import daydream from '$lib/assets/projects/daydream.png'
</script>

<div class="projects">
  <div class="projects-title">
    <h1>OUR WORK</h1>
    <h2 class="banner-subtitle">
      Here are some samples of work we've done for our clients.
      Let us build something for you!
    </h2>
  </div>
</div>
<div class="projects">
  <div class="projects-title">
    <h1>OUR PROJECTS</h1>
    <h2 class="banner-subtitle">
      Here are some of our current projects. 
      If you'd like to contribute, reach out to us!
    </h2>
  </div>
  <div class="projects-cards">
    <div class="card">
      <img id="snapshot" src={daydream} alt="Daydream Games Logo" />
    </div>
  </div>
</div>

<style>
  .projects {
    display: flex;
    flex-flow: column wrap;
  }
  .projects-cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .card {
    display: flex;
    flex-flow: column wrap;
  }
</style>