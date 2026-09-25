 <script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/Scene.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import FAQ from '$lib/components/FAQ.svelte'
    import Rings from '$lib/components/Rings.svelte'

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
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
      },
      {
        id: 2,
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
      },
      {
        id: 3,
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
      },
      {
        id: 4,
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
      },
    ];

    const faqGeneral = [
      {
        id: 1,
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
      },
      {
        id: 2,
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
      },
      {
        id: 3,
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
      },
      {
        id: 4,
        question: "Lorem blah blah blahahsdfjlksdlkjf?",
        answer: "Nah bro ainfdklmaldskmfaldsfmsaldf how are u the quick brown fox jumps over the lazy the dogs. How are you doing, wow."
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
          ease: 'none',
          scrollTrigger: {
            trigger: ".trigger",
            start: 'top center',
            end: '+=500',
            scrub: true,
            // markers: true
          }
        })

        tween = gsap.from('.parallax', {
          yPercent: 10,
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


    });
    onDestroy(() => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    });

</script>


<div class="fixed inset-0 bg-[url('../lib/assets/noise.gif')] opacity-12 pointer-events-none"></div>

<section id="hero" class="w-screen min-h-screen xl:h-screen px-6 py-10 bg-beige xl:p-14 grid grid-cols-1 grid-rows-1 bg-local overflow-hidden place-items-center">
    <!-- <div class="z-100 fixed top-1/2 -translate-y-1/2 right-0 w-12 h-40 hover:w-14 mix-blend-multiply"
>
        <a href="/custom" target="" class="nudge absolute inset-0 duration-300 bg-red text-red rounded-l-xs"
            onmouseenter={() => nudge?.pause()}
            onmouseleave={() => nudge?.play()}
            onfocus={() => nudge?.pause()}
            onblur={() => nudge?.play()}>

            s
        </a>
    </div> -->

    <div class="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1 h-180 w-180 xl:h-full xl:w-auto aspect-square ml-auto xl:pr-20 place-items-center z-100">
        <div class="col-start-1 row-start-1 relative h-full w-full pointer-events-none pb-20">
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
        <div class="trigger mt-auto space-y-6">
            <h4 class="text-xl font-mono my-1">CATEGORIES:</h4>
            <ol class="font-mono text-xl leading-tight w-fit whitespace-nowrap">
                <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">01) OVERALL PICK</li>
                <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">02) BEST BEGINNER PCB</li>
                <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">03) MOST ARTISTIC</li>
                <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full pr-4">04) MOST NON-BUSINESS CARD LIKE</li>
                <li class="hover:ml-2 hover:bg-gray/80 transition-all duration-700 ease-hover w-full">05) MOST TECHNICAL</li>
            </ol>
            <!-- <h3 class="text-3xl xl:text-5xl text-brown max-w-2xl font-semibold">For teens 13-18. <br /> Begins September 10th.</h3> -->
        </div>
    </div>

    <div class="absolute z-100 top-2 text-sm lg:text-sm xl:top-4 left-0 px-6 xl:px-14 w-full h-fit flex font-mono text-brown font-light gap-28 mix-blend-multiply pointer-events-none">
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
        <span class="text-right">BY SOPHIA DUAN<br /> & FRIENDS</span>
    </div>
    <div class="fixed bottom-2 text-sm lg:text-base xl:bottom-4 left-0 px-8 xl:px-16 w-full h-fit font-mono text-brown font-light ml-auto gap-14 flex justify-between mix-blend-multiply pointer-events-none items-end">
        <div></div>
        <span id="coords">X 0000 | Y 0000</span>
        <div class="flex flex-col items-end gap-2">
            <!-- <img src="/logo.svg" alt="" class="mix-blend-multiply opacity-60 h-10" /> -->
            <span>&copy; 2026</span>
        </div>
    </div>

</section>
<section class="bg-beige min-h-200 w-screen p-6 xl:px-14 py-20 flex flex-col gap-4">

</section>
<section class="about bg-gray w-screen p-6 xl:px-14 py-20 flex flex-col">
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

