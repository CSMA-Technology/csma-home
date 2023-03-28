<script>
  import daydream from '$lib/assets/projects/daydream.png';
  import comingSoon from '$lib/assets/projects/coming-soon.png';
  import godot from '$lib/assets/projects/godot-tutorial-ss.png';
  import khaLogo from '$lib/assets/projects/kha-logo.png';
  import blendLogo from '$lib/assets/projects/blend-logo.png';

  const chelydraUrl = 'https://github.com/CSMA-Technology/chelydra';
  const commonmuskUrl = 'https://github.com/CSMA-Technology/commonmusk-discord-bot';
  const stinkpotUrl = 'https://github.com/CSMA-Technology/stinkpot-controller';
  const godotUrl = 'https://medium.com/@exscruzme_/godot-3-5-2d-navigation-tutorial-f95c336ae735';
</script>

<div class="projects">
  <div>
    <h1>PROJECTS</h1>
    <h2 class="banner-subtitle">
      Here are some of our current projects.
      <br />
      If you want to know more, reach out to us!
    </h2>
  </div>
  <div class="projects-cards">
    <a href="https://app.blendreading.com" rel="noreferrer" target="_blank">
      <div class="card">
        <img class="project-snapshot" src={blendLogo} alt="Daydream Games Logo" style="filter: saturate(150%);" />
        <div class="project-title">
          <h3>Blend</h3>
          <p>A modern take on the Orton-Gillingham method of literacy training. Developed in collaboration with <a target="_blank" href="https://www.sageliteracy.org/">Sage Literacy</a></p>
        </div>
      </div>
    </a>
    <a href="https://blendreading.com" rel="noreferrer" target="_blank">
      <div class="card">
        <img class="project-snapshot" src={blendLogo} alt="Daydream Games Logo" style="filter: saturate(150%);" />
        <div class="project-title">
          <h3>Blend Product Site</h3>
          <p>A marketing website with account management features and Stripe subscription integration.</p>
        </div>
      </div>
    </a>
    <a href="https://kendalehoa.org" rel="noreferrer" target="_blank">
      <div class="card">
        <img class="project-snapshot" src={khaLogo} alt="Daydream Games Logo" style="filter: saturate(150%);" />
        <div class="project-title">
          <h3>KHA Website</h3>
          <p>A custom website with integrated payments and contact features</p>
        </div>
      </div>
    </a>
    <a href={chelydraUrl} rel="noreferrer" target="_blank">
      <div class="card">
        <img class="project-snapshot" src={daydream} alt="Daydream Games Logo" style="filter: saturate(150%);" />
        <div class="project-title">
          <h3>CHELYDRA (DESK DEFENDER)</h3>
          <p>A 2D Tower Defense Deck-Building Game.</p>
        </div>
      </div>
    </a>
    <a href={commonmuskUrl} rel="noreferrer" target="_blank">
      <div class="card">
        <img class="project-snapshot" src={comingSoon} alt="Coming Soon" />
        <div class="project-title">
          <h3>COMMONMUSK</h3>
          <p>An open-sourced bot orchestrator for NodeJS.</p>
        </div>
      </div>
    </a>
    <a href={stinkpotUrl} rel="noreferrer" target="_blank">
      <div class="card">
        <img class="project-snapshot" src={comingSoon} alt="Coming Soon" />
        <div class="project-title">
          <h3>STINKPOT</h3>
          <p>An smart pet feeder with <a target="_blank" href="https://csa-iot.org/all-solutions/matter/">Matter</a> integration.</p>
        </div>
      </div>
    </a>
  </div>
  <div>
    <h1>TUTORIALS</h1>
    <h2 class="banner-subtitle">
      We publish tutorials on the tools we use to build our apps. 
      <br />
      We have more in development, so check back soon!
    </h2>
  </div>
  <div class="projects-cards">
    <a href={godotUrl} rel="noreferrer" target="_blank">
      <div class="card">
        <img class="project-snapshot" src={godot} alt="Godot Town" />
        <div class="project-title">
          <h3>GODOT TOWN</h3>
          <p>A Godot 3.5 Nav2D Tutorial.</p>
        </div>
      </div>
    </a>
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
    width: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .card {
    display: flex;
    flex-flow: column wrap;
    margin: 20px;
    max-width: 300px;
  }

  .project-snapshot {
    border-radius: 10px 10px 0px 0px;
    max-width: 300px;
    /* max-height: 235px; */
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

  .project-title h3, p {
    margin: 0px;
  }

  @media(prefers-color-scheme: dark) {
    .projects-cards {
      filter: none;
    }
    .project-title {
      color: white;
      background-color: #303e47;
    }
  }
</style>
