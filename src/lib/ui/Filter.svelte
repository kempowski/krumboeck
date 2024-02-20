<script>
    import { writable } from 'svelte/store';
    import { items } from '$lib/store';
    import {fly} from 'svelte/transition'
    import { cubicOut } from 'svelte/easing';
    
    export let kategorien
    

    console.log(kategorien)

    let bgColor = ''
    
    let _refs = []

    items.set([
        { id:  kategorien[0].id, name: kategorien[0].Kategorie_Name, highlight: false , bg: 'deepskyblue'},
        { id:  kategorien[1].id, name: kategorien[1].Kategorie_Name, highlight: false , bg: 'aqua' } ,
        { id:  kategorien[2].id, name: kategorien[2].Kategorie_Name, highlight: false, bg: 'gold' } ,
        { id:  kategorien[3].id, name: kategorien[3].Kategorie_Name, highlight: false, bg: 'fuchsia'} ,
        { id:  kategorien[4].id, name: kategorien[4].Kategorie_Name, highlight: false, bg: 'hotpink'} ,
    ]);

    console.log($items)


    function toggleHighlight(itemId, index) {
        items.update(allItems => allItems.map(item => {
            // console.log(item)
            if ( item.id === itemId){
                item = { ...item, highlight: !item.highlight}

                if (item.highlight === true){
                    _refs[index].style.backgroundColor = item.bg

                }
                else{
                    _refs[index].style.backgroundColor = "white"
                }
            }

            // console.log(item)

            return item
        }));
    }

    function setBg(index){
        if ( $items[index].highlight) {
            return $items[index].bg
        } else {
            return 
        }
    }

</script>

<ul >
    {#each kategorien as kat, ix }
        <li 
            in:fly={{x: "-450px", duration: 1000, delay: 500, opacity: 1}}
            >
            <button on:click={() => toggleHighlight(kat.id, ix)} 
                bind:this={_refs[ix]}
            >
                {kat.Kategorie_Name}
            </button>
        </li>
    {/each}
</ul>

<style lang="scss">
    ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: fit-content;
    }
</style>



