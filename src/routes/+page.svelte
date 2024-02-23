<script>
	import csmaTitle from '$lib/assets/csma-technology-title.png';
	import homeBanner from '$lib/assets/home/CSMA_Graphic_Waves_Top_Right.png';
</script>

<head>
	<title>CSMA Technology</title>
</head>

<div class="h-full bg-tertiary-500">
	<div class="banner shadow-lg pt-20 pb-8" style="background-image: url({homeBanner}">
		<div class="banner-text">
			<img class="banner-image" src={csmaTitle} alt="CSMA Technology" />

			<p class="banner-title h2 my-8">
				PASSIONATE ABOUT TECHNOLOGY,
				<br />
				INSPIRED TO BUILD.
			</p>

			<p class="banner-subtitle text-2xl">We’re here to find effective solutions to interesting problems.</p>
		</div>
	</div>

	<div class="w-fit mx-auto max-w-[60rem]">
		<div class="p-6 m-4 rounded-3xl mx-auto">
			<div class=" mx-auto">
				<p class="text-justify leading-6 mb-6">
					Based in South Florida, CSMA Technology is an independent software and consulting company, excited to work
					with clients to provide quality software, with a focus on growing the local community. We build websites,
					cross-platform applications, and custom software solutions. Our founders, Adrian and Stephanie, started this
					company to bring innovative projects to life. If this sounds exciting, we'd love to work with you!
				</p>
			</div>
			<div class="flex flex-row flex-wrap max-sm:flex-col gap-4 justify-center w-full">
				<div class="card p-6 rounded-xl variant-glass-surface">
					<p class="h3 mb-4">SEE WHAT WE DO</p>
					<a class="btn btn-md variant-filled-secondary" href="/services">Our Services</a>
				</div>
				<div class="card p-6 rounded-xl variant-glass-surface">
					<p class="h3 mb-4">GET IN TOUCH</p>
					<a class="btn btn-md variant-filled-primary" href="/contact">Contact Us</a>
				</div>
				<div class="card p-6 rounded-xl variant-glass-surface">
					<p class="h3 mb-4">CHECK OUT OUR WORK</p>
					<a class="btn btn-md variant-filled-surface" href="/contact">Our Projects</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.banner-image {
		margin-top: 2rem;
		max-width: 60%;
	}
</style>
