<script>
  import servicesBanner from '$lib/assets/services/CSMA_Graphic_Waves_Greens_180.png';
</script>

<svelte:head>
  <title>Services - CSMA Technology</title>
</svelte:head>

<div class="banner mt-20" id="banner-img" style="background-image: url({servicesBanner})">
  <div class="banner-text">
    <h1 class="h1">Here's some of what we offer</h1>
    <p class="text-2xl leading-7 my-8 max-sm:text-xl">
      We provide a variety of white-glove services for our clients, from building bespoke apps to setting up marketing
      platforms. We are also still just getting started, so reach out to us if you have technology needs that you don't
      see below.
    </p>
  </div>
</div>

<div class="services">
  <div class="services-cards">
    <div class="column">
      <h2 class="btn-label h2 mt-4 mb-1">WEBSITE DEVELOPMENT</h2>
      <div class="card p-4 pl-8">
        <ul class="list-disc">
          <li class="list-item">Mobile-first design</li>
          <li class="list-item">Payment and storefront integrations</li>
          <li class="list-item">Detailed usage analytics</li>
          <li class="list-item">Fast, accessible, and multi-language</li>
          <li class="list-item">Built on cutting-edge technology</li>
          <li class="list-item">White-glove support</li>
          <li class="list-item">Fixed pricing model</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h2 class="btn-label h2 mt-4 mb-1">CUSTOM SOFTWARE</h2>
      <div class="card p-4 pl-8">
        <ul class="list-disc">
          <li>Custom marketing solutions</li>
          <li>Workflow automations</li>
          <li>Cross-platform integrations</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Custom mobile apps</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h2 class="btn-label h2 mt-4 mb-1">CONSULTING</h2>
      <div class="card p-4 pl-8">
        <ul class="list-disc">
          <li>Website & app re-design</li>
          <li>AI integration</li>
          <li>Technical writing</li>
          <li>Software training & setup</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h2 class="btn-label h2 mt-4 mb-1">EDUCATION</h2>
      <div class="card p-4 pl-8">
        <ul class="list-disc">
          <li>Course Development</li>
          <li>Tutorial & Guide Creation</li>
          <li>Technical Training</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="margin-top: 2rem;">
    <p class="h2 btn-label">WORK WITH US</p>
    <a class="btn btn-lg variant-filled-primary" href="/contact">Contact Us</a>
  </div>
</div>

<style>
  .banner {
    filter: saturate(115%);
    background-size: 100vw 160%;
  }

  .banner-text {
    filter: drop-shadow(2px 4px 6px black);
  }

  .services {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .services-cards {
    width: 75%;
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .card {
    height: 75%;
    display: flex;
    align-items: flex-start;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: min(300px, 95vw);
    margin-bottom: 2rem;
  }

  .column {
    flex-grow: 0;
  }

  @media (max-width: 640px) {
    .banner {
      background-size: 200% 150%;
    }
  }
</style>
