<section class="banner">
  <div class="tagline">
    <h1>Inferno Dragsters</h1>
    <h2>Be limitless to follow your passion</h2>
    <!-- <button>About us</button> -->
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
      @apply h-max text-[6rem] leading-[1.1];
    }

    h2 {
      @apply text-[2.1rem] leading-relaxed;

      color: hsla(var(--app-color-dark-hsl), 0.7);
    }
  }

  .hero-image img {
    @apply max-w-9/10;
  }
</style>
