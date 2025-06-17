<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

{@render children()}

<!-- todo: small screen optimization: 
 	virtual/native onscreen keyboard
	output wrap/overflow
	landscape
-->