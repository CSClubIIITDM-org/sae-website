<footer>
  <section class="location-info">
    <div class="address">
      <div>
        <p>Inferno Dragsters,</p>
        <p>IIITDM Kancheepuram Campus, Chennai, TamilNadu-600127</p>
        <p>www.infernodragsters.in</p>

        <br />

        <p>Prashant Jha</p>
        <p>Team Lead</p>
        <p>Mob No: 8102340948</p>
        <p>Email: mpd19i022@iiitdm.ac.in</p>

        <br />

        <p>Vyshnav K</p>
        <p>Bussiness and Marketing Head</p>
        <p>Mob No: 9447138708</p>
        <p>Email: mfd19i016@iiitdm.ac.in</p>

        <br />

        <p>Team MailID: contact@infernodragsters.in</p>
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://instagram.com/inferno_dragsters_iiitdm?utm_medium=copy_link"
          >
            Instagram
          </a>
          &nbsp;&nbsp;
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/company/inferno-dragsters/"
          >
            Linkedin
          </a>
          &nbsp;&nbsp;
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/Inferno-Dragsters-iiitdm-104021848677545/"
          >
            Facebook
          </a>
        </p>

        <br />

        <p>Developed by CS Club</p>

        <br />
        <br />
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
    @apply grid grid-cols-2 w-1/1 <lg:(grid-cols-1 w-[95%]);
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
    @apply max-w-3/5 rounded-[0.5rem] <md:(max-w-1/1);
  }
</style>
