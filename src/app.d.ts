// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type Lenis from '@studio-freight/lenis';

// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare global {
	interface Window {
		Lenis: Lenis;
	}
}
