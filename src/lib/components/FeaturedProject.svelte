<script lang="ts">
	export let title: string;
	export let image: string;
	export let imageAlt: string;
	export let tags: string[];
	export let description: string;
	export let points: string[];
	export let url: string;
</script>

<div class="feature">
	<div class="top">
		<a href={url} target="_blank" rel="noopener noreferrer">
			<h2 class="h2 text-surface-400 max-md:text-4xl">{title}</h2>
		</a>
		<ul class="tags my-2">
			{#each tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	</div>
	<div class="side-by-side">
		<div class="feature-images">
			<a href={url} target="_blank" rel="noopener noreferrer"><img src={image} alt={imageAlt} /></a>
		</div>
		<div class="text-content mt-2">
			<p>{@html description}</p>
			<ul class="list-disc pl-8 mt-2 mb-8">
				{#each points as point}
					<li>{point}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.feature {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 1rem;
	}
	.top {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.side-by-side {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		gap: 1rem;
	}

	.feature-images {
		flex-basis: 40rem;
	}

	.feature-images img {
		border-radius: 10px;
		width: 100%;
		object-fit: contain;
	}

	.text-content {
		flex-basis: 40rem;
		text-align: justify;
	}

	.tags {
		padding: 0;
		font-family: 'Lora';
		font-size: 1rem;
		list-style: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		overflow-x: auto;
		margin-top: 0;
	}

	.tags li {
		margin-right: 1rem;
	}
</style>
