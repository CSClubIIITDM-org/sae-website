<header>
  <div class="logo">
    <img src="/assets/logo.webp" alt="SAE Logo" />
  </div>
  <nav>
    <div class="w-max">
      <a href="/" sveltekit:prefetch>HOME</a>
      <a href="/#team" sveltekit:prefetch>TEAM</a>
      <a href="/#sponsors" sveltekit:prefetch>SPONSORS</a>
      <a href="/competition" sveltekit:prefetch>COMPETITION</a>
    </div>
  </nav>
  <div class="inst-logo">
    <!-- <img src="/institute-logo.webp" alt="IIITDMK logo" /> -->
  </div>
</header>

<style lang="scss">
  header {
    @apply grid grid-cols-[auto,1fr,auto] gap-4 absolute w-[80vw] top-0 left-[10vw] py-4;
  }

  .logo img {
    @apply max-w-20;
  }

  nav {
    @apply flex justify-start items-center flex-row-reverse gap-12;
  }

  // .inst-logo img {
  //   @apply max-w-18;
  // }

  a[href] {
    --distance: calc(50% - 0.375rem);
    --opacity: 0.35;
    --duration: 150ms;
    --easing: ease-out;

    font-size: 1.3rem;
    font-weight: 600 !important;

    padding: 0 0.25rem;
    margin: 0 0.25rem;

    background-image: linear-gradient(
      transparent 0%,
      transparent var(--distance),
      hsla(var(--app-color-primary-hsl), var(--opacity)) var(--distance),
      hsla(var(--app-color-primary-hsl), var(--opacity)) 100%
    );
    background-size: 100% 200%;
    background-position: 0 0;

    transition: color var(--duration) var(--easing),
      background-position var(--duration) var(--easing),
      background-image var(--duration) var(--easing), border-radius var(--duration) var(--easing),
      --opacity var(--duration) var(--easing);

    &:hover,
    &:focus-visible {
      background-position: 0 100%;

      color: var(--app-color-primary-contrast);
      font-weight: 600 !important;

      border-radius: 0.25rem;

      --opacity: 1;
    }
  }
</style>
