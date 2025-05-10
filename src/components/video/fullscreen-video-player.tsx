"use client";

import type { Video } from '@/types/video';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

interface FullscreenVideoPlayerProps {
  video: Video;
  cardRect: DOMRect | null;
  onClose: () => void;
}

const TRANSITION_DURATION_MS = 300;

export function FullscreenVideoPlayer({ video, cardRect, onClose }: FullscreenVideoPlayerProps) {
  const [playerStyle, setPlayerStyle] = useState<React.CSSProperties>({});
  const [showVideo, setShowVideo] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!cardRect) {
      // Fallback if cardRect is somehow not available
      setPlayerStyle({
        top: '50%',
        left: '50%',
        width: '0px',
        height: '0px',
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.5)',
      });
    } else {
      setPlayerStyle({
        top: `${cardRect.top}px`,
        left: `${cardRect.left}px`,
        width: `${cardRect.width}px`,
        height: `${cardRect.height}px`,
        opacity: 0,
      });
    }

    // Trigger animation to fullscreen
    const timeoutId = setTimeout(() => {
      setPlayerStyle({
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100vh',
        opacity: 1,
        borderRadius: '0px',
      });
      setShowVideo(true); // Show video after initial expansion starts
    }, 50); // Short delay to ensure styles are applied before transition

    return () => clearTimeout(timeoutId);
  }, [cardRect]);

  const handleClose = () => {
    setShowVideo(false); // Hide video immediately to prevent visual glitches during shrink
    if (cardRect) {
      setPlayerStyle({
        top: `${cardRect.top}px`,
        left: `${cardRect.left}px`,
        width: `${cardRect.width}px`,
        height: `${cardRect.height}px`,
        opacity: 0,
      });
    } else {
      // Fallback close animation
       setPlayerStyle({
        top: '50%',
        left: '50%',
        width: '0px',
        height: '0px',
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.5)',
      });
    }

    // Wait for transition to complete before calling onClose
    const timeoutId = setTimeout(onClose, TRANSITION_DURATION_MS);
    return () => clearTimeout(timeoutId);
  };

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardRect]); // Dependencies ensure handleClose has the correct cardRect

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose();}} // Close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-labelledby="videoPlayerTitle"
    >
      <div
        ref={playerRef}
        className="absolute bg-black shadow-2xl overflow-hidden"
        style={{
          ...playerStyle,
          transition: `all ${TRANSITION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      >
        {showVideo && (
          <video
            ref={videoRef}
            src={video.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
            onError={(e) => console.error("Video error:", e)}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {/* Close button positioned relative to the viewport for consistent placement */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-[51] text-white bg-black/30 hover:bg-black/50 hover:text-white w-12 h-12 rounded-full"
        onClick={handleClose}
        aria-label="Close video player"
        style={{ opacity: showVideo ? 1 : 0, transition: `opacity ${TRANSITION_DURATION_MS}ms ease-in-out ${TRANSITION_DURATION_MS/2}ms`}}
      >
        <X className="w-8 h-8" />
      </Button>
      <h2 id="videoPlayerTitle" className="sr-only">{`Playing video: ${video.title}`}</h2>
    </div>
  );
}
