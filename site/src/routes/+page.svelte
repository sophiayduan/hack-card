 <script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/Scene.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
    import CursorFollower from '$lib/components/CursorFollower.svelte'
    import EmailInput from '$lib/components/EmailInput.svelte'
    // import { gsap } from 'gsap'

    import { onMount, onDestroy } from 'svelte';
    // import { ScrollTrigger } from 'gsap/ScrollTrigger'

    let gsap: typeof import('gsap').gsap;
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
    let tween: import('gsap').gsap.core.Tween | undefined;

    onMount(async() => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');

      gsap = gsapModule.gsap;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger)

      const coords = document.getElementById('coords');
      document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        x = checkCoords(x);
        y = checkCoords(y);

        if (coords) {
          coords.innerHTML = 'X' + ' ' + x + ' ' + '|'+ ' ' + 'Y'+ ' ' + y;
        }

      })

      function checkCoords(i) {
        if (i < 1000) {
          i = "0" + i
        }
        else if (i < 100) {
          i = "00" + i;
        } else if ( i < 10) {
          i ="000" + i;
        }
          else if ( i === 0) {
            i = "0000"
          }
        return i;
      }

      const clock = document.getElementById('clock');
      function liveClock() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        m = checkTime(m);
        s = checkTime(s);
        if (clock) {
        clock.innerHTML = h + ':' + m + ':' + s;
        setTimeout(liveClock, 1000);
        }
      }

      function checkTime(i) {
        if (i < 10) {
          i = "0" + 1
        };
        return i;
      }

      liveClock();
        tween = gsap.from('.about', {
          yPercent: 20,
          ease: 'power1.out',
          // duration:0.6,
          scrollTrigger: {
            trigger: ".trigger",
            start: 'top center',
            end: '+=500',
            // onEnter onLeave onEnterBack onLeaveBack
            toggleActions: 'play none reverse none',
            scrub: 2,
            // markers: true
          }
        })



    });
    onDestroy(() => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    });

</script>


<div class="fixed inset-0 bg-[url('../lib/assets/noise.gif')] opacity-12 pointer-events-none"></div>
<section id="hero" class="w-screen min-h-screen xl:h-screen px-6 py-10 bg-beige xl:p-14 grid grid-cols-1 grid-rows-1 bg-local overflow-hidden place-items-center">
    <div class="z-100 absolute top-1/2 -translate-y-1/2 right-0 w-12 h-40 hover:w-14 mix-blend-multiply"
>
        <div class=" absolute inset-0 duration-300 bg-red text-red rounded-l-xs">
        </div>
    </div>

    <div class="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1 h-180 w-180 xl:h-full xl:w-auto aspect-square ml-auto xl:pr-20 place-items-center z-100">
        <div class="col-start-1 row-start-1 relative h-full w-full pointer-events-none">
            <img src="/bg-circles.svg" alt="" class="absolute inset-0 h-full object-contain scale-130 left-8" />
        </div>
        <div class="col-start-1 row-start-1 relative h-full w-[80%] z-0 mt-10">
            <Canvas>
                <Scene />
            </Canvas>
        </div>

        <div class="col-start-1 row-start-1 w-full h-full flex items-center justify-center font-mono font-bold ">
            <Navbar />
        </div>
    </div>
    <div class="col-start-1 row-start-1 flex flex-col gap-4 w-full h-full relative text-brown">
        <div class="flex items-start gap-2">
            <!-- <h1 class="sm:text-[20vh] xl:text-[12vw] leading-50 3xl:leading-65 font-bebas font-semibold select-none bg-red">HACK CARD</h1> -->
            <img src="/hack-card.svg" alt="" class="h-[14vh] xl:h-[10vw] select-none object-fit" />
            <span class="text-4xl rotate-180 font-bebas -mt-2">&copy;</span>
        </div>

        <h3 class="text-[1.8rem] xl:text-[2rem] leading-8 xl:leading-9 text-brown font-medium max-w-xl xl:max-w-2xl">A printed circuit board design competition with prizes for teens of <span class=" text-blue-700 font-medium whitespace-nowrap">all skill levels</span>.</h3>

        <EmailInput />
        <div class="mt-auto space-y-6">
            <h4 class="text-xl font-mono my-1">CATEGORIES:</h4>
                <ol class="hover:cursor-pointer font-mono text-xl leading-tight w-fit whitespace-nowrap">
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">01) OVERALL PICKS</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">02) BEST BEGINNER PCB</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">03) MOST ARTISTIC</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full pr-4">04) MOST NON-BUSINESS CARD LIKE</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">05) MOST FUNCTIONAL</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">06) COMMUNITY PICK</li>
                </ol>
        </div>
    </div>

    <div class="absolute z-100 top-2 text-sm xl:top-4 left-0 px-6 xl:px-14 w-full h-fit flex font-mono text-brown font-light gap-28 mix-blend-multiply pointer-events-none">
        <span>A HACKCLUB EVENT</span>
        <div class="flex ml-auto gap-2 w-fit">
            <span id="clock"></span>
            <span class="text-gray"> /24H</span>
        </div>
        <span class="text-right">BY SOPHIA DUAN</span>
    </div>
    <div class="fixed bottom-2 text-sm lg:text-base xl:bottom-4 left-0 px-8 xl:px-16 w-full h-fit font-mono text-brown font-light ml-auto gap-14 mix-blend-multiply pointer-events-none grid grid-cols-3">
        <div></div>
        <span id="coords" class="mt-auto place-self-center">X 0000 | Y 0000 </span>
        <div class="flex flex-col items-end gap-2 place-self-end">
            <img src="/logo.svg" alt="" class="mix-blend-multiply opacity-100 h-12" />
            <span>&copy; 2026</span>
        </div>
    </div>
</section>
