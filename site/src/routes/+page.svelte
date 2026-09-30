 <script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/Scene.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
    import CursorFollower from '$lib/components/CursorFollower.svelte'

    import Carousel from '$lib/components/Carousel.svelte'

    import { onMount, onDestroy } from 'svelte';
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger)

    let tween: gsap.core.Tween

    const examples = $state([
      { id: 1, children: 'h-50', src: ''},
      { id: 2, children: 'h-100', src: ''},
      { id: 3, children: 'h-70', src: ''},
      { id: 4, children: 'h-40', src: ''},
      { id: 5, children: 'h-30', src: ''},
    ]);

    const examples2 = $state([
      { id: 1, children: 'h-50', src: ''},
      { id: 2, children: 'h-80', src: ''},
      { id: 3, children: 'h-60', src: ''},
      { id: 4, children: 'h-40', src: ''},
      { id: 5, children: 'h-30', src: ''},
    ]);

    const faqInfo = [
      {
        id: 1,
        question: "Is this really free? What's the catch?",
        answer: "Yes this is free, and there is no catch! The only requirement is that you're a teenager and that you submit a cool business card :)"
      },
      {
        id: 2,
        question: "Who is this for?",
        answer: "Teenagers aged 13-18 (13/18 included) that are curious about electronics! HACK CARD rewards everyone who submits a design with project funding + the opportunity to win additional prizes. Each teen should be able to find a suitable award category to target! "
      },
      {
        id: 3,
        question: "Can I follow a tutorial?",
        answer: "Yes and no. If you follow a tutorial, you must add an additional twist before submitting your project. We don't want to be judging tons of NFC-only cards - Make your card your own!"
      },
      {
        id: 4,
        question: "How long do I need to spend on my PCB?",
        answer: "There is no time requirement! We really care about quality > quantity, and that is what we'll be judging."
      },
      {
        id: 5,
        question: "What if my card is bad?",
        answer: "There are no 'bad' cards, just give it your best effort! If it's your first ever PCB, we have a 1st PCB category specifically for you!"
      },
      {
        id: 6,
        question: "How do I start learning PCB design?",
        answer: "Resources coming soon!"
      },
      {
        id: 7,
        question: "Can I use AI?",
        answer: "AI writting (e.g. in your GitHub repo), routing, and overall heavy reliance on AI is prohibited. Minimal use is allowed, just be cautious!"
      },
    ];

    const faqGeneral = [
      {
        id: 1,
        question: "What is Hack Club?",
        answer: "Hack Club is the 501(c)(3) non profit behind HACK CARD! We're a global community of teens making cool projects."
      },
      {
        id: 2,
        question: "Do I need a Hack Club Account?",
        answer: "Yup! By signing up you'll automatically receive one. To get shipped prizes, you'll need to verify your identity - this is how we check that you're actually a teenager!"
      },
      {
        id: 3,
        question: "Is this 'double dippable'?",
        answer: "No, HACK CARD isn't double dippable. For non-Hack Clubbers, double dipping means the ability to simultaneously submit one project to two Hack Club programs."
      },
      {
        id: 4,
        question: "Do I need to track my time with Hackatime?",
        answer: "Time tracking is not required! Although, if you choose to journal your project (read more on how to journal here), you'll earn additional HACK CARD merch."
      },
    ];

    let nudge: gsap.core.Timeline;

    onMount(() => {
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

      // nudge = gsap.timeline({
      //   delay:2,
      //   repeat: -1,
      //   repeatDelay:5,
      // })
      // .to('.nudge', { x: 30, duration: 0.4, ease: 'none' })
      // .to('.nudge', { x: -30, duration: 0.4, ease: 'none' })
      // .to('.nudge', { x: 30, duration: 0.4, ease: 'none' })
      // .to('.nudge', { x: -30, duration: 0.4, ease: 'none' });

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

        tween = gsap.from('.parallax', {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: '.trig',
            start: 'top center',
            end: '+=400',
            scrub: true,
            // markers: true
          }
        })

        gsap.fromTo('.scroll2', {
          x:-200,
          opacity:1,
        },
        {
          x:100,
          duration:2,
          scrollTrigger: {
            trigger: "#gallery",
            start: 'top top',
            end: '+=400',
            scrub: 2,
            // markers: true

          }
        })

        gsap.fromTo('.scroll', {
          x:100,
          opacity:1,
        },
        {
          x:-200,
          duration:2,
          scrollTrigger: {
            trigger: "#gallery",
            start: 'top top',
            end: '+=400',
            scrub: 2,
            // markers: true

          }
        })

        gsap.to('.banner', {
          x:120,
          scrollTrigger: {
            trigger: "#banner",
            start: 'center bottom',
            end:'+=600',
            scrub:1,
            // markers: true,
          }
        })


    });
    onDestroy(() => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    });

