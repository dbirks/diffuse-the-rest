<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import IconCommunity from "./IconCommunity.svelte";
    import IconSpinner from "./IconSpinner.svelte";

    export let isVisisble: boolean;
    export let isUploading: boolean;

	const dispatch = createEventDispatcher();
    function handleClick(){
        if(isUploading){
            return;
        }
		dispatch('createCommunityPost');
    }
</script>

{#if isVisisble}
     <div class="flex items-center justify-center bg-black w-[12.5rem] px-2 py-1 gap-x-2 rounded-full cursor-pointer"
         on:click={handleClick}
     >
         {#if isUploading}
              <IconSpinner classNames="text-white animate-spin" />
         {:else}
              <IconCommunity/>
         {/if}
         <p class="text-white font-semibold">Share to community</p>
     </div>
{/if}
