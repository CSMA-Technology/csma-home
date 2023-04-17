<script>
	import khaHome from '$lib/assets/projects/kha-feature/kha-home.png';
  import blendPlay from '$lib/assets/projects/blend-feature/play.png';
</script>

<div class="feature">
	<div class="feature-images">
    <img src={blendPlay} alt="Blend App Play Screen" />
    <p class="caption">Caption about the photo</p>
  </div>
	<div class="text-content">
		<a href="https://blendreading.com" target="_blank" rel="noopener noreferrer"
			><h2>Blend</h2></a
		>
		<p>
			Blend is a modern take on building literacy in young students. 
      It is a virtual blending board made to transform phonics instruction for teachers. 
      We built Blend in collaboration with Sage Literacy.
		</p>
		<h3>Highlighted work</h3>
		<ul>
			<li>Innovative virtual offering for physical blending boards</li>
			<li>Stripe integration for subscriptions processing</li>
			<li>Responsive product site beautifully highlighting Blend's features</li>
			<li>Listmonk setup for marketing campaigns and consumer updates</li>
		</ul>
    <ul class="tags">
      <li>Stripe</li>
      <li>Godot</li>
      <li>Firebase</li>
      <li>Netlify</li>
      <li>Svelte</li>
      <li>TypeScript</li>
    </ul>
	</div>
</div>

<div class="feature">
	<div class="feature-images">
    <img src={khaHome} alt="KHA Website Home Page" />
    <p class="caption">Caption about the photo</p>
  </div>
	<div class="text-content">
		<a href="https://kendalehoa.org" target="_blank" rel="noopener noreferrer"
			><h2>KHA Website</h2></a
		>
		<p>
			Our client, Kendale Homeowners Association, wanted a new, modernized website to attract new
			members and keep engaged with their current member base. We redesigned and built their new
			website entirely from scratch, and elevated its functionality with new features tailored to
			our client's needs.
		</p>
		<h3>Highlighted work</h3>
		<ul>
			<li>Custom design and build of a responsive, lightweight website</li>
			<li>PayPal and Venmo integrations for onsite payment processing of membership dues</li>
			<li>Embedded Instagram feed to display the organization's latest posts and updates</li>
			<li>Listmonk setup for centralized email campaign management for the KHA board</li>
			<li>Custom logo design for KHA's branding</li>
		</ul>
    <ul class="tags">
      <li>PayPal</li>
      <li>Venmo</li>
      <li>Firebase</li>
      <li>Listmonk</li>
      <li>Netlify</li>
      <li>Svelte</li>
      <li>TypeScript</li>
    </ul>
	</div>
</div>

<style>
	.feature {
		display: flex;
    flex-direction: row;
    flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		gap: 1.2rem;
    margin: 20px;
	}

	.feature-images {
    display: flex;
    flex-direction: column;
		width: 50%;
	}

  .feature-images img {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }

	.text-content {
    width: 40%;
		text-align: left;
	}

	h2 {
		margin-bottom: 0;
		font-family: 'Lora';
		font-size: 2.2rem;
	}

	h3 {
		margin-bottom: 0;
		font-family: 'Lora';
		font-size: 1.5rem;
	}

	a {
		color: white;
	}
	a:hover {
		color: #00838f;
	}
  .caption {
    font-size: 1rem;
    margin: 0;
    background-color: white;
    padding: 0.5rem;
    color: black;
    border-radius: 0 0 10px 10px;
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
