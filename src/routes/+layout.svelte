<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1V8VXFQFBB"></script>
</svelte:head>
<script>
  import '../app.css'
  import AppBar from '$lib/AppBar.svelte';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

  // Google Analytics
  function gtag(){window.dataLayer.push(arguments);}

  let ready = false;
  if (browser) {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-1V8VXFQFBB');

    document.fonts.ready.then(() => {
      ready = true;
      document.fonts.forEach((f) => console.log(`${f.family}: ${f.status}`))
    })
  }
</script>

<style>
  main {
    text-align: center;
  }
  .hide {
    opacity: 0;
    overflow: hidden;
  }
</style>

<div class={`${ready ? '' : 'hide'}`}>
  <AppBar/>
  <main in:fade>
    {#key $page}
      <div in:fade={{duration: 500}}>
        <slot></slot>
      </div>
    {/key}
  </main>
</div>
