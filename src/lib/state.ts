import { writable, type Writable } from 'svelte/store';

export const flipState = writable({ calculatedPos: { x: 0, y: 0, scale: 0 } });
export const imageSrc = writable('');
export const targetImage: Writable<EventTarget | null> = writable(null);
export const cursorActive = writable(false);
