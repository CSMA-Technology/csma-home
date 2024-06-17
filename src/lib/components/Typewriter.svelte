<script lang="ts">
</script>

<div class="typewriter tracking-wide pr-1">
  <slot />
</div>

<style>
  .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    animation:
      typing 2s steps(20, end),
      blink-caret 1s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }

    50% {
      border-color: orange;
    }
  }
</style>
