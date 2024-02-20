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

