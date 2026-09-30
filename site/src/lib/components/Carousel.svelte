<script lang="ts">
    import { onMount } from 'svelte';
    let slideIndex = $state(0);
    let progressBars: HTMLDivElement[] = [];
    import gsap from 'gsap';


    function nextSlide() {
      slideIndex += 1;
      if (slideIndex >= images.length) {
        slideIndex = 0;
      }
    }

    function previousSlide() {
      slideIndex -= 1;

      if (slideIndex < 0) {
        slideIndex = images.length - 1;
      }
    }

    onMount(() => {
      const timer = setInterval(nextSlide, 4000);

      return () => clearInterval(timer);

    $effect(() => {
      const activeBar = progressBars[slideIndex];

      if (!activeBar) return;

      gsap.set(activeBar, {
        width: '0%',
      });

      gsap.to(activeBar, {
        width: '100%',
        duration: 4,
        ease: 'none',
      });

    })
    })
    export const images = [
      {
        alt: '1',
        src: '/hackclubbers.png',
        title: '1',
      },
      {
        alt: '2',
        src: '/hc-bg.svg',
        title: '2',
      },
      {
        alt: '3',
        src: '/logo-red.svg',
        title: '3',
      },
    ]
</script>

<button onclick={nextSlide} class="cursor-pointer w-full h-full flex items-center justify-between relative bg-gray overflow-hidden">
    <!-- <button onclick={previousSlide} class="w-10 h-10 bg-red">&lt;</button> -->
    <div>
        {#each images as image, i}
            {#if i === slideIndex}
                <img src={image.src} alt={image.alt} class=""/>
            {/if}
        {/each}
    </div>
    <!-- <button class="w-10 h-10 bg-red">&gt;</button> -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {#each images as image, i}
            <div class={`h-1.5 rounded-full transition-[width] duration-400 ${i === slideIndex ? 'bg-red w-8' : 'bg-brown w-3'}`}>
                {#if i === slideIndex}
                    <div bind:this={progressBars[i]} class="max-w-full rounded-l-full h-full bg-green mr-auto"></div>
                {/if}
            </div>
        {/each}
    </div>
</button>
