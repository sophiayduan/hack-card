<script lang="ts">
    import Rings from '$lib/components/Rings.svelte'
    import { Canvas } from '@threlte/core'
</script>

<div class="h-screen w-screen">
    <!-- <Canvas>
        <Rings />
    </Canvas> -->
    <div id="cube-scene" class="w-[200px] h-[200px] bg-beige persepctive-[600px]">
        <div id="cube" class="w-full h-full relative transform-3d  border-black">
            <div class="grid place-items-center text-3xl font-bold absolute w-[200px] h-[200px] bg-blue-300/50 rotate-y-0 translate-z-[100px] border-2 " id="front">front</div>
            <div class="grid place-items-center text-3xl font-bold absolute w-[200px] h-[200px] bg-green-300/50 rotate-y-180 -translate-z-[100px] border-2 " id="back">back</div>
            <div class="grid place-items-center text-3xl font-bold absolute w-[200px] h-[200px] bg-yellow-300/50 -rotate-y-90 translate-z-[100px] border-2 " id="left">left</div>
            <div class="grid place-items-center text-3xl font-bold absolute w-[200px] h-[200px] bg-orange-300/50 rotate-y-90 translate-z-[100px] border-2 " id="right">right</div>
            <div class="grid place-items-center text-3xl font-bold absolute w-[200px] h-[200px] bg-red-300/50 rotate-x-90 translate-z-[100px] border-2 " id="top">top</div>
            <div class="grid place-items-center text-3xl font-bold absolute w-[200px] h-[200px] bg-purple-300/50 -rotate-x-90 translate-z-[100px] border-2 " id="bottom">bottom</div>

        </div>
    </div>
</div>
