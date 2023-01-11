<script>
import policy from './policy';
</script>

<div class="paper">
  <div class="policy">
    {@html policy}
  </div>
</div>

<style>
  .policy {
    max-width: 70rem;
    margin: auto;
    text-align: justify;
  }
  :global(.policy h1, h2, h3, h4) {
    text-align: center;
  }

</style>