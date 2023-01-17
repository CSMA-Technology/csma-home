<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1V8VXFQFBB"></script>
</svelte:head>
<script>
  import '../app.css'
  import AppBar from '$lib/AppBar.svelte';
	import { browser } from '$app/environment';

  // Google Analytics
  function gtag(){window.dataLayer.push(arguments);}
  if (browser) {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-1V8VXFQFBB');
  }
</script>

<style>
  main {
    text-align: center;
  }
</style>

<AppBar/>
<main>
  <slot></slot>
</main>
