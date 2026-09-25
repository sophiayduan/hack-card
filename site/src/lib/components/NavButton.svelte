<script lang="ts">
    let { title = "" } = $props()
</script>

<li class="flex items-center group relative perspective-[400px] h-12 whitespace-nowrap">
    <div class="relative">
        <!-- for button size -->
        <div class="invisible p-2">
            <p class="px-2 py-0.5">{title}</p>
        </div>

        <!-- set up perspective cube -->
        <div class="absolute inset-x-0 inset-y-0.75 transform-3d transition-transform p-1 group-hover:transform-[rotateX(90deg)]">

            <!-- default -->
            <div class="absolute inset-x-0 inset-y-0.75 flex items-center backface-hidden transform-[translateZ(1rem)]">
                <div class="p-2">
                    <p class="bg-gray text-brown border-brown px-2 py-0.5 rounded-xs w-fit border ">{title}</p>
                </div>
            </div>

            <!-- onhover -->
            <div class="absolute inset-x-0 inset-y-0.75 flex items-center backface-hidden transform-[rotateX(-90deg)_translateZ(1rem)]">
                <div class="p-2">
                    <p class=" bg-red text-white border-white px-2 py-0.5 rounded-xs w-fit border ">{title}</p>
                </div>
            </div>

          </div>

    </div>

    <!-- popup arrow -->
    <div class="w-0 group-hover:w-9.75 overflow-hidden transition-[width] duration-300 ease-in-out">
        <div class="ml-0.5 size-8.5 shrink-0 flex bg-red border-white items-center justify-center rounded-xs border aspect-square">
            <div style="mask: url('/arrow.svg') center / contain no-repeat" class="-rotate-90 h-3 aspect-square bg-white translate-y-[200%] translate-x-[-200%] group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 ease-in-out"></div>
        </div>
    </div>
</li>
