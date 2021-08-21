<main>
  <section class="banner">
    <div class="tagline">
      <h1>SAE Club</h1>
    </div>
    <div class="hero-image">
      <img src="/assets/hero.svg" alt="SAE WaterMark" />
    </div>
  </section>
</main>

<style lang="scss">
  main {
    width: 100%;

    display: flex;
    justify-content: center;
  }

  .banner {
    width: 80%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    .tagline {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image img {
      max-width: 100%;
    }
  }
</style>
