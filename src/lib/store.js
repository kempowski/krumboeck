import { writable } from 'svelte/store';

export let items = writable();
export let infoTrans = writable(false)