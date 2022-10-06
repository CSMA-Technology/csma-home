<script>
  import csmaLogo from '$lib/assets/turtle-logo.png';
  import csmaTitle from '$lib/assets/csma-technology-title.png';
</script>

<div class="about">
  <h1>About Us</h1>
  <div class="content">
    <div class="company">
      <div class="company-images">
        <img id="csmaLogo" src={csmaLogo} alt="CSMA Logo" />
        <img id="csmaTitle" src={csmaTitle} alt="CSMA Technology" />
      </div>
      <div class="company-text">
        <h2 class="btn-label">The Company</h2>
        <p>
          CSMA Technology was started as a place to search for and try to solve interesting and unique problems through technology. Our founders are two outspoken, 
          innovative, and energetic (if not slightly crazy) people who love to take ideas and inspiration from everywhere and bring them to life in creative ways.
          <br />
          If you have a need for a custom solution, an outrageous idea that you want to try, or simply a desire to create useful and fun software, 
          please reach out to us with our contact details below. We’d love to work with you.
        </p>
      </div>
    </div>
    <div class="founders">
      <div class="founders-text">
        <h2>The Founders</h2>
        <p>
          Adrian and Stephanie met at their first jobs out of college at American Express in Sunrise, Florida. From the moment that they formed a hackathon 
          team together at work (during which Adrian ended up sleeping in his car and Stephanie commuted straight from a cruise to the office — dedication, people), 
          they knew they made a great team, capable of identifying unique ideas and finding ways to make them real. 
          <br />
          Ever since that first hackathon (and many others, where Adrian and Stephanie were overlooked for some brilliant ideas… not bitter), they continued to team up. 
          From creating materials for Women in Technology to educate colleagues on unconscious biases, to developing a coding bootcamp for children with a 
          completely original curriculum, to joining their brainpower to solve numerous escape rooms despite some very loud bickering, they’ve accomplished some great things.
          <br />
          In April 2022, the dynamic duo decided to leave American Express and start a business together, wanting to take on new challenges and explore limitless 
          opportunities on their own. Now, they head CSMA Technology, aiming to build impactful software that makes life better.
        </p>
      </div>
      <div class="founders-images">
        <img id="placeholder" src={csmaLogo} alt="placeholder" />
        <img id="placeholder" src={csmaLogo} alt="placeholder" />
      </div>
    </div>
  </div>
</div>

<style>
  .about {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin: 20px;
  }

  .company {
    display: flex;
    flex-flow: row wrap;
  }

  .company-images {
    display: flex;
    flex-flow: column wrap;
    flex: 1 50px;
    justify-content: center;
    align-items: center;
  }

  .company-text {
    flex: 2 200px;
    text-align: right;
  }

  .content {
    width: 900px;
    background-color: white;
    padding: 25px 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  #csmaLogo {
    width: 100px;
  }

  #csmaTitle {
    /* transform: rotate(-90deg); */
  }

  .founders {
    display: flex;
    flex-flow: row wrap;
  }

  .founders-images {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    flex: 1 150px;
  }

  .founders-text {
    text-align: left;
    flex: 2 200px;
  }

  .about h1 {
    margin: 0px;
  }

  #placeholder {
    width: 125px;
  }
</style>