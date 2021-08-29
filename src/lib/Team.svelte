<script>
  import { lazy } from './lazy';

  const teamList = [
    [{ name: 'SHUBHANKAR', photo: 'shubhankar' }],
    [
      { name: 'PRASHANT JHA', photo: 'prashant-jha' },
      { name: 'S ABAETHAN', photo: 'abaethan' },
    ],

    [
      { name: 'VYSHNAV K', photo: 'vyshnav-k' },
      { name: 'VISMAY CHAND', photo: 'vismay-chand' },
      { name: 'JOSEPH MELVIN KUZHIMATTATHIL', photo: 'joseph' },
    ],

    [
      { name: 'VISHNUVARDHAN IYENGAR', photo: 'vishnu' },
      { name: 'S MUTHU SHRAVAN', photo: 'muthu-sharavan' },
      { name: 'PULLIPUDI SRI SAHIL', photo: 'sahil' },
      { name: 'SENTHIL NIRAI NILAVU P S', photo: 'nirai' },
    ],

    [
      { name: 'KANAKAM SRIRAM', photo: 'sriram' },
      { name: 'ANJAN MAHAPATRA', photo: 'anjan' },
      { name: 'PRANAV YOGESH R K', photo: 'pranav' },
      { name: 'RISHKIESH KUMAR YADAV', photo: 'rihsikesh' },
      { name: 'PIYUSH KUMAR SINHA', photo: 'piyus-kumar-sinha' },
    ],
  ];
</script>

<section class="members">
  {#each teamList as row, index}
    <div class="row-{index + 1}">
      {#each row as { name, photo }}
        <div class="flex flex-col items-center">
          <img src="/team/opt/{photo}.webp" alt={name} use:lazy />
          <p class="mt-4">{name}</p>
        </div>
      {/each}
    </div>
  {/each}
</section>

<style lang="scss">
  img {
    @apply h-[10rem] rounded-[50%];
  }

  .row-1,
  .row-2,
  .row-3,
  .row-4,
  .row-5 {
    @apply my-8;
  }

  .row-1 {
    @apply flex justify-center mb-8;
  }

  .row-2 {
    @apply grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] place-items-center;
  }

  .row-3 {
    @apply grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] place-items-center;
  }

  .row-4 {
    @apply grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] place-items-center;
  }

  .row-5 {
    @apply grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] place-items-center;
  }
</style>
