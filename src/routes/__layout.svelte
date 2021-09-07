<script>
  import Footer from '$lib/Footer.svelte';
  import Nav from '$lib/Nav.svelte';
  import '../css/global.scss';
</script>

<Nav />
<slot />
<Footer />

<style windi:preflights:global windi:safelist:global>
</style>
