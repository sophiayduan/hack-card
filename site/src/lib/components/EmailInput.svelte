<script lang="ts">
    import { page } from '$app/state';
</script>
<form method="POST" action="?/register" class="form border focus-within:outline-1 transition-all  border-brown rounded-xs bg-white w-fit pointer-events-auto shadow-xs mt-2 xl:mt-4">
    <div class="h-14 min-w-60 md:min-w-110 rounded-sm flex p-1.5">
        <input
            required
            aria-label="email"
            name="email"
            type="email" placeholder="you@gmail.com"
            autocomplete="email"
            class="w-full px-4 focus:outline-none text-base">
        <!-- todo: add honeypot -->
            <input
                type="hidden"
                name="ref"
                value={page.url.searchParams.get('ref')}
            />
        <button
            type="submit"
            class="rsvp ml-auto bg-green rounded-xs border border-brown  hover:bg-red hover:text-white transition-all cursor-pointer flex items-start gap-3 p-1 group focus:bg-[#C21B1F] focus-visible:text-white"
        >
            <span class="text-3xl font-bebas pt-1">RSVP</span>
            <div class="h-fit w-fit min-h-2.5 min-w-2.5 relative overflow-hidden">
                <svg aria-hidden="true" width="auto" height="10px" viewBox="0 0 37 37" class="absolute inset-0 group-hover:translate-x-full group-hover:-translate-y-full group-focus:translate-x-full group-focus:-translate-y-full transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#1E1E1E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg aria-hidden="true" width="auto" height="10px" viewBox="0 0 37 37" class="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 group-focus:translate-x-0 group-focus:translate-y-0 transition-all duration-600 ease-spring" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 33.8333L33.8333 3M33.8333 33.8333V3H3" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </button>
    </div>
</form>