</script>


<!-- <div class="fixed inset-0 bg-[url('../lib/assets/noise.gif')] opacity-12 pointer-events-none"></div> -->
<section id="hero" class="w-screen min-h-screen xl:h-screen px-6 py-10 bg-beige xl:p-14 grid grid-cols-1 grid-rows-1 bg-local overflow-hidden place-items-center">
    <div class="z-100 absolute top-1/2 -translate-y-1/2 right-0 w-12 h-40 hover:w-14 mix-blend-multiply"
>
        <a href="/custom" target="" class="nudge absolute inset-0 duration-300 bg-red text-red rounded-l-xs"
            onmouseenter={() => nudge?.pause()}
            onmouseleave={() => nudge?.play()}
            onfocus={() => nudge?.pause()}
            onblur={() => nudge?.play()}
        >
        </a>
    </div>

    <div class="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1 h-180 w-180 xl:h-full xl:w-auto aspect-square ml-auto xl:pr-20 place-items-center z-100">
        <div class="col-start-1 row-start-1 relative h-full w-full pointer-events-none">
            <img src="/bg-circles.svg" alt="" class="absolute inset-0 h-full object-contain scale-130 left-8" />
            <!-- <Canvas>
                <Rings />
            </Canvas> -->
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
        <form class="form border focus:outline-1 transition-all  border-brown rounded-xs bg-white w-fit pointer-events-auto shadow-xs mt-2 xl:mt-4">
            <div class="h-14 min-w-60 md:min-w-110 rounded-sm flex p-1.5">
                <input name="email" type="email" placeholder="johncena@hackclub.com" class="w-full px-4 focus:outline-none text-base">
                <button class="rsvp ml-auto bg-green rounded-xs border border-brown  hover:bg-red hover:text-white transition-all cursor-pointer flex items-start gap-3 p-1 group focus:bg-[#C21B1F] focus:text-white">
                    <span class="text-3xl font-bebas pt-1">RSVP</span>
                    <div class="h-fit w-fit min-h-2.5 min-w-2.5 relative overflow-hidden">
                        <svg width="auto" height="10px" viewBox="0 0 37 37" class="absolute inset-0 group-hover:translate-x-full group-hover:-translate-y-full group-focus:translate-x-full group-focus:-translate-y-full transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg width="auto" height="10px" viewBox="0 0 37 37" class="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 group-focus:translate-x-0 group-focus:translate-y-0 transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </button>
            </div>
        </form>
        <div class="mt-auto space-y-6">
            <h4 class="text-xl font-mono my-1">CATEGORIES:</h4>
            <CursorFollower text="READ MORE" class="w-fit">
                <ol class="hover:cursor-pointer font-mono text-xl leading-tight w-fit whitespace-nowrap">
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">01) OVERALL PICKS</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">02) BEST BEGINNER PCB</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">03) MOST ARTISTIC</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full pr-4">04) MOST NON-BUSINESS CARD LIKE</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">05) MOST FUNCTIONAL</li>
                    <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">06) COMMUNITY PICK</li>

                </ol>
            </CursorFollower>
            <!-- <h3 class="text-3xl xl:text-5xl text-brown max-w-2xl font-semibold">For teens 13-18. <br /> Begins September 10th.</h3> -->
        </div>
    </div>

    <div class="absolute z-100 top-2 text-sm xl:top-4 left-0 px-6 xl:px-14 w-full h-fit flex font-mono text-brown font-light gap-28 mix-blend-multiply pointer-events-none">
        <span>A HACKCLUB EVENT</span>
        <div class="flex ml-auto gap-2 w-fit">
            <!-- <div id="cube-scene" class="w-100 h-100">
                <div id="cube">
                    <div id="front">front</div>
                    <div id="back">back</div>
                    <div id="left">left</div>
                    <div id="right">right</div>
                    <div id="top">top</div>
                    <div id="bottom">bottom</div>

                </div>
            </div> -->

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
<!-- <section class="trigger bg-beige min-h-200 w-screen p-6 xl:px-14 py-20 flex flex-col">
    <h3 class="text-[1.8rem] xl:text-[2rem] font-semibold pb-6">Welcome to Canada's biggest hackathon</h3>
    <div class="flex flex-col lg:flex-row justify-between items-start grow gap-20">
        <div class="w-full lg:max-w-2xl xl:max-w-3xl">
            <p class="font-mono text-lg"><span class=" bg-red/90 px-1 rounded-xs font-semibold">From October 15th to December 12th, make a PCB business card</span> to share with others. You can design something weird, practical, beautiful, or something else completely and get it funded + trade your cards! <span class="font-semibold">Your business card should roughly be the size of a business card: 3.5" x 2", and reasonably thick. Finally, your card should do more than a common business card, it shouldn't be replacable with paper!</span></p>
            <br />
            <br />
            <p class="mt-auto font-mono text-lg">If you've never designed a PCB before, we have <span class="underline font-semibold">learning resources</span>, and <span class="underline font-semibold">weekly calls</span> where we're ready to help! Also, feel free to ask questions or share your progress in <span class="whitespace-nowrap bg-red/90 px-1 rounded-xs font-semibold">#hack-card-ysws</span>!</p>
        </div>
        <CursorFollower class="" text="NEXT">
            <div class="h-80 w-140 bg-gray rounded-xs border border-brown flex flex-col justify-between items-center relative">
                <Carousel />
                <div class="absolute inset-0">
                    <span class="-translate-y-1/2">|</span>
                    <div class="w-full flex justify-between items-start">
                        <span class="-translate-x-1/2 rotate-90">|</span>
                        <span class="translate-x-1/2 rotate-90">|</span>
                    </div>
                    <span class="translate-y-1/2">|</span>
                </div>

            </div>
        </CursorFollower>

    </div>
    <div class="w-full flex lg:justify-end mt-14">
        <div class="h-fit p-3">
          <ol class="font-mono text-base lg:text-lg leading-tight min-w-100 whitespace-nowrap">
              <li class="hover:bg-[#D9D1CC] transition-all duration-700 ease-hover w-full border-b border-brown py-1 uppercase">01 - CHOOSE YOUR IDEA <span class="text-gray">// Make anything!</span></li>
              <li class="hover:bg-[#D9D1CC] transition-all duration-700 ease-hover w-full border-b border-brown py-1 uppercase">02 - MAKE YOUR SCHEMATIC<span class="text-gray">// And pick components</span></li>
              <li class="hover:bg-[#D9D1CC] transition-all duration-700 ease-hover w-full border-b border-brown py-1 uppercase">03 - MAKE YOUR PCB <span class="text-gray">// In a card shape!</span></li>
              <li class="hover:bg-[#D9D1CC] transition-all duration-700 ease-hover w-full pr-4 border-b border-brown py-1 uppercase">04 - SUBMIT YOUR CARD <span class="text-gray">// lets gooo</span></li>
              <li class="hover:bg-[#D9D1CC] transition-all duration-700 ease-hover w-full border-b border-brown py-1 uppercase">05 - VOTE ON PROJECTS<span class="text-gray">// for the com. award</span></li>
              <li class="hover:bg-[#D9D1CC] transition-all duration-700 ease-hover w-full border-b border-brown py-1 uppercase">06 - GET PRIZES!<span class="text-gray">// and awards..??</span></li>
          </ol>
        </div>
    </div>
