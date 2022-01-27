<script context="module">
    export const load = async ({ fetch }) => {
        const seed = await fetch('/random-seeds')
            .then(res => res.json())
            .then(json => json.seed)
            .catch(() => '') // this shouldn't break the app

        return {
            props: {
                seed,
            },
        }
    }
</script>

<script>
    import { setGenerator, seeded, usingMath } from '$lib/random'

    export let seed = ''

    setGenerator(seed.length > 0 ? seeded(seed) : usingMath())
</script>

<slot></slot>
