<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar>My Puzzle app<a class="ml-4" href='/'>Back to home</a></AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