</section> -->
<!-- <section class="about bg-gray w-screen p-6 xl:px-14 py-20 flex flex-col">
    <h3 class="text-8xl xl:text-9xl  text-beige max-w-2xl font-bebas">
        HOW IT WORKS
    </h3>
    <ul class="flex flex-col max-w-2xl font-mono gap-8 my-6">
        <li class="flex items-start gap-4">
            <div class="outline-2 outline-blue border-3 border-white bg-blue rounded-full aspect-square text-white w-10 h-10 font-bebas flex items-center justify-center text-2xl">1</div>
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
        </li>
        <li class="flex items-start gap-4">
            <div class="outline-2 outline-blue border-3 border-white bg-blue rounded-full aspect-square text-white w-10 h-10 font-bebas flex items-center justify-center text-2xl">2</div>
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
        </li>
        <li class="flex items-start gap-4">
            <div class="outline-2 outline-blue border-3 border-white bg-blue rounded-full aspect-square text-white w-10 h-10 font-bebas flex items-center justify-center text-2xl">3</div>
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
        </li>
        <li class="flex items-start gap-4">
            <div class="outline-2 outline-blue border-3 border-white bg-blue rounded-full aspect-square text-white w-10 h-10 font-bebas flex items-center justify-center text-2xl">4</div>
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
        </li>
    </ul>

    <div class="w-full h-fit mt-auto flex gap-4 xl:gap-10 items-end">
        <div class="w-100 aspect-video h-fit bg-beige rounded-xs group flex flex-col p-2">
            <div class="ml-auto h-fit w-fit min-h-3.5 min-w-3.5 relative overflow-hidden">
                <svg width="auto" height="14px" viewBox="0 0 37 37" class="absolute inset-0 group-hover:translate-x-full group-hover:-translate-y-full transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="auto" height="14px" viewBox="0 0 37 37" class="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="w-100 aspect-video h-fit bg-beige rounded-xs group flex flex-col p-2">
            <div class="ml-auto h-fit w-fit min-h-3.5 min-w-3.5 relative overflow-hidden">
                <svg width="auto" height="14px" viewBox="0 0 37 37" class="absolute inset-0 group-hover:translate-x-full group-hover:-translate-y-full transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="auto" height="14px" viewBox="0 0 37 37" class="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="w-200 aspect-video h-fit bg-beige rounded-xs group flex flex-col p-2">
            <div class="ml-auto h-fit w-fit min-h-3.5 min-w-3.5 relative overflow-hidden">
                <svg width="auto" height="14px" viewBox="0 0 37 37" class="absolute inset-0 group-hover:translate-x-full group-hover:-translate-y-full transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="auto" height="14px" viewBox="0 0 37 37" class="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>

