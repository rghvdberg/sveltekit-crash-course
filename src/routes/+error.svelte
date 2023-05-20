<script>
  import { page } from "$app/stores";
  import { emojis } from "./emojis.js";
</script>

<h1>{$page.status} {$page.error.message}</h1>
<span class="error">
  {emojis[$page.status] ?? emojis[500]}
</span>

<style>
  .error {
    font-size: 10em;
  }
</style>
