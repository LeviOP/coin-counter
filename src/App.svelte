<script lang="ts">
    import type { Coin } from "./coin";
    import CoinCounter from "./lib/CoinCounter.svelte";
    import { coinStores } from "./stores";

    const coins: Coin[] = [
        {
            name: "Quater",
            value: 0.25,
            key: "KeyA"
        },
        {
            name: "Dime",
            value: 0.1,
            key: "KeyS"
        },
        {
            name: "Nickel",
            value: 0.05,
            key: "KeyD"
        },
        {
            name: "Penny",
            value: 0.01,
            key: "KeyF"
        }
    ];

    const reset = () => {
        $coinStores = Object.fromEntries(Object.keys($coinStores).map((k) => [k, 0]));
    };

</script>

<main class="m-10 flex flex-col gap-2">
    <div class="flex gap-1">
        {#each coins as coin}
            <CoinCounter {coin} />
        {/each}
    </div>
    <span class="text-2xl">Total: ${Object.values($coinStores).reduce((p, c, i) => p + c * coins[i].value, 0).toFixed(2)}</span>
    <button class="w-min bg-gray-100 p-1 border-2 border-gray-400 rounded-lg" on:click={reset}>Reset</button>
</main>
