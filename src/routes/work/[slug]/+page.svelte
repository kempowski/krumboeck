 <script>
    import { getImageURL, url } from '$lib/utils/getUrls';
    import Dot from '$lib/ui/Dot.svelte';
    import Galerie from '$lib/ui/Galerie.svelte';
    import { blur, fade } from 'svelte/transition';

    export let data
    
    let projekt = data.projekt
    // console.log(projekt.KurzBezeichnung.length)
</script>

<a in:fade={{duration: 300, delay: 1000}}
    out:blur
    id="back" href="/work"  data-sveltekit-noscroll>
        back
</a>

<section in:blur={{delay: 350}}
         out:blur={{duration: 500}}
>
    {#if projekt.showCover}
        <img src={url}{getImageURL(projekt.collectionId, projekt.id, projekt.Cover)} >
    {/if}

    <div class:showCover={projekt.showCover} class:noCover={!projekt.showCover}>
        <h2>{projekt.Titel}</h2>
        {#if projekt.KurzBezeichnung.length > 1}
            <h3>{projekt.KurzBezeichnung}</h3>
        {/if}
        {#if !(projekt.Zeitraum === 0)}
            <h4>{projekt.Zeitraum}</h4>
        {/if}
    </div>

    <p class:noCoverP={!projekt.showCover}>
        {@html projekt.Beschreibung}
    </p>

    <Galerie {projekt}></Galerie>

    {#if projekt.Video}
        <video  controls>
            <track kind="captions">
            <source src={url}{getImageURL(projekt.collectionId, projekt.id, projekt.Video)}>
        </video>
    {/if}
    
</section>

<Dot></Dot>

<style lang="scss">
    #back{
        position: fixed;
        top: 2rem;
        left: 2rem;
    }

    // section > div, p{
    //     padding: 0 2rem;
        
    // }
    


    @media screen and (min-width: 900px), screen and (orientation: landscape) {
        section{
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding: 5rem;

        img{
            grid-column: 1/4;
            max-height: 90vh;
            justify-self: end;
            
        }
        .showCover{
            grid-column: 4/6;
            align-self: flex-end;
            padding: 0;

            * {
                margin: 0;
            }
            h3{
                margin-bottom: 0.5rem;
            }
        }
        .noCoverP{
            grid-column: 2/5;
            margin: 0;
            padding: 0;
        }
        .noCover{
            grid-column: 2/5;
            margin: 0;
            padding: 0;

            h2, h3, h4, p{
                margin: 0;
                padding: 0;
            }
            
        }

        p{
            grid-column: 3/5;
        }

        #gal{
            grid-column: 2/6;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            img{
                width: 50%;
                height: fit-content;
            }
        }
        video{
            width: 100%;
            grid-column: 1/6;
        }
    }
    }

</style>/