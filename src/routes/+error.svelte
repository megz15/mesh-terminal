<script lang="ts">
    import error from "$lib/assets/error.webp"
    import { page } from '$app/state'
</script>

<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
    <img src={error} alt='error achievement' class="w-96" />
    <div class="text-3xl">{page.status}: {page.error?.message}</div>
</div>