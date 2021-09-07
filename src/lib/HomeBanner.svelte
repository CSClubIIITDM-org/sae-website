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
    @apply w-1/1 m-8 grid grid-cols-2 <lg:(grid-cols-1);
  }

  .tagline {
    @apply flex justify-center flex-col h-1/1;

    h1 {
      @apply h-max w-1/1 text-[6rem] <lg:(text-[5rem]) leading-[1.1];
    }

    h2 {
      @apply text-[2.1rem] <lg:(text-1.7rem mt-4) w-1/1 leading-relaxed text-[hsla(var(--app-color-dark-hsl),0.7)];
    }
  }

  .hero-image img {
    @apply max-w-9/10 <lg:(hidden);
  }
</style>
