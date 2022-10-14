<script>
  import csmaLogo from '$lib/assets/turtle-logo.png';
  import stephanie from '$lib/assets/about/Stephanie.png';
  import adrian from '$lib/assets/about/adrian.jpg';
  import github from '$lib/assets/about/icons/GitHub-Mark-Light-32px.png';
  import linkedin from '$lib/assets/about/icons/In-White-34.png';
  import email from '$lib/assets/about/icons/email.png'
</script>

<head>
  <title>About - CSMA Technology</title>
</head>

<div class="about">
  <h1>About Us</h1>
  <div class="paper">
    <div class="company">
      <div class="company-text">
        <h2 class="btn-label">The Company</h2>
        <p>
          CSMA Technology was started as a place to search for and try to solve interesting and unique problems through technology. Our founders are two outspoken,
          innovative, and energetic (if not slightly crazy) people who love to take ideas and inspiration from everywhere and bring them to life in creative ways.
          <br /> <br />
          If you have a need for a custom solution, an outrageous idea that you want to try, or simply a desire to create useful and fun software,
          please reach out to us with our contact details below. We’d love to work with you.
        </p>
      </div>
      <div class="company-images">
        <img id="csmaLogo" src={csmaLogo} alt="CSMA Logo" />
      </div>
    </div>
    <div class="founders">
      <div class="founders-text">
        <h2>The Founders</h2>
        <p>
          Adrian and Stephanie met at their first jobs out of college at American Express in Sunrise, Florida. From the moment that they formed a hackathon
          team together at work (during which Adrian ended up sleeping in his car and Stephanie commuted straight from a cruise to the office — dedication, people),
          they knew they made a great team, capable of identifying unique ideas and finding ways to make them real.
          <br /><br />
          Ever since that first hackathon (and many others, where Adrian and Stephanie were overlooked for some brilliant ideas… not bitter), they continued to team up.
          From creating materials for Women in Technology to educate colleagues on unconscious biases, to developing a coding bootcamp for children with a
          completely original curriculum, to joining their brainpower to solve numerous escape rooms despite some very loud bickering, they’ve accomplished some great things.
          <br /><br />
          In April 2022, the dynamic duo decided to leave American Express and start a business together, wanting to take on new challenges and explore limitless
          opportunities on their own. Now, they head CSMA Technology, aiming to build impactful software that makes life better.
        </p>
      </div>
      <div class="founders-images">
        <h3 class="subtitle">Adrian Moya</h3>
        <div class="founder-card">
          <img class="avatar" src={adrian} alt="Adrian Moya" />
          <div class="socials">
            <a href="https://github.com/admoya"><img id="logo" src={github} alt="Github Logo" /></a>
            <a href="https://www.linkedin.com/in/adrian-moya-a870a39b/"><img id="logo" src={linkedin} alt="Linkedin Logo" /></a>
            <a href="mailto:adrian@csma.technology"><img id="logo" src={email} alt="Email Logo" /></a>
          </div>
        </div>
        <h3 class="subtitle">Stephanie Cruz</h3>
        <div class="founder-card">
          <img class="avatar" src={stephanie} alt="Stephanie Cruz" />
          <div class="socials">
            <a href="https://github.com/exscruzme"><img id="logo" src={github} alt="Github Logo" /></a>
            <a href="https://www.linkedin.com/in/cruz-stephanie/"><img id="logo" src={linkedin} alt="Linkedin Logo" /></a>
            <a href="mailto:stephanie@csma.technology"><img id="logo" src={email} alt="Email Logo" /></a>
          </div>
        </div>
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

  .about h1 {
    margin: 0px;
  }

  .avatar {
    max-width: 150px;
    max-height: 150px;
    border-radius: 5px 0px 0px 5px;
  }

  .company {
    display: flex;
    flex-flow: row-reverse wrap;
  }

  .company-images {
    max-width: 200px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    flex: 1;
  }

  .company-text {
    text-align: right;
    flex: 5;
  }

  .paper {
    max-width: 900px;
    color: black;
    background-color: white;
    padding: 25px 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  #csmaLogo {
    width: 150px;
  }

  .founders {
    display: flex;
    flex-flow: row wrap;
  }

  .founder-card {
    display: flex;
    flex-flow: row wrap;
  }

  .founders-images {
    max-width: 200px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
    justify-content: center;
    flex: 1;
    padding-left: 20px;
  }

  .founders-text {
    text-align: left;
    flex: 2;
  }

  #logo {
    width: 32px;
  }

  .socials {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-around;
    width: 50px;
    padding: 5px 0px;
    background-color: #00838F;
    border-radius: 0px 5px 5px 0px;
  }

  @media (max-width: 640px) {
    .company {
      flex-direction: column;
      align-items: center;
    }

    .content {
      padding: 25px;
    }

    .founders {
      flex-direction: column;
      align-items: center;
    }

    .socials {
      flex-direction: row;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 0px;
      border-radius: 0px 0px 5px 5px;
    }

    .avatar {
      width: 100%;
      max-width: none;
      max-height: 200px;
      border-radius: 5px 5px 0px 0px;
    }

    .founders-images {
      padding-left: 0;
    }
  }
</style>