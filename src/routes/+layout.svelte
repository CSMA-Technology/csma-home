<script>
  import '../app.css'
  import "@fontsource/bebas-neue"
  import "@fontsource/overpass"
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
