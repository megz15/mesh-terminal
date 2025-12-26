<script lang="ts">
    let count = 0

    let placeholderText: HTMLDivElement;
    const nthClickMessages = [
        "you really like clicking, huh?",
        "that's some serious dedication",
        "are you trying to break something?",
        "maybe take a break?",
        "click click click...",
        "you must really love pushing buttons",
        "clicking intensifies",
        "how many clicks is too many?",
        "you know, there's more to life than clicking",
        "clack clackity click clack"
    ]

    let countCrement = () => {
        count++
        if (count % 10 === 0) {
            const messageIndex = (count / 10 - 1) % nthClickMessages.length
            placeholderText.innerText = nthClickMessages[messageIndex]
        }
    }
</script>

<div class="flex flex-col gap-y-5 items-center justify-center h-[50vh]">
    <div class="text-6xl font-serif text-[#748138]">hi 🥀💔</div>
    <button on:click={countCrement} class="bg-stone-600 text-4xl text-white rounded-lg px-3 py-2 cursor-pointer mt-2 mb-5">clicks: {count}</button>
    <div class="text-gray-300 text-xl" bind:this={placeholderText}>such an ordinary button...</div>
</div>