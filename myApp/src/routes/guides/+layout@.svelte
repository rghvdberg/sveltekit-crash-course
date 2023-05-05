<script>
  // your script goes here
  import Title from "$lib/Title.svelte"
</script>

<header>
  <div class="links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/guides">Guides</a>
  </div>
</header>
<slot/>
<style>
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 10px
  }
</style>
