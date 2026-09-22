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



    onMount(() => {
      const coords = document.getElementById('coords');
      document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        // console.log(`X ${x} | Y ${y}`);
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


    });
    onDestroy(() => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    });

</script>


<!-- <div class="fixed inset-0 bg-[url('../lib/assets/noise.gif')] opacity-12 pointer-events-none">
</div> -->

<section id="hero" class="nise w-screen min-h-screen xl:h-screen p-6 bg-beige xl:p-14 grid grid-cols-1 grid-rows-1 bg-local">
    <a href="/custom" target="" class="z-100 mix-blend-multiply fixed top-1/2 right-0 -translate-y-1/2 w-12 h-40 hover:w-14 transition-all ease-in-out duration-300 bg-red text-red">
        <p class="-rotate-90 whitespace-nowrap translate-y-20 font-semibold text-red">View More</p>.
    </a>
    <div class="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1 h-180 w-180 xl:h-240 xl:w-240 ml-auto mt-auto xl:pr-20 place-items-center xl:mt-0">
        <div class="col-start-1 row-start-1 z-0 relative h-full w-full pointer-events-none pb-20">
            <Canvas>
                <Rings />
            </Canvas>
        </div>
        <div class="col-start-1 row-start-1 z-0 relative h-[80%] w-[80%] xl:pb-20">
            <Canvas>
                <!-- <Scene /> -->
            </Canvas>
        </div>

        <div class="col-start-1 row-start-1 flex items-center justify-center w-fit h-fit font-mono font-bold -mt-10">
            <Navbar />
        </div>
    </div>
    <div class="col-start-1 row-start-1 flex flex-col gap-4 w-full h-full z-10 relative text-brown pointer-events-none">
        <div class="flex items-start">
            <h1 class="sm:text-[20vh] xl:text-[12vw] leading-50 3xl:leading-65 font-bebas font-semibold select-none">HACK CARD</h1>
            <span class="text-4xl rotate-180 font-bebas mt-4">&copy;</span>
        </div>

        <h3 class="-mt-10 xl:-mt-6 3xl:mt-0 text-[2rem] leading-9 text-brown font-medium">A printed circuit board design <br/> competition with prizes for teens <br/> of <span class="underline text-blue-700 font-medium whitespace-nowrap">all skill levels</span>.</h3>
        <form class="form border focus:outline-1 transition-all  border-brown rounded-xs bg-white w-fit pointer-events-auto shadow-xs mt-4">
            <div class="h-14 min-w-60 md:min-w-110 rounded-sm flex p-1.5">
                <input name="email" type="email" placeholder="johncena@hackclub.com" class="w-full px-4 focus:outline-none text-base">
                <button class="rsvp ml-auto bg-green rounded-xs border border-brown  hover:bg-red hover:text-white transition-all cursor-pointer flex items-start gap-3 p-1 group focus:bg-red-900 focus:text-white">
                    <span class="font-semibold text-3xl font-bebas pt-1">RSVP</span>
                    <div class="h-fit w-fit min-h-2.5 min-w-2.5 relative overflow-hidden">
                        <svg width="auto" height="10px" viewBox="0 0 37 37" class="absolute inset-0 group-hover:translate-x-full group-hover:-translate-y-full transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg width="auto" height="10px" viewBox="0 0 37 37" class="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                </button>
            </div>
        </form>
        <div class="trigger mt-auto space-y-6">
            <h4 class="text-xl font-mono my-1 font-bold">CATEGORIES:</h4>
            <ol class="font-mono text-xl leading-tight">
                <li class="hover:translate-x-4 w-fit hover:bg-blue">1) OVERALL PICK</li>
                <li>2) BEST BEGINNER PCB</li>
                <li>3) MOST ARTISTIC</li>
                <li>4) MOST NON-BUSINESS CARD LIKE</li>
                <li>5) MOST TECHNICAL</li>
            </ol>
            <!-- <h3 class="text-3xl xl:text-5xl text-brown max-w-2xl font-semibold">For teens 13-18. <br /> Begins September 10th.</h3> -->
        </div>
    </div>

    <div class="fixed z-100 top-2 text-sm lg:text-sm xl:top-4 left-0 px-8 xl:px-16 w-full h-fit flex font-mono text-brown font-light gap-28 mix-blend-multiply pointer-events-none">
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
    <div class="fixed bottom-2 text-sm lg:text-base xl:bottom-4 left-0 px-8 xl:px-16 w-full h-fit font-mono text-brown font-light ml-auto gap-14 flex justify-between mix-blend-multiply pointer-events-none">
        <div></div>
        <span id="coords">X 0000 | Y 0000</span>
        <span>&copy; 2026</span>
    </div>

</section>
<section class="bg-beige min-h-200 w-screen p-6 xl:p-14 flex flex-col gap-4">
    <h3 class="text-[2rem] leading-9 text-brown font-bold max-w-2xl">We partner with companies of all sizes, across industries and borders, delivering a broad spectrum of design and code services.
    </h3>
    <p class="max-w-xl font-mono">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the  librarian at St Bride Printing Library in London, took a 1914 Cicero  translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
    <p class="max-w-xl font-mono">Letraset and James Mosley, the  librarian at St Bride Printing Library in London, took a 1914 Cicero  translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>

    <div class="w-full h-fit mt-auto flex gap-10 items-end">
        <div class="w-100 aspect-video h-fit bg-white"></div>
        <div class="w-100 aspect-video h-fit bg-white"></div>
        <div class="w-200 aspect-video h-fit bg-white"></div>
    </div>

</section>
<section class="about bg-gray h-screen w-screen">

</section>
<section class=" bg-brown h-screen w-screen">

</section>
<section id="faq" class="bg-beige min-h-200 w-screen p-6 xl:p-14 py-20 flex flex-col">
    <h2 class="font-bebas text-9xl text-brown my-4">FAQ</h2>

    <FAQ title="GENERAL QUESTIONS" items={faqInfo} />
    <div class="pt-18"></div>
    <FAQ title="GENERAL QUESTIONS" items={faqGeneral} />

    <div class="font-bebas text-2xl text-darl-gray mt-auto">
        <span>Still have questions? <br />email me at <span class="bg-green text-red px-2 rounded-xs">sophia [@] hackclub.com</span></span>
    </div>
</section>
<section class="bg-dark-gray min-h-300 w-screen p-6 xl:px-14 py-14 xl:pt-24 text-gray">

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
    <!-- <div class="w-full h-100 mt-auto bg-beige rounded-xs"></div> -->
</section>
<section>
    <Footer />

</section>
