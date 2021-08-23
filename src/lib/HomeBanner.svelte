<section class="banner">
  <div class="tagline">
    <h1>SAE Club</h1>
    <h2>Be limitless to follow your passion</h2>
    <button>About us</button>
  </div>
  <div class="hero-image">
    <img src="/assets/watermark.webp" alt="SAE WaterMark" />
  </div>
</section>

<style lang="scss">
  .banner {
    @apply w-4/5 m-8 grid grid-cols-2;
  }

  .tagline {
    @apply flex justify-center flex-col h-1/1;

    h1 {
      @apply h-max;

      font-size: 6rem;
      line-height: 1.1;
    }

    h2 {
      @apply text-[1.618rem];
      color: hsla(var(--app-color-dark-hsl), 0.7);
    }
  }

  .hero-image img {
    @apply max-w-9/10;
  }

  button {
    @apply py-0.5rem px-1rem mt-3rem w-max rounded-1xl text-[1.618rem] leading-relaxed;

    color: var(--app-color-primary-contrast);

    background-image: var(--app-gradient-primary);

    transition: box-shadow 150ms ease-in;

    &:hover,
    &:focus-visible {
      box-shadow: 0 0 0 0.25rem hsla(var(--app-color-primary-hsl), 0.4);
    }
  }
</style>
