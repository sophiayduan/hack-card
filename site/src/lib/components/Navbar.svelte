<script>
    let { dark = "bg-gray text-brown border-brown" } = $props()
    import CursorFollower from './CursorFollower.svelte'
    import NavButton from '$lib/components/NavButton.svelte'

</script>
<nav class="col-start-1 row-start-1 z-10">
    <ul class="flex uppercase text-lg font-bold font-mono tracking-wider transition-all items-center">
        <NavButton title="ABOUT" />
        <NavButton title="HOW IT WORKS" />
        <NavButton title="AWARDS" />
        <NavButton title="FAQ" />
        <CursorFollower class="" text="COMING SOON">
            <li class="flex items-center group relative perspective-[400px] h-12 whitespace-nowrap">
                <div class="relative">
                    <div class="invisible p-2">
                        <p class="px-2 py-0.5">GALLERY</p>
                    </div>

                    <div class="absolute inset-x-0 inset-y-0.75 transform-3d transition-transform p-1">
                        <div class="absolute inset-x-0 inset-y-0.75 flex items-center backface-hidden transform-[translateZ(1rem)]">
                            <div class="p-2">
                                <p class="bg-dark-gray text-gray border-brown px-2 py-0.5 rounded-xs w-fit border">GALLERY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </CursorFollower>
    </ul>
</nav>
