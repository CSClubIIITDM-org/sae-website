<script>
  import HomeBanner from '$lib/HomeBanner.svelte';
  import Hr from '$lib/Hr.svelte';
</script>

<main>
  <HomeBanner />

  <div class="m-8">
    <Hr />
  </div>

  <section class="stats-section">
    <h2>{`{SOMETHING}`}</h2>
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
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni officiis quod quam
      ratione iusto amet repudiandae at fuga voluptatem provident, odio nostrum dolorum, asperiores
      nulla distinctio laborum veritatis consequatur?
    </p>
  </section>
  <section class="about-us" />

  <div class="m-8">
    <Hr />
  </div>
</main>

<style lang="scss" windi:global>
  main {
    @apply w-1/1 pt-32 flex items-center flex-col;
  }

  .stats-section {
    @apply w-4/5 mb-8;
  }

  .about-us {
    @apply w-4/5 mb-8;
  }

  h2 {
    @apply text-[4rem] text-center my-4;
  }

  .stats {
    @apply grid grid-cols-3 justify-center my-8 w-1/1;
  }

  .counter {
    @apply flex flex-col items-center;

    h3 {
      @apply text-9xl font-300 leading-[1.1] text-$app-color-primary;
    }

    p {
      @apply uppercase text-3xl;
    }
  }
</style>
