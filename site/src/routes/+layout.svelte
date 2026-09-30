<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onNavigate, afterNavigate } from '$app/navigation'
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let { children } = $props();

	let overlay: HTMLDivElement;

	onMount(() => {
     	gsap.set(overlay, {
     	    yPercent: 0,
      		ease: 'power4.in',
      		duration: 1,
     	});

        return async () => {
          await gsap.to(overlay, {
            yPercent: -100,
            duration: 0.6,
          })
        }
	})

	onNavigate(async () => {
	  await gsap.to(overlay, {
		    yPercent:0,
			ease: 'power4.inOut',
			duration: 1
		})
	});

	afterNavigate(async () => {
	  await gsap.to(overlay, {
			yPercent: -100,
			ease: 'power4.inOut',
			duration: 1
			})
	})
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>HACK CARD | 2026</title>
</svelte:head>

<div bind:this={overlay} class="overlay fixed top-0 left-0 w-screen h-screen z-1000 bg-brown pointer-events-none grid grid-cols-1 grid-rows-1 place-items-center">
    <img src="/logo-red.svg" alt="HACK CARD" class="h-30" />
</div>
{@render children()}
