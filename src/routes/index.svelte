<script>
  import { fadeIn, fadeOut } from '$lib/fade';
  import HomeBanner from '$lib/HomeBanner.svelte';
  import Hr from '$lib/Hr.svelte';
  import Sponsors from '$lib/Sponsors.svelte';
  import Team from '$lib/Team.svelte';
</script>

<main in:fadeIn out:fadeOut>
  <div id="home-link" />

  <HomeBanner />

  <div class="m-8">
    <Hr />
  </div>

  <section class="stats-section">
    <h2 id="about-us">About Us</h2>
    <section class="stats">
      <section class="counter">
        <h3>25+</h3>
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
      Inferno Dragsters is a team of 25+ students spread across the different disciplines with
      individual specializations and share a common interest in the field of automobiles. Working at
      IIITDM Kancheepuram, Inferno Dragsters aims to challenge its competitors and bring glory to
      our alma-mater. With a fair blend of technical prowess and excellent coordination, the team
      will leave no stone unturned while conquering the challenges.
    </p>
    <h3 class="adrenaline-rush-tagline text-[2.23rem] text-center mt-8 text-$app-color-primary">
      FEEL THE ADRENALINE RUSH
    </h3>
  </section>

  <div class="m-8">
    <Hr />
  </div>

  <section class="team">
    <h2 id="team">TEAM</h2>
    <Team />
  </section>

  <div class="mt-2 mb-8">
    <Hr />
  </div>

  <Sponsors />

  <div class="m-8">
    <Hr />
  </div>
</main>

<style lang="scss" windi:global>
  main {
    @apply w-4/5 <lg:(w-95/100) pt-32 flex items-center flex-col;
  }

  h2 {
    @apply text-[4rem] text-center my-4;
  }

  .stats-section {
    @apply w-1/1 mb-8;
  }

  .stats {
    @apply grid grid-cols-3 <lg:(grid-cols-1 gap-[2.5rem]) justify-center my-8 w-1/1;
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

  .team {
    @apply w-1/1 mb-0;
  }
</style>
