// @ts-nocheck
// export const url = "http://127.0.0.1:8090" // dev local
// export const url = "https://krumboeck-backend.cr.fugbach.one" // server
export const url = "https://cms.krumboeck.xyz"  // pretty

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}

export const getVideoURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}

export const getAudioURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `/gapi/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}