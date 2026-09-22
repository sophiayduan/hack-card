<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte'
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/Scene.svelte'
    let scene = $state<Scene>()


</script>
<section class="h-screen w-screen bg-brown relative flex items-center justify-center p-6 px-10 xl:p-14">
    <div class="fixed top-6 left-1/2 -translate-x-1/2">
        <Navbar dark="bg-gray text-brown"/>
    </div>
    <div class="lg:max-w-[80%] xl:max-w-[70%] flex items-center justify-center gap-8 xl:gap-12">
        <div class="flex items-center justify-center gap-4">
            <div class="w-150 h-150 relative">
                <button onclick={() => scene.prev()} class="w-10 absolute left-0 top-1/2 translate-y-1/2 text-2xl text-beige">&lt;-</button>

                <Canvas>
                    <Scene bind:this={scene} />
                </Canvas>
                <button onclick={() => scene.next()} class="w-10 absolute right-0 top-1/2 translate-y-1/2 text-2xl text-beige">-&gt;</button>
            </div>

        </div>

        <div class="text-beige mt-6 max-w-lg">
            <h2 class="text-7xl font-bebas">HACKER CARD</h2>
            <h4 class="text-xl font-semibold text-green italic">Some lorem ipsum ass item description or something here.</h4>
            <p class="text-base font-mono">
                <br />
                Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
                <br />
                <br />
                It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div class="mt-8 w-full flex gap-2 justify-end">
                <a href="/" class="h-full px-2 py-0.5 bg-red text-beige font-semibold">GITHUB</a>
            </div>
        </div>
        <a href="/" target="" class="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-40 hover:w-14 transition-all ease-in-out duration-300 bg-red text-red">
            .
        </a>
        <!-- <span class="absolute bottom-20 mx-auto font-mono text-gray">
            [ PRESS ESC TO RETURN ]
        </span> -->
    </div>
    <div class="fixed top-2 text-sm lg:text-sm xl:top-4 left-0 px-8 xl:px-16 w-full h-fit flex font-mono text-gray font-light gap-28 pointer-events-none">
        <span>A HACKCLUB EVENT</span>
        <div class="flex gap-2 ml-auto w-fit">
            <span id="clock" class="text-gray"></span>
            <span class="text-gray"> /24H</span>
        </div>
        <span>BY SOPHIA DUAN</span>
    </div>
    <div class="fixed bottom-2 text-sm lg:text-base xl:bottom-4 left-0 px-8 xl:px-16 w-full h-fit font-mono text-gray font-light ml-auto gap-14 flex justify-between  pointer-events-none">
        <div></div>
        <span id="coords" class="text-gray">X 0000 | Y 0000 </span>
        <span>&copy; 2026</span>
    </div>
</section>
