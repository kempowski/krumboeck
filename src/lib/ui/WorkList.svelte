<script>
    //@ts-nocheck
    import { getImageURL, url } from '$lib/utils/getUrls';
    import { items } from '$lib/store';
    import { fade } from 'svelte/transition'
    

    export let projekte

    $: linkRef = []

    $: hov = false;
    // console.log(projekte)
    // console.log($items)

    items.subscribe((value) => {

    })

    function highlightCheck(items, inId, index){
        // console.log(linkRef)

        // SUCHT DEN WERT DES FILTERS, OB ER AN ODER AUS IST
        const result = items.find(({id}) => id === inId )
        // console.log(result)

        // WENN ES EINE LINK DOM VERKNUEPFUNG GIBT, SETZT FARBE ODER NICHT
        if ( linkRef[index] !== undefined){
            if ( result.highlight){
                // console.log(linkRef[ix])
                linkRef[index].style.color = result.bg
                linkRef[index].style.color = result.bg
            } else {
                linkRef[index].style.color = 'black'
            }
        }
    }

    function hovOv(){
        hov = !hov
    }

</script>

<ul>
    {#each projekte as projekt, ix }
        {#if !projekt.Entwurf}
            <li in:fade={{duration: 30, delay: 400 + (ix * 77)}}>
            <!-- <li in:fade={{duration: 30, delay: (ix * 77)}}> -->
                <a class="text" href="/work/{projekt.Slug}?id={projekt.id}" 
                    bind:this={linkRef[ix]}
                    on:mouseenter={hovOv}
                    on:mouseleave={hovOv}
                    class:active={highlightCheck($items, projekt.Kategorien, ix)}
                    >
                        {projekt.Titel}
                        <span>{projekt.KurzBezeichnung}</span>
                    </a>
                    <a class="imageWrap" href="/work/{projekt.Slug}?id={projekt.id}">
                        <img src={url}{getImageURL(projekt.collectionId, projekt.id, projekt.Cover)} 
                        alt="Cover Image of {projekt.Titel}">
                    </a>
            </li>
        {/if}

    {/each}
</ul>


<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap');

    .active {
        color: red;
    }
    ul {
        list-style: none;
        flex-direction: column;
        width: fit-content;

        li {
            .text {
                text-decoration: none;
                transition: color 0.2s linear;
                z-index: 3;
                position: relative;

                span{
                    opacity: 0;
                    transition: opacity 0.5s;
                    font-weight: 666;
                    font-family: "Vollkorn", serif;
                    font-optical-sizing: auto;
                    font-weight: 100;
                    font-style: italic;
                    color: #202020;
                    padding-left: 20px;
                }

            }
        }

        li a:focus{
            background-color: black;
            outline: none;
            color: white;
        }
        
        li:hover { 
            // img {
            //     opacity: 1;
            //     z-index: 1;
            // }
            .text{
                span{
                    opacity: 1;
                }
            }
        }

        .imageWrap {
            width: 100vw;
            height: 100vw;
            // max-height: 90vh;
            aspect-ratio: auto;
            position: absolute;
            bottom: 6rem;
            right: 6rem;
            transition: opacity 0.125s linear;
            z-index: 1;
            padding-left: 40px;

            img{
                opacity: 0;
            }
        }
    }
</style>