</section>
<section id="gallery" class="bg-brown w-screen flex flex-col gap-6 py-14 xl:py-20 overflow-hidden">
    <h3 class="text-[2rem] leading-9 text-beige font-medium mx-6 xl:mx-14 ">Insert COPY HERE A printed circuit board design <br/> competition with prizes for teens <br/> of <span class="underline text-blue-700 font-medium whitespace-nowrap">all skill levels</span>competition with prizes for teens.</h3>
    <a href="/" class="bg-green rounded-xs text-red font-bebas text-2xl px-2 pt-1 flex w-fit items-center gap-2 h-fit mx-6 xl:mx-14 ">
        EXPLORE THE GALLERY
    </a>
    <div class="my-20 xl:my-38 space-y-5 scale-80 xl:scale-100">
        <ul class="scroll w-full flex gap-5 items-end">
            {#each examples as example}
            <!-- <li><img src={item.src} class={item.size} alt=""/></li> -->
                <li class="aspect-3.5/2 rounded-xs bg-gray {example.children}"></li>
            {/each}
        </ul>
        <ul class="scroll2 w-full flex gap-5 items-start">
            {#each examples2 as example}
            <!-- <li><img src={item.src} class={item.size} alt=""/></li> -->
                <li class="aspect-3.5/2 rounded-xs bg-gray {example.children}"></li>
            {/each}
        </ul>

    </div>
</section>
<section class="bg-brown p-6 py-20 w-auto flex items-center justify-center">
    <div class="w-full h-screen rounded-xs p-4 flex items-center justify-center">
        <div class="grid grid-cols-1 grid-rows-1 w-full h-full bg-green relative p-4 place-items-center">
            <div class="col-start-1 row-start-1 rounded-full h-80 w-80 border-2 border-red border-dashed bg-red"></div>
            <h2 class="col-start-1 row-start-1 text-8xl xl:text-9xl text-black font-dirty flex items-center justify-center mt-6">pRIzeS</h2>
            <div class="col-start-1 row-start-1 relative w-full h-full">
                <img src="arrow.svg" class="absolute top-0 left-0 w-4 h-auto rotate-180" alt="" />
                <img src="arrow.svg" class="absolute top-0 right-0 w-4 h-auto -rotate-90" alt="" />

                <img src="arrow.svg" class="absolute bottom-0 left-0 w-4 h-auto rotate-90" alt="" />
                <img src="arrow.svg" class="absolute bottom-0 right-0 w-4 h-auto" alt="" />
            </div>
        </div>
    </div>
</section>
<div class="w-full h-8 bg-red">

</div>
<section id="faq" class="bg-beige min-h-200 w-screen p-6 xl:px-14 py-20 flex flex-col">
    <h2 class="font-bebas text-8xl xl:text-9xl text-brown my-4">FAQ</h2>

    <FAQ title="GENERAL" items={faqInfo} />
    <div class="pt-18"></div>
    <FAQ title="HACK CLUB" items={faqGeneral} />

    <div class="font-bebas text-2xl text-darl-gray mt-auto">
        <span>Still have questions? <br />email me at <span class="bg-green text-red px-2 rounded-xs">sophia [@] hackclub.com</span></span>
    </div>
</section>
<!-- <section class="bg-dark-gray min-h-300 w-screen p-6 xl:px-14 py-14 xl:pt-24 text-gray">
    <h3 class="font-bebas text-7xl xl:text-9xl">WHO'S BEHIND THIS?</h3>
    <div class="flex gap-10 xl:gap-60 h-full">
        <div class="w-full xl:w-1/3 space-y-4 flex flex-col trig h-fit">
            <p>hey i’m sophia! i’m an 18-year-old from ottawa, canada who recently moved to vermont to work at hack club, a 501c(3) non profit. i'm a believer that teens can do anything if given the opportunity! if you join i’m sure we’ll chat!
            </p>
            <div class="mt-auto w-full min-w-100 h-80 bg-dark-gray rounded-xs overflow-hidden">
                <img src="/sophia.png" alt="sophia" class="h-full w-auto object-cover opacity-100 parallax"/>
            </div>

        </div>
        <div class="grow space-y-4">
            <div class="w-full h-fit rounded-xs pt-6 overflow-hidden">
                <img src="/hackclubbers.png" alt="hackclubbers" class="h-full w-full object-cover opacity-100 parallax"/>
            </div>
            <p class="text-right max-w-2xl ml-auto mt-4">hack club is a non-profit working to empower high school students to learn coding and engineering by building real-world technical projects. we are built by teenagers, for teenagers.</p>
        </div>
    </div>
</section> -->
<section>
<Footer />

</section>
