<footer>
  <section class="location-info">
    <div class="address">
      <div>
        <p>Contact Us:</p>

        <p>VYSHNAV K</p>
        <p>mfd19i016@iiitdm.ac.in</p>
        <p>+91 9447138708</p>

        <br />

        <p>Follow us on:</p>
        <p>
          <a href="https://instagram.com/inferno_dragsters_iiitdm?utm_medium=copy_link">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/inferno-dragsters/">Linkedin</a>
        </p>

        <br />

        <p>Developed by CS Club</p>
      </div>
    </div>
    <div class="map">
      <a href="https://goo.gl/maps/NZBSQfC8KD9aRJFr5">
        <img src="/assets/institute-map.png" alt="Institute map" />
      </a>
    </div>
  </section>
</footer>

<style lang="scss">
  footer {
    @apply flex justify-center;
  }

  .location-info {
    @apply grid grid-cols-2 w-4/5;
  }

  .address {
    @apply flex flex-col items-center justify-center;
  }

  .map {
    @apply flex justify-center items-center;
  }

  .map a {
    @apply flex w-max justify-center items-center;
  }

  .map img {
    @apply max-w-3/5 rounded-[0.5rem];
  }
</style>
