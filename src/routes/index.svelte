<script>
  import HomeBanner from '$lib/HomeBanner.svelte';
  import Hr from '$lib/Hr.svelte';
</script>

<main>
  <HomeBanner />

  <div class="divider">
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

<style lang="scss">
  main {
    width: 100%;

    padding-top: 8rem;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .divider {
    margin: 2rem;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;

    margin: 2rem;

    width: 80%;

    .counter {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 8rem;
        font-weight: 300;
        line-height: 1.1;

        color: var(--app-color-primary);
      }

      p {
        font-size: 1.618rem;

        text-transform: uppercase;
      }
    }
  }
</style>
