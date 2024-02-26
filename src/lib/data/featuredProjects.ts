import blend from '$lib/assets/projects/blend-feature/play.png';
import kha from '$lib/assets/projects/kha-feature/kha-home.png';
import membershipSync from '$lib/assets/projects/membership-sync-feature/membership-sync.png';
export default [
  {
    title: 'Blend',
    tags: ['Godot', 'SvelteKit', 'TypeScript', 'Firebase', 'Netlify', 'Stripe', 'Listmonk'],
    description: `We've always had an interest in the intersection of education and technology. So when our friend and the founder of 
    <a href="https://www.sageliteracy.org/" target="_blank" rel="noopener noreferrer">Sage Literacy</a>, Summer Kiesel,
    approached us with the idea of virtualizing a physical teaching tool that she uses every day, we were excited to get involved. 
    We wanted to build something that could revolutionize phonics instruction. Blend is our collaborative take on the modern blending board.`,
    points: [
      'Fully interactive virtual offering for physical blending boards',
      'Stripe integration for subscriptions processing',
      'Responsive product site built to showcase Blend',
      'Onsite user account management flow',
      'Custom mailing list solution for marketing campaigns and consumer updates',
      'Organizational licenses for groups of educators'
    ],
    imageAlt: 'Blend App Play Screen',
    url: 'https://blendreading.com',
    image: blend
  },
  {
    title: 'Membership Sync',
    tags: ['SvelteKit', 'TypeScript', 'Supabase', 'Cloudflare', 'Skeleton', 'Listmonk'],
    description: `Membership Sync provides our clients with a simple way to manage their membership and subscription-based businesses.
    It integrates with email services and updates automatically when customers interact with our custom websites.
    Membership Sync is currenly only available to our clients, but we intend to open it up to the public very soon!`,
    points: [
      'Simple member database that anybody can use',
      'Integrates with email marketing tools',
      'Automatically updates customer data when they interact with our custom websites',
      'No complicated setup, no extra fees'
    ],
    imageAlt: 'Blend App Play Screen',
    url: 'https://membershipsync.com',
    image: membershipSync
  },
  {
    title: 'Custom Websites',
    tags: ['SvelteKit', 'TypeScript', 'Netlify', 'PayPal', 'Venmo', 'Listmonk', 'Google Analytics'],
    description: `With over a decade of experience in web development, we specialize in creating user-friendly, high-performance websites for our clients. We use the latest technology and test across a wide variety of devices to ensure that our sites are built to the highest possible standards.`,
    points: [
      'Custom design and build of a responsive, lightweight website',
      'PayPal and Venmo integrations for onsite payment processing',
      "Embedded social media feeds to showcase client's online presence",
      'Custom mailing list solution for email campaign management',
      'Detailed analytics to track and analyze site traffic'
    ],
    imageAlt: 'A custom website built for KHA',
    url: 'https://kendalehoa.org',
    image: kha
  }
];
