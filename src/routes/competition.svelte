<script>
  import { fadeIn, fadeOut } from '$lib/fade';
  import Footer from '$lib/Footer.svelte';
  import Nav from '$lib/Nav.svelte';
</script>

<Nav />

<main in:fadeIn out:fadeOut class="w-1/1 pt-32 flex items-center flex-col">
  <h2>Competition</h2>

  <section class="stats-section">
    <section class="stats">
      <section class="counter">
        <h3>50+</h3>
        <p>countries</p>
      </section>
      <section class="counter">
        <h3>500+</h3>
        <p>teams</p>
      </section>
      <section class="counter">
        <h3>10000+</h3>
        <p>students</p>
      </section>
    </section>

    <p>
      Formula Student competition challenges teams of university undergraduate students to compete
      with a life-size formula style vehicle in areas of engineering design, overall cost,
      marketability and dynamic performance. The competition aims to encourage students to gain
      hands-on practical experience, while applying engineering theories studied in the classroom
      and simultaneously learn the art of teamwork and management. Over the course of competition, a
      jury of experts from the motorsport, automotive and supplier industries judge the design, cost
      and business planning of all the teams to determine the best team and vehicle; in addition the
      team's on-track performance scores will demonstrate how well they hold up under real-life
      conditions.
    </p>

    <br /><br />

    <p>
      The competition is divided into 2 categories - Static and Dynamics - which account for a total
      of 1000 points.
    </p>
  </section>

  <section class="events">
    <div class="static">
      <h3>Static Events</h3>

      <button>Engineering Design Event</button>
      <button>Cost and manufacturing event</button>
      <button>Business event</button>
    </div>
    <div class="dynamic">
      <h3>Dynamic Events</h3>

      <button>Skidpad event</button>
      <button>Acceleration event</button>
      <button>Autocross event</button>
      <button>Endurance event</button>
      <button>Efficiency event</button>
    </div>
  </section>

  <section class="images">
    <img src="/competition/static-events.png" alt="Static Events pie chart" />
    <img src="/competition/dynamic-events.png" alt="Dynamic Events pie chart" />
    <img src="/competition/total-points.png" alt="Total points pie chart" />
  </section>

  <Footer />
</main>

<style lang="scss">
  h2 {
    @apply text-[4rem] text-center my-4;
  }

  .stats-section {
    @apply w-4/5 mb-8;
  }

  .stats {
    @apply grid grid-cols-3 justify-center my-8 w-1/1;
  }

  .counter {
    @apply flex flex-col items-center;

    h3 {
      @apply text-8xl font-300 leading-[1.1] text-$app-color-primary;
    }

    p {
      @apply uppercase text-3xl;
    }
  }

  .events {
    @apply grid grid-cols-2 justify-center w-4/5 mb-8;

    & > div {
      @apply flex flex-col items-center;
    }

    h3 {
      @apply text-3xl font-400 leading-[1.1] text-$app-color-primary;
    }
  }

  .images {
    @apply w-4/5 mb-8 grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] place-items-center;

    img {
      @apply h-14rem rounded-1xl;
    }
  }

  button {
    @apply py-0.5rem px-1rem mt-2rem w-max rounded-[4px] text-[1.414rem] leading-relaxed;

    color: var(--app-color-primary-contrast);

    background-image: var(--app-gradient-primary);

    transition: box-shadow 150ms ease-in;

    cursor: default;
  }
</style>
