<script>
  import csmaTitle from '$lib/assets/csma-technology-title.png';
  import homeBanner from '$lib/assets/home/CSMA_Graphic_Waves_Top_Right_Cropped.png';
  import Typewriter from 'svelte-typewriter';
  import { fly } from 'svelte/transition';

  const buildItems = [
    { text: 'Custom Websites', color: 'text-blue-500' },
    { text: 'Educational Apps', color: 'text-orange-500' },
    { text: 'Marketing Tools', color: 'text-green-500' },
    { text: 'Your Next Project', color: 'text-purple-500' }
  ];
  let currentItem = $state(0);
  const interval = setInterval(() => {
    currentItem = currentItem + 1;
    if (currentItem === buildItems.length - 1) {
      clearInterval(interval);
    }
  }, 4000);
</script>

<svelte:head>
  <title>CSMA Technology</title>
</svelte:head>

<img
  alt=""
  src={homeBanner}
  class="absolute top-0 right-0 max-w-[50vw] max-h-[75vh]
  md:max-w-[33vw]" />
<div class="h-full bg-tertiary-500 w-full">
  <div class="banner pt-20 mb-8 w-fit mx-auto">
    <div class="banner-text">
      <img class="banner-image mx-auto" src={csmaTitle} alt="CSMA Technology" />

      <div
        class="banner-title grid grid-cols-2 mt-8 w-fit mx-auto text-3xl max-md:text-lg font-bold h-16"
        style="font-family: kode mono;">
        <div class="text-right mr-2 h-10 tracking-tighter">NOW BUILDING:</div>
        {#key currentItem}
          <span class={`col-start-2 row-start-1 w-30 `} in:fly={{ y: 100 }} out:fly={{ y: -100 }}>
            <Typewriter delay={500} interval={80} keepCursorOnFinish --cursor-color="green" --cursor-width=".5ch">
              <div class={`${buildItems[currentItem].color}`}>
                {buildItems[currentItem].text}
              </div>
            </Typewriter>
          </span>
        {/key}
      </div>

      <p class="banner-subtitle text-2xl">We're here to build apps and drink coffee, and we're all out of coffee.</p>
      <p class="text-green-700 text-sm text-right" style="font-family: kode mono;">
        //It's a joke; we have plenty of coffee. Don't panic.
      </p>
    </div>
  </div>

  <div class="w-fit mx-auto max-w-[60rem]">
    <div class="p-6 m-4 rounded-3xl mx-auto">
      <div class=" mx-auto">
        <p class="text-justify leading-7 mb-6">
          Based in Miami and Houston, we're a team of developers with 10+ years of experience building enterprise
          software, who've now decided to do anything but that. We love building novel apps, bringing small businesses
          and organization onto the web, and helping people like you bring your ideas to life.
        </p>
      </div>
      <div class="flex flex-row flex-wrap max-sm:flex-col gap-4 justify-center w-full">
        <div class="card p-6 sm:min-w-64 rounded-xl variant-glass-surface">
          <p class="h3 text-2xl mb-4">SEE WHAT WE DO</p>
          <a class="btn btn-md variant-filled-secondary" href="/services">Our Services</a>
        </div>
        <div class="card p-6 sm:min-w-64 rounded-xl variant-glass-surface">
          <p class="h3 text-2xl mb-4">GET IN TOUCH</p>
          <a class="btn btn-md variant-filled-primary" href="/contact">Contact Us</a>
        </div>
        <div class="card p-6 sm:min-w-64 rounded-xl variant-glass-surface">
          <p class="h3 text-2xl mb-4">CHECK OUT OUR WORK</p>
          <a class="btn btn-md variant-filled-surface" href="/projects">Our Projects</a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .banner-image {
    margin-top: 2rem;
    max-width: 60%;
  }
</style>
