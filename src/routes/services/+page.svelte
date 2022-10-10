<script>
  import servicesBanner from '$lib/assets/CSMA_Graphic_Waves_Greens_180.png';
</script>

<div class="banner" id="banner-img" style="background-image: url({servicesBanner})">
  <div class="banner-text">
    <h1 class="banner-title">Here's some of what we offer.</h1>
    <h2 class="banner-subtitle">
      There is no limit to your imagination, so we won’t limit our services to what’s on this page.
      If you think of something outside of these boxes, let us know, and we’ll work with you to make it happen.
    </h2>
  </div>
</div>

<div class="services">
  <div class="services-cards">
    <div class="column">
      <h2 class="btn-label">DEVELOPMENT</h2>
      <div class="card">
        <ul>
          <li>Website Development</li>
          <li>Mobile App Development</li>
          <li>Game Design & Development</li>
          <li>Software Troubleshooting & Maintenance</li>
          <li>Custom Software Solutions</li>
        </ul>
      </div>
    </div>

    <div class="column">
      <h2 class="btn-label">CONSULTING</h2>
      <div class="card">
        <ul>
          <li>Website & App Re-Design</li>
          <li>Architecture Design</li>
          <li>Technical Writing</li>
          <li>Software Training & Setup</li>
          <li>Software Advisory</li>
          <li>Software Evaluation</li>
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

  <div>
    <h2 class="btn-label">WORK WITH US</h2>
    <a class="btn" href='/contact'>Contact Us</a>
  </div>

</div>

<style>
  .banner {
    background-position-y: 43%;
    filter: saturate(115%);
    max-width: 300rem;
  }

  .services {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;
  }

  .services-cards {
    width: 100%;
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .card {
    color: black;
    display: flex;
    align-items: flex-start;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: min(300px, 95vw);
  }

  .column {
    flex-grow: 0;
  }

  @media (max-width: 640px) {
    .banner {
      background-size: auto;
    }
  }
</style>