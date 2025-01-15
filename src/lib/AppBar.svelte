<script lang="ts">
  import csmaLogo from '$lib/assets/turtle-logo.png';

  var isMenuopen = $state(false);
</script>

<div class="fixed top-0 left-0 w-full bg-none z-10">
  <nav class="app-bar bg-surface-500 rounded-3xl mx-auto w-fit m-1 border-tertiary-500 border-2 px-1">
    <a class="branding ml-2 mr-1 md:mr-8" href="/">
      <img id="csmaLogo" class="min-w-10" src={csmaLogo} alt="The CSMA logo" />
      <p class="font-heading-token text-2xl ml-1 max-md:hidden">CSMA</p>
    </a>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <ul
      onclick={() => {
        isMenuopen = false;
      }}
      onkeypress={() => {
        isMenuopen = false;
      }}
      class="flex flex-row-reverse gap-3 items-center mx-2 max-sm:text-base">
      <li>
        <a class="font-medium" href="/projects">Projects</a>
      </li>
      <li>
        <a class="font-medium" href="/about">About</a>
      </li>
      <li>
        <a class="font-medium" href="/services">Services</a>
      </li>
      <li>
        <a class="font-medium" href="/contact">Contact</a>
      </li>
    </ul>
    <button
      onclick={() => {
        isMenuopen = !isMenuopen;
      }}
      class="hamburger-button">
      {#if isMenuopen}
        <span class="material-symbols-outlined">close</span>
      {:else}
        <span class="material-symbols-outlined">menu</span>
      {/if}
    </button>
  </nav>
</div>

<style>
  .app-bar {
    height: 50px;
    /* width: 100vw; */
    display: flex;
    flex-direction: row;
    background-size: 100%;
  }

  .app-bar a:hover {
    text-decoration: none;
    color: #040622;
  }

  .branding {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    max-width: 156px;
  }

  #csmaLogo {
    height: 20px;
    margin-top: -4px;
  }

  .hamburger-button {
    display: none;
  }
</style>
