import { writable } from "svelte/store";
export let applyNow = writable(false)
export let checkStatus = writable(false)
export let successful = writable(false)
export let regCode = writable("")