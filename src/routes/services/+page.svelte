<script>
  import servicesBanner from '$lib/assets/services/CSMA_Graphic_Waves_Greens_180.png';
</script>

<head>
  <title>Services - CSMA Technology</title>
</head>

<div class="banner" id="banner-img" style="background-image: url({servicesBanner})">
  <div class="banner-text">
    <h1 class="banner-title">Here's some of what we offer.</h1>
    <h2 class="banner-subtitle">
      We offer a variety of white-glove services for our clients, from building bespoke apps to setting up marketing platforms. We are also still just getting started, so reach out to us if you have technology needs that you don't see below.
    </h2>
  </div>
</div>

<div class="services">
  <div class="services-cards">
    <div class="column">
      <h2 class="btn-label">WEBSITE DEVELOPMENT</h2>
      <div class="card">
        <ul>
          <li>Mobile-first design</li>
          <li>Payment and storefront integrations</li>
          <li>Detailed usage analytics</li>
          <li>Fast, accessible, and multi-language</li>
          <li>Built on cutting-edge technology</li>
          <li>White-glove support</li>
          <li>Fixed pricing model</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h2 class="btn-label">CUSTOM SOFTWARE</h2>
      <div class="card">
        <ul>
          <li>Custom marketing solutions</li>
          <li>Workflow automations</li>
          <li>Cross-platform integrations</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Custom mobile apps</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h2 class="btn-label">CONSULTING</h2>
      <div class="card">
        <ul>
          <li>Website & app re-design</li>
          <li>AI integration</li>
          <li>Technical writing</li>
          <li>Software training & setup</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h2 class="btn-label">EDUCATION</h2>
      <div class="card">
        <ul>
          <li>Course Development</li>
          <li>Tutorial & Guide Creation</li>
          <li>Technical Training</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="margin-top: 2rem;">
    <h2 class="btn-label">WORK WITH US</h2>
    <a class="btn" href='/contact'>Contact Us</a>
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
    color: black;
    display: flex;
    align-items: flex-start;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: min(300px, 95vw);
    margin-bottom: 1rem;
  }

  @media(prefers-color-scheme: dark) {
    .card {
      color: white;
      background-color: #303e47;
    }
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