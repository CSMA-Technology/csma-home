<script>
	import csmaLogo from '$lib/assets/turtle-logo.png';
	import stephanie from '$lib/assets/about/Stephanie.png';
	import adrian from '$lib/assets/about/adrian.jpg';
	import github from '$lib/assets/about/icons/GitHub-Mark-Light-32px.png';
	import linkedin from '$lib/assets/about/icons/In-White-34.png';
	import email from '$lib/assets/about/icons/email.png';

	const adrianGithub = 'https://github.com/admoya';
	const adrianLinkedin = 'https://www.linkedin.com/in/adrian-moya-a870a39b/';
	const adrianEmail = 'mailto:adrian@csma.technology';
	const stephGithub = 'https://github.com/exscruzme';
	const stephLinkedin = 'https://www.linkedin.com/in/cruz-stephanie/';
	const stephEmail = 'mailto:stephanie@csma.technology';
</script>

<svelte:head>
	<title>About - CSMA Technology</title>
</svelte:head>

<div class="!mt-20 w-screen">
	<h1 class="h1 max-md:text-5xl mb-4">About Us</h1>
	<div class="card p-3 md:p-6 max-w-2xl mx-auto">
		<div class="company">
			<div class="company-text">
				<h2 class="h2">The Company</h2>
				<p class="company-detail-text">
					CSMA Technology was started as a place to find and solve interesting problems through technology. Our founders
					are two outspoken, innovative, and energetic people who love to take ideas and inspiration from everywhere and
					bring them to life in creative ways.
					<br />
					<br />
					If you need a custom software solution, have a novel app idea, or simply want to create useful and fun software,
					<a href="/contact">send us a message</a>
					! We’d love to work with you.
				</p>
			</div>
			<div class="company-images my-4">
				<img id="csmaLogo" src={csmaLogo} alt="CSMA Logo" />
			</div>
		</div>
		<div class="founders">
			<div class="founders-text">
				<h2 class="h2 mb-4 mt-6">The Founders</h2>
				<p>
					Adrian and Stephanie met at their first post-college jobs at American Express, and became fast friends.
					Individually, both Adrian and Stephanie advanced quickly through the engineering ranks, and earned reputations
					as some of the best engineers in their organization.
					<br />
					<br />
					While they were on different teams at AmEx, they found opportunities to work together on hackathons, technical
					events and lectures, and corporate organizations such as Women in Technology and Campus Recruiting. Over the years,
					they graduated from work friends to real friends, and it became clear that their work styles complemented each
					other.
					<br />
					<br />
					In April 2022, the dynamic duo decided to leave American Express and start a business together, wanting to take
					on new challenges and explore limitless opportunities on their own. Now, they head CSMA Technology, aiming to build
					impactful software that makes life better.
				</p>
			</div>
			<div class="founders-images">
				<p class="subtitle text-xl font-serif">Adrian Moya</p>
				<div class="flex flex-row">
					<img class="avatar" src={adrian} alt="Adrian Moya" />
					<div class="socials">
						<a href={adrianGithub} rel="noreferrer" target="_blank"><img id="logo" src={github} alt="Github Logo" /></a>
						<a href={adrianLinkedin} rel="noreferrer" target="_blank">
							<img id="logo" src={linkedin} alt="Linkedin Logo" />
						</a>
						<a href={adrianEmail} rel="noreferrer" target="_blank"><img id="logo" src={email} alt="Email Logo" /></a>
					</div>
				</div>
				<p class="subtitle text-xl font-serif mt-6">Stephanie Cruz</p>
				<div class="flex flex-row">
					<img class="avatar" src={stephanie} alt="Stephanie Cruz" />
					<div class="socials">
						<a href={stephGithub} rel="noreferrer" target="_blank"><img id="logo" src={github} alt="Github Logo" /></a>
						<a href={stephLinkedin} rel="noreferrer" target="_blank">
							<img id="logo" src={linkedin} alt="Linkedin Logo" />
						</a>
						<a href={stephEmail} rel="noreferrer" target="_blank"><img id="logo" src={email} alt="Email Logo" /></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.avatar {
		max-width: 150px;
		max-height: 150px;
		border-radius: 5px 0px 0px 5px;
	}

	.company {
		display: flex;
		flex-flow: row-reverse wrap;
	}

	.company-images {
		max-width: 200px;
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		flex: 1;
	}

	.company-text {
		text-align: right;
		flex: 5;
	}

	#csmaLogo {
		width: 150px;
	}

	.founders {
		display: flex;
		flex-flow: row wrap;
	}

	.founders-images {
		/* max-width: 200px; */
		display: flex;
		flex-flow: column wrap;
		align-items: flex-end;
		justify-content: center;
		flex: 1;
		padding-left: 20px;
	}

	.founders-text {
		text-align: left;
		flex: 2;
	}

	#logo {
		width: 32px;
	}

	.socials {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: space-around;
		width: 50px !important;
		padding: 5px 0px;
		background-color: #00838f;
		border-radius: 0px 5px 5px 0px;
	}

	.company-detail-text {
		text-align: justify;
		margin-left: 1rem;
	}

	@media (max-width: 640px) {
		.company-detail-text {
			text-align: left;
			margin-left: 0;
		}

		.company {
			flex-direction: column;
			align-items: center;
		}

		.company-text {
			text-align: start;
		}

		.founders {
			flex-direction: column;
			align-items: center;
		}

		.avatar {
			width: 100%;
			max-width: none;
			max-height: 200px;
			/* border-radius: 5px 5px 0px 0px; */
		}

		.founders-images {
			padding-left: 0;
		}
	}
</style>
