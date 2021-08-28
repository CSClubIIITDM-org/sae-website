<script>
  import { lazy } from './lazy';

  const teamList = [
    { name: 'SENTHIL NIRAI NILAVU P S', rollNo: 'ME20B2004' },
    { name: 'VISHNUVARDHAN IYENGAR', rollNo: 'ME20B1007' },
    { name: 'PRASHANT JHA', rollNo: 'MPD19I022' },

    { name: 'S ABAETHAN', rollNo: 'MDM19B015' },
    { name: 'VYSHNAV K', rollNo: 'MFD19I016' },
    { name: 'PULLIPUDI SRI SAHIL', rollNo: 'ME20B1027' },

    { name: 'S MUTHU SHRAVAN', rollNo: 'ME20B1009' },
    { name: 'KANAKAM SRIRAM', rollNo: 'EC20B1060' },
    { name: 'ANJAN MAHAPATRA', rollNo: 'ME20B1006' },

    { name: 'PRANAV YOGESH R K', rollNo: 'ME20B1023' },
    { name: 'RISHKIESH KUMAR YADAV', rollNo: 'ME20B2040' },
    { name: 'PIYUSH KUMAR SINHA', rollNo: 'ME20B1037' },
  ];
</script>

<section class="members">
  <div class="row-1">
    <img src="/placeholder-person.svg" alt="" use:lazy />
  </div>
  <div class="row-2">
    {#each teamList as { name, rollNo }}
      <div class="flex flex-col items-center">
        <img src="/placeholder-person.svg" alt="" use:lazy />
        <p class="mt-4">{name}</p>
      </div>
    {/each}
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
