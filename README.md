# SvelteKit SSR Random Demo

If you naively try to render a component with randomized parameters in SvelteKit, you can get a situation where the server and client roll different numbers, resulting in in flashes of content change or worse.

This repo demonstrates a context-based approach to ensuring consistency between the server and client by relying on a property of `fetch` provided in `load` (see [SvelteKit Docs](https://kit.svelte.dev/docs#loading-input-fetch)):

> When fetch runs on the server, the resulting response will be serialized and inlined into the rendered HTML. This allows the subsequent client-side load to access identical data immediately without an additional network request.

I have written about the problem and solution on my website, **[Server Side Rendering a Random Number](https://auroratide.com/posts/server-side-rendering-a-random-number)**.