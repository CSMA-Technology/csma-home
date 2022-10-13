<script>
  import daydream from '$lib/assets/projects/daydream.png'
</script>

<div class="projects">
  <div>
    <h1>OUR WORK</h1>
    <h2 class="banner-subtitle">
      Here are some samples of work we've done for our clients.
      Let us build something for you!
    </h2>
  </div>
  <div class="projects-cards">
    <div class="card">
      <img class="project-snapshot" src={daydream} alt="Daydream Games Logo" />
      <div class="project-title">
        <h3>DAYDREAM GAMES</h3>
        <p>Our independent game studio.</p>
      </div>
    </div>
    <div class="card">
      <img class="project-snapshot" src={daydream} alt="Daydream Games Logo" />
      <div class="project-title">
        <h3>DAYDREAM GAMES</h3>
        <p>Our independent game studio.</p>
      </div>
    </div>
  </div>
  <div>
    <h1>OUR PROJECTS</h1>
    <h2 class="banner-subtitle">
      Here are some of our current projects. 
      If you'd like to contribute, reach out to us!
    </h2>
  </div>
  <div class="projects-cards">
    <div class="card">
      <img class="project-snapshot" src={daydream} alt="Daydream Games Logo" />
      <div class="project-title">
        <h3>DAYDREAM GAMES</h3>
        <p>Our independent game studio.</p>
      </div>
    </div>
    <div class="card">
      <img class="project-snapshot" src={daydream} alt="Daydream Games Logo" />
      <div class="project-title">
        <h3>DAYDREAM GAMES</h3>
        <p>Our independent game studio.</p>
      </div>
    </div>
  </div>
</div>
<style>
  .projects {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin: 20px;
  }

  .projects h1, h2 {
    margin: 10px 0px;
  }

  .projects-cards {
    max-width: 700px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  
  .card {
    display: flex;
    flex-flow: column wrap;
  }

  .project-snapshot {
    border-radius: 10px 10px 0px 0px;
    max-width: 300px;
  }

  .project-title {
    text-align: left;
    background-color: white;
    color: black;
    border-radius: 0px 0px 10px 10px;
    padding: 10px;
  }

  .project-title h3, p {
    margin: 0px;
  }
</style>