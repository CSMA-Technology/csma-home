import blend from '$lib/assets/projects/blend-feature/play.png';
import kha from '$lib/assets/projects/kha-feature/kha-home.png';
import sage from '$lib/assets/projects/sage-feature/sage-home-resized.png';
import membershipSync from '$lib/assets/projects/membership-sync-feature/membership-sync.png';
import hammerPoint from '$lib/assets/projects/hammerpoint-feature/hp-website.png';
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
  }
];

export const websites = [
  {
    title: 'Kendale HOA',
    tags: ['SvelteKit', 'TypeScript', 'Netlify', 'PayPal', 'Venmo', 'Listmonk', 'Google Analytics'],
    description: `The Kendale HOA is a voluntary HOA in the Miami area. They needed a website that would allow them to accept payments online, post updates for their members, and showcase their social media presence. We built them a custom website that met all of their needs.`,
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
  },
  {
    title: 'Sage Literacy',
    tags: ['SvelteKit', 'TypeScript', 'Netlify', 'Tutorbird', 'Listmonk', 'Google Analytics'],
    description: `Sage Literacy is a private literacy tutoring service for children in the Tampa, Florida area. They needed a website that allowed them to manage inquiries, schedule consultations, and showcase their services. We replaced their former WordPress site with a custom-built, lightweight, and responsive website.`,
    points: [
      'Custom design and build of a responsive, lightweight website',
      'Integration with third-party scheduling software for consultations and appointments',
      'Custom mailing list solution for email campaign management',
      'Detailed analytics to track and analyze site traffic'
    ],
    imageAlt: 'A custom website built for Sage Literacy',
    url: 'https://sageliteracy.org',
    image: sage
  },
  {
    title: 'Hammer Point',
    tags: ['SvelteKit', 'TypeScript', 'Netlify', 'Listmonk', 'Google Analytics'],
    description: `After hearing about our work on the Kendale HOA website, the Hammer Point community in the Florida Keys reached out and asked us to build them their first ever website. Their needs were different, as their member updates were more infrequent and they had more permanent information to display, as well as a desire to showcase the beautiful wildlife photos that their members submit. We built them a simple, beautiful, and responsive site that has been a hit with their members.`,
    points: [
      'Custom design and build of a responsive, lightweight website',
      'Custom mailing list solution for email campaign management',
      'Detailed analytics to track and analyze site traffic',
      'Embedded photo gallery to showcase member-submitted wildlife photos'
    ],
    imageAlt: 'A custom website built for Hammer Point',
    url: 'https://hammerpointhoa.com',
    image: hammerPoint
  }
];
