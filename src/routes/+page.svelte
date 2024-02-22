<script>
    import StartScreen from "$lib/ui/StartScreen.svelte";
    import { fade } from "svelte/transition";
</script>

<!-- <svelte:head>
    <title>krumboeck.xyz</title>
  </svelte:head> -->

<nav transition:fade={{duration: 500}}>
    <a href="/work">enter</a>
    <StartScreen/>
</nav>


<style lang="scss">
    nav a {
        position: absolute;
        left:  50%;
        top:  50%;
        transform: translate(-50%, -50%);
        color: blue;
        text-align: center;
        font-size: 30pt;
    }
</style>