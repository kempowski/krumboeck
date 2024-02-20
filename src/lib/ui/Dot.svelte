<script>
    import { fly } from "svelte/transition";
    import { infoTrans } from "$lib/store";
    import { page } from "$app/stores";

    $: showHelp = false; 

    // console.log( $infoTrans)

    $: currentRoute = $page

    // console.log($page.route.id)

    function quest(){
        // console.log("ho")
        showHelp = !showHelp
    }

    function handleTransitionEnd(){
        infoTrans.set(true)
        // console.log( "hiho")

    }
</script>

<!-- on:transitionend="{handleTransitionEnd}" -->
<div >
    {#if $page.route.id === '/work'}
        <button on:click={quest} 
            id="circle"
            in:fly={{x: "200px", duration: 500, delay: 2000, opacity: 1}} >
            ?
        </button>
    {:else}
        <button on:click={quest} 
            id="circle"
             >?</button>
    {/if}

    <!-- {#if $infoTrans === false}
    {:else}
    <button on:click={quest} 
        id="circle"
        in:fly={{x: "200px", duration: 500, delay: 2000, opacity: 1}} >
        ?
    </button>
    
    {/if} -->
    
    {#if showHelp}
    <section transition:fly={{ x: '2px'}}>
        <h6>kontakt:</h6>
        <a href="mailto:j@krumboeck.xyz">j@krumboeck.xyz</a>
    </section>
        
    {/if}
</div>



<style lang="scss">
    div{
        width: 5rem;
        overflow: hidden;

        #circle{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 6rem;
            height: 6rem;
            border-radius: 100%;
            /* background-color: black; */
            border: solid 2px black;
    
            position: fixed;
            bottom: 3rem;
            right: 3rem;
            z-index: 6;
            font-size: 3rem;
            transition: all 0.1s linear;
            font-weight: 900;
    
        }
        // #circle:hover{
        //     // font-size: 3rem;
        //     transform: scale(1.6);
        // }
    
        section{
            position: fixed;
            right: 6rem;
            height: 6rem;
            bottom: 4rem;
            background-color: white;
            z-index: 2;
            padding: 0;
            padding-right: 5rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            padding-left: 2rem;
    
            h6{
                margin:0;
            }
        }
    }

</style>