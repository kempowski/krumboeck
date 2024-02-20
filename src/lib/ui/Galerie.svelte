<script>
    import { getImageURL, url } from "$lib/utils/getUrls";
    export let projekt

    let imgBig = url + getImageURL(projekt.collectionId, projekt.id, projekt.Images[0])
    let imgUrls = []

    for (let i = 0; i < projekt.Images.length; i ++){
        imgUrls[i] = url + getImageURL(projekt.collectionId, projekt.id, projekt.Images[i])
    }

    let imgDisplay = imgUrls
    // console.log(imgUrls) 

    function changeImg(ix){
        imgDisplay[0] = imgUrls[ix]
        imgDisplay[ix] = imgBig
        imgBig = imgDisplay[0]

        // Get the element you want to scroll to
        const element = document.getElementById('gal');

        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
    }

    // console.log(projekt.showCover)
</script>

{#if projekt.Galerie}

    <div id="gal">
        {#each projekt.Images as img , ix}
            {#if ix === 0}
                <img id="big" src={imgDisplay[0]} alt={img}>
            {:else}
            <button on:click={() => changeImg(ix)}>
                <img src={imgDisplay[ix]} alt={img}>
            </button>
            {/if}
        {/each}
    </div>
    
{:else}
    <div id="feed">
        {#each projekt.Images as img, ix}
            <img src={imgDisplay[ix]} alt={img}>
            
        {/each}
    </div>
{/if}
    
<div id="anker"></div>


<style lang="scss">
    #gal{
            grid-column: 2/6;
            display: flex;
            // justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: row;
            max-width: 900px;
            

            #big{
                width: 100%;
                filter: none;
            }
            button{
                border: 0;
                padding: 0;
                width: 20%;
                overflow: hidden;
                height: 100px;


                img{
                    width: 100%;
                    height: fit-content;
                    filter: grayscale(1);
                }
                img:hover{
                    filter: none;
                }
            }
        }
    #feed{
        grid-column: 2/5;
    }
</style>