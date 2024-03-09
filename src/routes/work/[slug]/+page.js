import {pb} from "$lib/db"




export const load = async ({params , url}) => {

    const { slug } = `params`
    // console.log( slug )

    const recordId = url.searchParams.get('id')

    const projekt = await pb.collection('Projekte').getOne(recordId, {
    })

	return {
		projekt
	}
}


