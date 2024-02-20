<script>
    import Filter from '$lib/ui/Filter.svelte';
    import WorkList from '$lib/ui/WorkList.svelte';
    import Dot from '$lib/ui/Dot.svelte';
    import { infoTrans } from '$lib/store.js';
    import { fly } from 'svelte/transition';
    
    export let data

    infoTrans.set(false)
    // console.log(data.projekte)
</script>


<div 
    out:fly={{ x: '-500px', opacity: 1, duration: 350}}>
    <Filter kategorien={data.kategorien}/>
    <WorkList projekte={data.projekte}/>
</div>
<Dot></Dot>