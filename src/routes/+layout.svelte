<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1V8VXFQFBB"></script>
</svelte:head>
<script>
  import '../app.css'
  import "@fontsource/bebas-neue"
  import "@fontsource/overpass"
  import "@fontsource/roboto"
  import "@fontsource/roboto-condensed"
  import "@fontsource/lora"
  import AppBar from '$lib/AppBar.svelte';

  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1V8VXFQFBB');
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
