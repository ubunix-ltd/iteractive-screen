import { initialVideos } from '@/lib/video-data';
import type { Video } from '@/types/video';
import { VideoGridClient } from '@/components/video/video-grid-client';
import { useEffect } from 'react';

// No longer fetching tags, directly use the imported videos.
// The initialVideos already conform to the Video type (or will after type update).

export default async function HomePage() {
  const videos: Video[] = initialVideos;

  
  return (
    <main className="h-screen">
      <VideoGridClient videos={videos} />
    </main>
  );
}
