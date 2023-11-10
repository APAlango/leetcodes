<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar>My Puzzle app</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
