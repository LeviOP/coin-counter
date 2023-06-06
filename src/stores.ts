import { writable } from "svelte/store";

export const coinStores = writable({} as { [key: string]: number });
