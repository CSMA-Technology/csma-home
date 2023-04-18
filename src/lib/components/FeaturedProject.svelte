<script>
	import khaHome from '$lib/assets/projects/kha-feature/kha-home.png';
  import blendPlay from '$lib/assets/projects/blend-feature/play.png';
</script>

<div class="feature">
	<div class="feature-images">
    <a href="https://blendreading.com" target="_blank" rel="noopener noreferrer"><img src={blendPlay} alt="Blend App Play Screen" /></a>
  </div>
	<div class="text-content">
		<a href="https://blendreading.com" target="_blank" rel="noopener noreferrer"><h2>Blend</h2></a>
		<ul class="tags">
      <li>Stripe</li>
      <li>Godot</li>
      <li>Firebase</li>
      <li>Netlify</li>
      <li>Svelte</li>
      <li>TypeScript</li>
			<li>Listmonk</li>
    </ul>
		<p>
			CSMA's founders have always had an interest in the intersection of education and technology. So when our friend and founder of 
			<a href="https://www.sageliteracy.org/" target="_blank" rel="noopener noreferrer">Sage Literacy</a>, Summer Kiesel,
			approached us with the idea of virtualizing a physical teaching tool that she uses every day, we were excited to build something
			that could revolutionize the way teachers teach phonics. Blend is our collaborative take on the modern blending board.
		</p>
		<ul>
			<li>Fully interactive virtual offering for physical blending boards</li>
			<li>Stripe integration for subscriptions processing</li>
			<li>Responsive product site highlighting Blend's features</li>
			<li>Custom mailing list solution for marketing campaigns and consumer updates</li>
		</ul>
	</div>
</div>

<div class="feature">
	<div class="feature-images">
    <a href="https://kendalehoa.org" target="_blank" rel="noopener noreferrer"><img src={khaHome} alt="KHA Website Home Page" /></a>
  </div>
	<div class="text-content">
		<a href="https://kendalehoa.org" target="_blank" rel="noopener noreferrer"><h2>KHA Website</h2></a>
		<ul class="tags">
      <li>PayPal</li>
      <li>Venmo</li>
      <li>Firebase</li>
      <li>Listmonk</li>
      <li>Netlify</li>
      <li>Svelte</li>
      <li>TypeScript</li>
    </ul>
		<p>
			Our client, Kendale Homeowners Association, wanted to reimagine their website with a focus on attracting new
			members and keeping engaged with their current member base. We redesigned and built their new
			website entirely from scratch, and elevated its functionality with new features tailored to
			our client's needs.
		</p>
		<ul>
			<li>Custom design and build of a responsive, lightweight website</li>
			<li>PayPal and Venmo integrations for onsite payment processing</li>
			<li>Embedded Instagram feed to display KHA's latest posts and updates</li>
			<li>Custom mailing list solution for centralized email campaign management used by the KHA board</li>
			<li>Custom logo design for KHA's branding</li>
		</ul>
	</div>
</div>

<style>
	.feature {
		width: 80%;
		display: flex;
    flex-direction: row;
    flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		gap: 2rem;
    margin: 20px;
	}

	.feature-images {
		
		flex-basis: 36em;
		width: 50%;
	}

  .feature-images img {
    border-radius: 10px;
    width: 100%;
		object-fit: contain;
  }

	.text-content {
    width: 40%;
		flex-basis: 35em;
		text-align: left;
	}

	h2 {
		margin: 0;
		font-size: 2.5rem;
	}

  .tags {
    padding: 0;
    font-family: 'Lora';
    font-size: 1rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
  }

  .tags li {
    margin-right: 1rem;
  }

</style>
