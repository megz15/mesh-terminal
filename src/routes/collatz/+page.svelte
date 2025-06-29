<script lang="ts">
	import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
	import collatz_img from '$lib/assets/collatz.webp';

	let n:number
	let collatz_sequence: number[] = []

	let chart: Chart;
  	let chartCanvas: HTMLCanvasElement;

	onMount(() => {
		chart = new Chart(chartCanvas, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Value',
				data: [],
				tension: 0.2
			}]
		},
		options: {
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
			x: {
				title: {
					display: true,
					text: 'Index',
					color: "#8ec5ff"
				}, ticks: {
					color: "#8ec5ff"
				}
			},
			y: {
				title: {
					display: true,
					text: 'Value',
					color: "#8ec5ff"
				}, ticks: {
					color: "#8ec5ff"
				}
			}
			}
		}
		});
	});

    const calculate = () => {
		collatz_sequence = [n]
		while (n!=1) {			
			if (n%2 == 0) n/=2
			else n = (n*3)+1
			collatz_sequence.push(n)
		}
		n = collatz_sequence[0]
		updateChart()
	}

	const updateChart = () => {
		if (chart) {
			chart.data.labels = collatz_sequence.map((_, index) => index + 1);
			chart.data.datasets[0].data = collatz_sequence;
			chart.update();
		}
	};

	// TODO: Fix input listener on mobile

</script>

<div class="overflow-scroll flex flex-col items-center justify-center gap-10">
	<img src={collatz_img} alt="definition" class="invert w-100" />
	<div>
		<input placeholder="Value" bind:value={n} size=10 type="number" min=1 class="bg-gray-800 text-white px-3 py-2 rounded outline-none" />
		<button on:click={calculate} class="bg-neutral-950 text-white px-3 py-2 rounded">Enter</button>
	</div>
	<canvas bind:this={chartCanvas}></canvas>
	<a href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank" class="text-blue-300 hover:underline">Read more on Wikipedia</a>
</div>