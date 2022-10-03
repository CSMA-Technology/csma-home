<script>
  import '../app.css'
  import "@fontsource/bebas-neue"
  import "@fontsource/overpass"
  import "@fontsource/roboto"
  import "@fontsource/roboto-condensed"
  import "@fontsource/lora"
  import AppBar from '$lib/AppBar.svelte';
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
