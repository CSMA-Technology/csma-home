<script>
  import csmaTitle from '$lib/assets/csma-technology-title.png';
  import homeBanner from '$lib/assets/CSMA_Graphic_Waves_Top_Right.png';
</script>

<div class="banner" style="background-image: url({homeBanner}">
  <div class="banner-text">
    <img class="banner-image" src={csmaTitle} alt='CSMA Technology' />

    <h1 class="banner-title">
      PASSIONATE ABOUT TECHNOLOGY,
      <br />
      INSPIRED TO BUILD.
    </h1>

    <h2 class="banner-subtitle">
      We’re here to find effective solutions to interesting problems.
    </h2>

  </div>
</div>
<div class="blurb">
  <p class="blurb-text">Based in South Florida, CSMA Technology is an independent software and consulting company,
    excited to work clients to provide quality software, with a focus on growing the local community.
    We build websites, cross-platform applications, and custom software solutions. Our founders, Adrian and Stephanie,
    started this company to bring innovative projects to life. If this sounds exciting, we'd love to work with you!
  </p>

  <div class="blurb-buttons">
    <div>
      <h2 class="btn-label">SEE WHAT WE DO</h2>
      <a class="btn" href='/services'>Our Services</a>
    </div>
    <div>
      <h2 class="btn-label">WORK WITH US</h2>
      <a class="btn" href='/contact'>Contact Us</a>
    </div>
  </div>
</div>

<style>
  .banner-image {
    margin-top: 2rem;
    max-width: 60%;
  }

  .blurb {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .blurb-text {
    text-align: left;
  }

  .blurb-buttons {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 1rem;
  }

  @media (max-width: 640px) {
    .blurb {
      padding: 1rem;
    }
  }
</style>