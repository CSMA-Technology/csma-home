<script lang="ts">
  import '../app.pcss';
  import AppBar from '$lib/AppBar.svelte';
  import { browser } from '$app/environment';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  // Google Analytics
  function gtag() {
    window.dataLayer.push(arguments);
  }

  let ready = $state(false);
  if (browser) {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-1V8VXFQFBB');

    document.fonts.ready.then(() => {
      ready = true;
    });
  }
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1V8VXFQFBB"></script>
</svelte:head>

<div class={`${ready ? '' : 'hide'}`}>
  <AppBar></AppBar>
  <main in:fade class="w-screen">
    {#key $page}
      <div in:fade={{ duration: 500 }} class="w-screen max-w-[165rem] mx-auto relative">
        {@render children?.()}
      </div>
    {/key}
  </main>
</div>

<style>
  main {
    text-align: center;
  }
  .hide {
    opacity: 0;
    overflow: hidden;
  }
</style>
