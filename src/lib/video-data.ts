import type { Video } from '@/types/video';


// Placeholder video URLs. Replace with actual video sources if available.
const placeholderVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
export const initialVideos: Video[] = [
  {
    id: '1',
    title: 'Smart Utilities',
    description: 'A breathtaking journey through towering peaks and serene valleys, showcasing the beauty of untouched nature.',
    thumbnailUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//water_thumbnail.jpeg',
    videoUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//VBU_water.mp4',
    aiHint: 'mountain landscape',
  },
  {
    id: '2',
    title: 'Asset Tracking',
    description: 'Experience the dazzling lights and bustling energy of a modern metropolis after dark.',
    thumbnailUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//asset_thumbanail.jpeg',
    videoUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//VBU_asset.mp4', 
    aiHint: 'city night',
  },
  {
    id: '3',
    title: 'Cloud and Hosting',
    description: 'A mesmerizing display of colorful inks and fluids interacting in slow motion, creating artistic patterns.',
    thumbnailUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//cloud_thumbanial.jpeg',
    videoUrl: 'https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//VBU_cloud%202.mp4', 
    aiHint: 'abstract art',
  },
];
