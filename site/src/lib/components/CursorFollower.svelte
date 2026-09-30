<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap';

    let follower: HTMLElement;
    let hoverEl: HTMLElement;


    let { children, class: className, text = "CLICK ME" } = $props()
    onMount(() => {
      const xTo = gsap.quickTo('#follower', "x", {
        duration: 0.6,
        ease: "power3"
      });

      const yTo = gsap.quickTo('#follower', "y", {
        duration: 0.6,
        ease: "power3"
      });

      const move = (e: PointerEvent) => {
        xTo(e.clientX + 40);
        yTo(e.clientY - 20);
      }

      const enter = (e: PointerEvent) => {
        gsap.set(follower, {
          x: e.clientX + 20,
          y: e.clientY - 20
        })
      };

      hoverEl.addEventListener('pointermove', move);
      hoverEl.addEventListener('pointerenter', enter);

      return() => {
        hoverEl.removeEventListener('pointermove', move);
        hoverEl.removeEventListener('pointerenter', enter);
      }
    });

</script>


<div bind:this={hoverEl} class="group p-2 relative {className}">
    {@render children()}

    <div id="follower" bind:this={follower} class="z-100 transition-[max-width] duration-300 ease-in-out fixed top-0 left-0 pointer-events-none max-w-0 overflow-hidden group-hover:max-w-xs">
        <div class="shrink-0 whitespace-nowrap bg-green text-red border-brown border px-2 py-0.5 rounded-xs font-mono font-bold text-sm">
            {text}
        </div>
    </div>
</div>
