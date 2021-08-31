<footer>
  <section class="location-info">
    <div class="address">
      IIITDM Kancheepuram <br /> Vandalur-Kelambakkam Road, Chennai- 600127.
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
