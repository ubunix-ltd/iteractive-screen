// src/components/video/video-card.tsx
"use client";

import type { Video } from '@/types/video';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
// CardHeader is no longer used
import { PlayCircle } from 'lucide-react';
import type React from 'react';
import { useRef } from 'react';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video, cardRef: React.RefObject<HTMLDivElement>) => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Card
      ref={cardRef}
      className="group w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer h-[64%] "
      onClick={() => onClick(video, cardRef)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(video, cardRef);
        }
      }}
      aria-label={`Play video: ${video.title}`}
    >
      <CardContent className="p-0"> {/* Image and text are now children of CardContent */}
        <div className="relative"> {/* Container for image and overlay */}
          <Image
            src={video.thumbnailUrl}
            alt={`Thumbnail for ${video.title}`}
            width={600}
            height={400}
            className="aspect-video object-cover w-full transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={video.aiHint}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110" />
          </div>
        </div>
        <div className="p-4"> {/* Inner div to provide padding for text content */}
          <CardTitle className="text-lg font-semibold mb-2 group-hover:text-accent" style={{color: "var(--color-primary-red)"}}>{video.title}</CardTitle>
          {/* <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p> */}
        </div>
      </CardContent>
      {/* CardHeader removed, CardFooter was already removed */}
    </Card>
  );
}
