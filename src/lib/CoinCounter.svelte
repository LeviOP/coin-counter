<script lang="ts">
    import { onMount } from "svelte";
    import type { Coin } from "../coin";
    import { coinStores } from "../stores";

    export let coin: Coin;

    const increment = () => {
        $coinStores = {
            ...$coinStores,
            [coin.key]: $coinStores[coin.key] + 1
        };
    };

    const decrement = () => {
        if ($coinStores[coin.key] === 0) return;
        $coinStores = {
            ...$coinStores,
            [coin.key]: $coinStores[coin.key] - 1
        };
    };

    const keydown = (e: KeyboardEvent) => {
        if (e.code !== coin.key) return;
        if (e.shiftKey) return decrement();
        increment();
    };

    onMount(() => {
        $coinStores = {
            ...$coinStores,
            [coin.key]: 0
        };
        window.addEventListener("keydown", keydown);
        return () => {
            window.removeEventListener("keydown", keydown);
            delete $coinStores[coin.key];
        };
    });
</script>

<div class="bg-gray-100 p-1 border-2 border-gray-400 rounded-lg min-w-[5rem]">
    <div class="flex flex-col text-center">
        <span class="w-full">{coin.name}</span>
        <span class="w-full text-2xl">{$coinStores[coin.key]}</span>
        <span class="w-full">${($coinStores[coin.key] * coin.value).toFixed(2)}</span>
        <div>
            <button on:click={increment}>+</button>
            <button on:click={decrement}>-</button>
        </div>
    </div>
</div>
