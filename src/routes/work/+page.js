import {pb} from "$lib/db"


export const load = async () => {
	// const response = new Response('Hello SvelteKit', {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*', // Specify the url you wish to permit
    //         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //         'Access-Control-Allow-Headers': 'Content-Type'
    //     }
    // });

	const kategorien = await pb.collection('Kategorien').getFullList({
		sort: 'Kategorie_Name'
	})

	const projekte = await pb.collection('Projekte').getFullList({
		fields: "Entwurf,Titel,KurzBezeichnung,Cover,Kategorien,Slug,collectionId,id",
		sort: 'Titel'
	})

	return {
		response,
        kategorien,
		projekte
	}
}


// export async function load ({ fetch, params}) {
// 	const res = await.fetch('')
// }