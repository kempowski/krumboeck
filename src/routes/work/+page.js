import {pb} from "$lib/db"


export const load = async () => {

	const kategorien = await pb.collection('Kategorien').getFullList({
		sort: 'Kategorie_Name'
	})

	const projekte = await pb.collection('Projekte').getFullList({
		fields: "Entwurf,Titel,KurzBezeichnung,Cover,Kategorien,Slug,collectionId,id",
		sort: 'Titel'
	})

	return {
        kategorien,
		projekte
	}
}

