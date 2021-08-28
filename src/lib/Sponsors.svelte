<script>
  import Hr from './Hr.svelte';
  import { lazy } from './lazy';
</script>

<section class="sponsors-container">
  <h2>Why sponsor us?</h2>
  <p class="text-center">
    Inferno Dragsters is the Formula SAE team of IIITDM Kancheepuram. We aim to conceive, design,
    fabricate, develop and compete with formula style vehicles. We strive to become a globally
    competitive team by demonstrating our creativity and engineering skills.
  </p>
  <br />
  <div class="flex justify-center">
    <p class="text-center w-4/5">
      <i>
        Being a key player in your respective industry, you could help us with significant support
        for such such a prestigious project of undergraduate students. It would be our privilege to
        have you as our sponsor. Your support would help us to achieve our dreams.
      </i>
    </p>
  </div>

  <div class="buttons justify-evenly flex">
    <button>Sponsorship Brochure</button>
    <button>Collaborate with us</button>
    <button>CrowdFunding</button>
  </div>
  <br/>
</section>

<div class="m-8">
  <Hr />
</div>

<section class="sponsors-container">
  <h2>Our Sponsors</h2>
  <br/>

  <div class="row-2">
    <div class="flex flex-col items-center">
      <img src="/placeholder-person.svg" alt="" use:lazy />
      <p class="mt-4">Some name</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="/placeholder-person.svg" alt="" use:lazy />
      <p class="mt-4">Some name</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="/placeholder-person.svg" alt="" use:lazy />
      <p class="mt-4">Some name</p>
    </div>
  </div>

  <div class="flex justify-center">
    <button>Our Supporters</button>
  </div>
</section>

<style lang="scss">
  .sponsors-container {
    @apply w-4/5;
  }

  h2 {
    @apply text-[4rem] text-center my-4;
  }

  button {
    @apply py-0.5rem px-1rem mt-3rem w-max rounded-1xl text-[1.414rem] leading-relaxed;

    color: var(--app-color-primary-contrast);

    background-image: var(--app-gradient-primary);

    transition: box-shadow 150ms ease-in;

    &:hover,
    &:focus-visible {
      box-shadow: 0 0 0 0.25rem hsla(var(--app-color-primary-hsl), 0.4);
    }
  }

  img {
    @apply h-[10rem];
  }

  .row-2 {
    @apply grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] place-items-center gap-8;
  }
</style>
