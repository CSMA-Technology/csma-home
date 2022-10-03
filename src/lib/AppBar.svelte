<script>
  import csmaLogo from '$lib/assets/turtle-logo.png';
</script>

<style>
  .AppBar {
    height: 66px;
    width: 100vw;
    background-color: #00838F;
    display: flex;
    flex-direction: row;
  }

  .Branding {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: .5rem;
    text-align: center;
    gap: .75rem;
  }

  .Branding p {
    /* padding-top: 4px; */
    margin: 0;
    line-height: 45px;
    color: #FAF7F3;
    font-family: Bebas Neue;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0em;
  }

  #csmaLogo {
    height: 60%;
    margin-top: -4px;
  }

  .NavLinks {
    display: flex;
    flex-direction: row;
    font-family: Overpass;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    list-style-type: none;
    gap: 1rem;
  }

  .NavLinks a {
    color: white;
  }

</style>

<nav class="AppBar">
  <a class="Branding" href="/">
      <img id="csmaLogo" src={csmaLogo} alt="The CSMA logo" />
      <p>CSMA</p>
  </a>
  <ul class="NavLinks">
    <li>
      <a href='/about'>About</a>
    </li>
    <li>
      <a href='/services'>Services</a>
    </li>
    <li>
      <a href='/contact'>Contact</a>
    </li>
    <li>
      <a href='/projects'>Projects</a>
    </li>
  </ul>
</nav>