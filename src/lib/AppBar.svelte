<script lang="ts">
  import csmaLogo from '$lib/assets/turtle-logo.png';

  var isMenuopen = false;
</script>

<nav class="app-bar">
  <a class="branding" href="/">
      <img id="csmaLogo" src={csmaLogo} alt="The CSMA logo" />
      <p>CSMA</p>
  </a>
  <ul class={`nav-links ${isMenuopen ? '' : 'hide-menu'}`}>
    <li>
      <a href='/projects'>Projects</a>
    </li>
    <li>
      <a href='/about'>About</a>
    </li>
    <li>
      <a href='/services'>Services</a>
    </li>
    <li>
      <a href='/contact'>Contact</a>
    </li>
  </ul>
  <button on:click={() => { isMenuopen = !isMenuopen }} class="hamburger-button">
    {#if isMenuopen}
      <span class="material-symbols-outlined">
        close
      </span>
    {:else}
      <span class="material-symbols-outlined">
        menu
      </span>
    {/if}
  </button>
</nav>

<style>
  .app-bar {
    height: 66px;
    width: 100vw;
    background-color: #00838F;
    display: flex;
    flex-direction: row;
    background-size: 100%;
  }

  .branding {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: .5rem;
    text-align: center;
    gap: .75rem;
    max-width: 156px;
  }

  .branding p {
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

  .nav-links {
    flex-grow: 1;
    display: flex;
    flex-direction: row-reverse;
    margin-right: 2rem;
    font-family: Overpass;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    list-style-type: none;
    gap: 1rem;
  }

  .nav-links a {
    color: white;
  }

  .hamburger-button {
    display: none;
  }

  @media (max-width: 640px) {
    .hide-menu {
      opacity: 0;
      visibility: hidden;
    }

    .hamburger-button {
      display: block;
      width: auto;
      background: none;
      color: white;
      margin-left: auto;
      margin-right: 1rem;
    }
    .nav-links {
      flex-direction: column-reverse;
      z-index: 100;
      background-color: #004046;
      margin-top: 66px;
      width: 100%;
      position: absolute;
      padding-left: 0;
      text-align: right;
      padding-top: 1rem;
      padding-bottom: 1rem;
      transition: opacity 600ms, visibility 600ms;
    }

    .nav-links a {
      padding-right: 2rem;
    }
  }

</style>