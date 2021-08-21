<section class="banner">
  <div class="tagline">
    <h1>SAE Club</h1>
    <h2>Be limitless to follow your passion</h2>
    <button>About us</button>
  </div>
  <div class="hero-image">
    <img src="/assets/hero.svg" alt="SAE WaterMark" />
  </div>
</section>

<style lang="scss">
  .banner {
    width: 80%;

    margin: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .tagline {
    display: flex;
    justify-content: center;
    flex-direction: column;

    height: 100%;

    h1 {
      font-size: 6rem;
      line-height: 1.1;

      height: max-content;
    }

    h2 {
      color: hsla(var(--app-color-dark-hsl), 0.7);
    }
  }

  .hero-image img {
    max-width: 90%;
  }

  button {
    font-size: 1.618rem;
    color: var(--app-color-primary-contrast);

    padding: 0.7rem 1rem;
    margin: 3rem 0 0 0;

    width: max-content;

    background-image: linear-gradient(112.7deg, #fa983d 11.4%, #f5853c 70.2%);

    transition: box-shadow 150ms ease-in;

    border-radius: 0.5rem;

    &:hover,
    &:focus-visible {
      box-shadow: 0 0 0 0.25rem hsla(var(--app-color-primary-hsl), 0.4);
    }
  }
</style>
