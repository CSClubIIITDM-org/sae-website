<script>
  import { lazy } from './lazy';
</script>

<section class="members">
  <div class="row-1">
    <img src="/placeholder-person.svg" alt="" use:lazy />
  </div>
  <div class="row-2">
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
    <img src="/placeholder-person.svg" alt="" use:lazy />
  </div>
</section>

<style lang="scss">
  img {
    @apply h-[10rem];
  }

  .row-1 {
    @apply flex justify-center mb-8;
  }

  .row-2 {
    @apply grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] place-items-center gap-8;
  }
</style>
