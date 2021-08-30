<script>
  import { lazy } from './lazy';

  const teamList = [
    [{ name: 'DR. SHUBHANKAR CHAKRABORTY', photo: 'shubhankar', role: 'FACULTY ADVISOR' }],

    [
      { name: 'PRASHANT JHA', photo: 'prashant-jha', role: 'LEADER & VEHICLE DYNAMICS HEAD' },
      { name: 'S ABAETHAN', photo: 'abaethan', role: 'DEP. LEADER & POWERTRAIN HEAD' },
    ],

    [
      { name: 'VYSHNAV K', photo: 'vyshnav-k', role: 'BUSINESS & MARKETING HEAD' },
      { name: 'VISMAY CHAND', photo: 'vismay-chand', role: 'VEHICLE PERFORMANCE HEAD' },
      { name: 'JOSEPH MELVIN KUZHIMATTATHIL', photo: 'Joseph', role: 'BRAKE SYSTEM HEAD' },
    ],

    [
      { name: 'VISHNUVARDHAN IYENGAR', photo: 'vishnu', role: 'ENGINE+COOLING' },
      { name: 'S MUTHU SHRAVAN', photo: 'muthu-sharavan', role: 'DRIVETRAIN' },
      { name: 'PULLIPUDI SRI SAHIL', photo: 'sahil', role: 'DRIVETRAIN' },
      { name: 'SENTHIL NIRAI NILAVU P S', photo: 'nirai', role: 'AERODYNAMICS' },
    ],

    [
      { name: 'KANAKAM SRIRAM', photo: 'sriram', role: 'ELECTRONICS' },
      { name: 'ANJAN MAHAPATRA', photo: 'anjan', role: 'STEERING & CHASSIS' },
      { name: 'PRANAV YOGESH R K', photo: 'pranav', role: 'BRAKES' },
      { name: 'RISHKIESH KUMAR YADAV', photo: 'rihsikesh', role: 'MECHATRONICS' },
      { name: 'PIYUSH KUMAR SINHA', photo: 'piyus-kumar-sinha', role: 'SUSPENSION & CHASSIS' },
    ],
  ];
</script>

<section class="members">
  {#each teamList as row, index}
    <div class="row-{index + 1}">
      {#each row as { name, photo, role }}
        <div class="flex flex-col items-center">
          <img src="/team/opt/{photo}.webp" alt={name} use:lazy />
          <p class="mt-4">{name}</p>
          <p class="mt-2 text-0.8rem text-gray-400">{role}</p>
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
    @apply my-16 <sm:(gap-8) grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] place-items-center;
  }
</style>
