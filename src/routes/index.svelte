<script>
  import HomeBanner from '$lib/HomeBanner.svelte';
  import Hr from '$lib/Hr.svelte';
</script>

<main>
  <HomeBanner />

  <div class="m-8">
    <Hr />
  </div>

  <section class="stats">
    <section class="counter">
      <h3>50+</h3>
      <p>students</p>
    </section>
    <section class="counter">
      <h3>5+</h3>
      <p>specializations</p>
    </section>
    <section class="counter">
      <h3>1</h3>
      <p>goal</p>
    </section>
  </section>
</main>

<style>
  main {
    @apply w-1/1 pt-32 flex items-center flex-col;
  }

  .stats {
    @apply grid grid-cols-3 justify-center m-8 w-4/5;
  }

  .counter {
    @apply flex flex-col items-center;
  }

  h3 {
    @apply text-9xl font-300 leading-[1.1] text-$app-color-primary;
  }

  p {
    @apply uppercase text-3xl;
  }
</style>
