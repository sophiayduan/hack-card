<script>
    let { dark = "bg-gray text-brown border-brown" } = $props()

    import NavButton from '$lib/components/NavButton.svelte'
</script>
<nav class="col-start-1 row-start-1 z-10">
    <ul class="flex uppercase text-lg font-bold font-mono tracking-wider transition-all items-center">
      <NavButton title="ABOUT" />
      <NavButton title="HOW IT WORKS" />
      <NavButton title="GALLERY" />
      <NavButton title="AWARDS" />
      <NavButton title="FAQ" />
    </ul>
</nav>
