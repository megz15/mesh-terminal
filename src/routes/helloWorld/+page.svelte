<script lang="ts">
    let count = 0;
    let countCrement = () => count++;
</script>

<div class="flex flex-col gap-y-5 items-center justify-center h-[50vh]">
    <div class="text-6xl font-serif text-[#748138]">sybau 🥀</div>
    <button on:click={countCrement} class="bg-stone-600 text-4xl text-white rounded-lg px-3 py-2 cursor-pointer">Count: {count}</button>
</div>