</section> -->
<!-- <section id="gallery" class="bg-brown w-screen flex flex-col gap-6 py-14 xl:py-20 overflow-hidden">
    <h3 class="text-[2rem] leading-9 text-beige font-medium mx-6 xl:mx-14 ">Insert COPY HERE A printed circuit board design <br/> competition with prizes for teens <br/> of <span class="underline text-blue-700 font-medium whitespace-nowrap">all skill levels</span>competition with prizes for teens.</h3>
    <a href="/" class="bg-green rounded-xs text-red font-bebas text-2xl px-2 pt-1 flex w-fit items-center gap-2 h-fit mx-6 xl:mx-14 ">
        EXPLORE THE GALLERY
    </a>
    <div class="my-20 xl:my-38 space-y-5 scale-80 xl:scale-100">
        <ul class="scroll w-full flex gap-5 items-end">
            {#each examples as example}
            <li><img src={item.src} class={item.size} alt=""/></li>
                <li class="aspect-3.5/2 rounded-xs bg-gray {example.children}"></li>
            {/each}
        </ul>
        <ul class="scroll2 w-full flex gap-5 items-start">
            {#each examples2 as example}
            <li><img src={item.src} class={item.size} alt=""/></li>
                <li class="aspect-3.5/2 rounded-xs bg-gray {example.children}"></li>
            {/each}
        </ul>
    </div>
</section> -->
<!-- <section id="awards" class="bg-brown p-4 lg:p-6 py-20 xl:py-30 w-auto flex items-center justify-center">
    <div class="w-full h-screen rounded-xs m-4 grid grid-cols-1 grid-rows-1 bg-green place-items-center overflow-hidden">
        <div class="col-start-1 row-start-1 w-full h-full flex flex-col p-8">
            <div class="">
                <h2 class="font-dirty text-8xl xl:text-9xl text-red">awaRDs</h2>
                <p class="max-w-lg font-mono">Each project will have it's manufacturing costs funded, starting at <span class="bg-gray rounded-[1px] font-bold px-1 whitespace-nowrap">$25 and up to $125</span>. You'll also be able to <span class="bg-gray rounded-[1px] font-bold px-1 whitespace-nowrap">trade your extra PCBs</span> with fellow particiapnts!</p>
            </div>
            <div class="mt-auto ml-auto bg-white h-fit p-3 z-10 border border-dark-gray">
              <ol class="font-mono text-base lg:text-xl leading-tight min-w-fit whitespace-nowrap">
                  <li class="hover:bg-gray/60 transition-all duration-700 ease-hover w-full border-b border-brown py-2">01 OVERALL PICKS</li>
                  <li class="hover:bg-gray/60 transition-all duration-700 ease-hover w-full border-b border-brown py-2">02 BEST BEGINNER PCB</li>
                  <li class="hover:bg-gray/60 transition-all duration-700 ease-hover w-full border-b border-brown py-2">03 MOST ARTISTIC</li>
                  <li class="hover:bg-gray/60 transition-all duration-700 ease-hover w-full pr-4 border-b border-brown py-2">04 MOST NON-BUSINESS CARD LIKE</li>
                  <li class="hover:bg-gray/60 transition-all duration-700 ease-hover w-full border-b border-brown py-2">05 MOST FUNCTIONAL</li>
                  <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full pt-2">06 COMMUNITY PICK</li>

              </ol>
            </div>
        </div>
        <div class="col-start-1 row-start-1 w-60 h-90 lg:w-80 lg:h-120 relative">
            <div class="absolute inset-0 bg-white rounded-sm border border-brown origin-bottom -rotate-30 -translate-x-30 shadow-xs">
            </div>
            <div class="absolute inset-0 bg-white rounded-sm border border-brown origin-bottom -rotate-20 -translate-x-20 shadow-xs">
            </div>
            <div class="absolute inset-0 bg-white rounded-sm border border-brown origin-bottom -rotate-10 -translate-x-10 shadow-xs">
            </div>
            <div class="absolute inset-0 bg-white rounded-sm border border-brown origin-bottom rotate-0 translate-x-0 shadow-xs">
            </div>
            <div class="absolute inset-0 bg-white rounded-sm border border-brown origin-bottom rotate-10 translate-x-10 shadow-xs">
            </div>
            <div class="absolute inset-0 bg-white rounded-sm border border-brown origin-bottom rotate-20 translate-x-20 shadow-xs">
            </div>
            <div class="absolute inset-0 bg-white rounded-sm border border-brown origin-bottom rotate-30 translate-x-30 shadow-xs">
            </div>
        </div>
    </div>

</section> -->
<!-- <div id="banner" class="w-full h-8 bg-red flex items-center justify-center font-mono text-beige whitespace-nowrap overflow-hidden">
    <p class="banner">FREE PROJECT FUNDING & STICKERS FOR ALL - FREE PROJECT FUNDING & STICKERS FOR ALL - FREE PROJECT FUNDING & STICKERS FOR ALL - FREE PROJECT FUNDING & STICKERS FOR ALL - FREE PROJECT FUNDING & STICKERS FOR ALL - </p>
</div> -->
<!-- <section id="faq" class="bg-beige h-auto w-screen p-6 xl:px-14 py-20 flex flex-col">
    <h2 class="font-bebas text-8xl xl:text-9xl text-brown my-4">FAQ</h2>

    <FAQ title="GENERAL" items={faqInfo} />
    <div class="pt-18"></div>
    <FAQ title="HACK CLUB" items={faqGeneral} />

    <div class="font-bebas text-2xl text-darl-gray mt-30">
        <span>Still have questions? <br />email me at <span class="bg-green text-red px-2 rounded-xs">sophia [@] hackclub.com</span></span>
    </div>
</section> -->
<!-- <section id="#who" class="min-h-240 w-screen p-6 xl:px-14 py-14 xl:pt-24 text-gray flex flex-col gap-14">

    <p class="text-red mx-auto font-mono text-3xl tracking-wide">[ WHO'S BEHIND THIS ] </p>
    <div class="flex flex-col lg:flex-row gap-10 xl:gap-60 h-full grow relative">
        <div class="bg-[url('/decor.svg')] bg-center bg-contain bg-no-repeat absolute inset-0 h-140 w-full"></div>
        <div class="parallax w-full xl:w-1/3 space-y-4 flex flex-col trig h-full">
            <div class="w-full sm:w-100 h-80 rounded-xs overflow-hidden">
                <img src="/sophia1.png" alt="sophia" class="h-full w-auto object-cover opacity-80 grayscale"/>
            </div>
            <p class="text-dark-gray max-w-lg">hey i’m sophia! i’m an 18-year-old from ottawa, canada who recently moved to vermont to work at hack club, a 501c(3) non profit. i'm running hack card as it's a program i wished already existed. if you join <span class="text-brown bg-gray/40 rounded-xs whitespace-nowrap font-semibold px-1  backdrop-blur-xs">#hack-card-ysws</span> on slack, we'll definitely chat!
            </p>
        </div>
        <div class="parallax grow mt-auto space-y-4">
            <p class="text-dark-gray text-right max-w-lg ml-auto mt-4 ">hack club is a non-profit working to empower high school students to learn coding and engineering by building real-world technical projects. <span class="text-brown bg-gray/40 rounded-xs whitespace-nowrap font-semibold px-1">we are built by teenagers, for teenagers.</span></p>
            <div class="ml-auto w-full sm:w-140 h-90 rounded-xs pt-6 overflow-hidden">
                <img src="/teampng.png" alt="hackclubbers" class="grayscale h-full w-full object-cover opacity-80"/>
            </div>

        </div>
    </div>
</section>
<section>
    <div class="z-200">
        <Footer />

    </div> -->

<!-- </section> -->
