"use client";

import type { Video } from "@/types/video";
import { VideoCard } from "./video-card";
import { FullscreenVideoPlayer } from "./fullscreen-video-player";
import React, { useState, useCallback, useEffect } from "react";
import logo from "@/lib/images/logo.svg";

interface VideoGridClientProps {
	videos: Video[];
}

export function VideoGridClient({ videos }: VideoGridClientProps) {
	const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
	const [cardRect, setCardRect] = useState<DOMRect | null>(null);

	const handleCardClick = useCallback(
		(video: Video, cardRef: React.RefObject<HTMLDivElement>) => {
			if (cardRef.current) {
				setCardRect(cardRef.current.getBoundingClientRect());
				setSelectedVideo(video);
			}
		},
		[],
	);

	const handleClosePlayer = useCallback(() => {
		setSelectedVideo(null);
		setCardRect(null);
	}, []);

	const enableFullscreen = useCallback(() => {
		const elem = document.documentElement;
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.webkitRequestFullscreen) {
			/* Safari */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) {
			/* IE11 */
			elem.msRequestFullscreen();
		}
	}, []);

	useEffect(() => {
		// Attach event listener for user interaction
		document.addEventListener("click", enableFullscreen, { once: true });

		return () => {
			// Remove event listener properly on unmount
			document.removeEventListener("click", enableFullscreen);
		};
		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration: <explanation>
	}, [enableFullscreen]);

	return (
		<div
			className="flex flex-col h-full "
			style={{
				// backgroundImage:
				// 	"url(https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//01-01.jpg)",
				backgroundPosition: "fit",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
        backgroundPositionY: "47%",
			}}
		>
			<header className="text-center px-4 sm:px-6 py-6">
        <div className="flex justify-start ">
        <img
					src="https://qjjklyugfxbxgwqhanfs.supabase.co/storage/v1/object/public/videos//logo.svg"
					alt="Decorative SVG"
					height={100}
					width={200}
				/>
        </div>
				<div className="">
        <h1
					className="text-4xl font-bold pt-10"
					style={{ color: "var(--color-primary-red)" }}
				>
					Solutions Beyond Connectivity
				</h1>
				<p className="text-lg text-muted-foreground">
					Tap on a video to play it fullscreen.
				</p>

        </div>
			</header>
			<div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 ">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} onClick={handleCardClick} />
				))}
			</div>
			{selectedVideo && (
				<FullscreenVideoPlayer
					video={selectedVideo}
					cardRect={cardRect}
					onClose={handleClosePlayer}
				/>
			)}
			<footer className="text-center px-4 sm:px-6 py-6">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				
			</footer>
		</div>
	);
}
