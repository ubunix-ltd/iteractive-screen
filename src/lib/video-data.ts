import type { Video } from '@/types/video';


// Placeholder video URLs. Replace with actual video sources if available.
const placeholderVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
export const initialVideos: Video[] = [
  {
    id: '1',
    title: 'Smart Utilities',
    description: 'A breathtaking journey through towering peaks and serene valleys, showcasing the beauty of untouched nature.',
    thumbnailUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//water_thumbnail.jpeg',
    videoUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//VBU_water%202.mp4',
    aiHint: 'mountain landscape',
  },
  {
    id: '2',
    title: 'Asset Tracking',
    description: 'Experience the dazzling lights and bustling energy of a modern metropolis after dark.',
    thumbnailUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//asset_thumbanail.jpeg',
    videoUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//VBU_asset%202.mp4', 
    aiHint: 'city night',
  },
  {
    id: '3',
    title: 'Cloud and Hosting',
    description: 'A mesmerizing display of colorful inks and fluids interacting in slow motion, creating artistic patterns.',
    thumbnailUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//cloud_thumbanial.jpeg',
    videoUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//VBU_cloud%203.mp4', 
    aiHint: 'abstract art',
  },
  {
    id: '4',
    title: 'Vodacom\'s Journey to a Future-Ready Tech Ecosystem',
    description: 'A mesmerizing display of colorful inks and fluids interacting in slow motion, creating artistic patterns.',
    thumbnailUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//doodle.jpg',
    videoUrl: 'https://media-hosting.imagekit.io/f7b8c9bf00024753/vodacom%20future%20ready%20summit%20Doodle.mp4?Expires=1841619098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aocBTZ5cQg2034G-lg3sc7MdszhrzF-aFFJaQlFzgeNY4ksNG9zwG5Oqd7izjWjl8Nq0uKnDn7VU74cb~Sg9M8YKTDsi8cM~dAXuzuClM7WP9m139P-vL5de6xLRohZqMAlwmrZyy6UtQ6u3qOqsdOL~xRTWfzVHkRwozD2GqVvCNDeBNnfmDXCZHUK1PEWLD3SVPRwDwvc03AvscAEuQpE3rgs5pbvGV82sZfpjiyZ0xs5OkSleR9zxYkuq6CjkQ2Nk8lU7ftpL45GM6UcBzhNmxiPwWBBmxC-uchDq-Hd~gweZngJ-iMxuw2fE6VnNR86gQxWcTz78xly6lw6apA__', 
    aiHint: 'abstract art',
  },
];
