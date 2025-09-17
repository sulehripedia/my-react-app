// src/components/ScrollVideo.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ScrollVideo.css';

const ScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playhead = useRef({ time: 0 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.registerPlugin(ScrollTrigger);

    const onReady = () => {
      const duration = video.duration;

      // Keep video paused
      video.pause();

      // Animate playhead to control video.currentTime
      gsap.to(playhead.current, {
        time: duration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom+=3000 top',
          scrub: 1.5, // smoother scrubbing
          onUpdate: () => {
            if (video.readyState >= 2) {
              video.currentTime = playhead.current.time;
            }
          },
        },
      });
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener('loadedmetadata', onReady);
    }

    return () => {
      video.removeEventListener('loadedmetadata', onReady);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="scroll-video-wrapper">
      <div className='video-overlay'/>
      <video
        ref={videoRef}
        src="/assets/main-video-2.mp4"
        preload="auto"
        muted
        playsInline
        className="scroll-video"
      />
    </div>
  );
};

export default ScrollVideo;

