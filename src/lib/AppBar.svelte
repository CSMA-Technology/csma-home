<script lang="ts">
	import csmaLogo from '$lib/assets/turtle-logo.png';

	var isMenuopen = false;
</script>

<div class="fixed top-0 left-0 w-full bg-none z-10">
	<nav class="app-bar bg-surface-500 rounded-3xl mx-auto w-fit m-1 border-tertiary-500 border-2">
		<a class="branding ml-2 mr-2 md:mr-8" href="/">
			<img id="csmaLogo" src={csmaLogo} alt="The CSMA logo" />
			<p class="font-heading-token text-2xl ml-1 max-md:hidden">CSMA</p>
		</a>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul
			on:click={() => {
				isMenuopen = false;
			}}
			on:keypress={() => {
				isMenuopen = false;
			}}
			class={`nav-links ${isMenuopen ? '' : 'hide-menu'}`}>
			<li class="text-lg">
				<a href="/projects">Projects</a>
			</li>
			<li class="text-lg">
				<a href="/about">About</a>
			</li>
			<li class="text-lg">
				<a href="/services">Services</a>
			</li>
			<li class="text-lg">
				<a href="/contact">Contact</a>
			</li>
		</ul>
		<button
			on:click={() => {
				isMenuopen = !isMenuopen;
			}}
			class="hamburger-button">
			{#if isMenuopen}
				<span class="material-symbols-outlined">close</span>
			{:else}
				<span class="material-symbols-outlined">menu</span>
			{/if}
		</button>
	</nav>
</div>

<style>
	.app-bar {
		height: 50px;
		/* width: 100vw; */
		display: flex;
		flex-direction: row;
		background-size: 100%;
	}

	.app-bar a:hover {
		text-decoration: none;
		color: #040622;
	}

	.branding {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		max-width: 156px;
	}

	#csmaLogo {
		height: 20px;
		margin-top: -4px;
	}

	.nav-links {
		flex-grow: 1;
		display: flex;
		flex-direction: row-reverse;
		margin-right: 2rem;
		font-family: Overpass;
		font-size: 20px;
		font-weight: 700;
		line-height: 26px;
		letter-spacing: 0em;
		text-align: center;
		list-style-type: none;
		align-items: center;
		gap: 1rem;
	}

	.nav-links a {
		color: white;
	}

	.nav-links li {
		height: fit-content;
	}

	.hamburger-button {
		display: none;
	}
	/* 
	@media (max-width: 640px) {
		.hide-menu {
			opacity: 0;
			visibility: hidden;
		}

		.hamburger-button {
			display: block;
			width: auto;
			background: none;
			color: white;
			margin-left: auto;
			margin-right: 1rem;
		}
		.nav-links {
			flex-direction: column-reverse;
			z-index: 100;
			background-color: #004046;
			margin-top: 66px;
			width: 100%;
			position: absolute;
			padding-left: 0;
			text-align: right;
			padding-top: 1rem;
			padding-bottom: 1rem;
			transition:
				opacity 600ms,
				visibility 600ms;
		}

		.nav-links a {
			padding-right: 2rem;
		}
	} */
</style>
