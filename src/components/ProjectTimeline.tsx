// src/components/ProjectTimeline.tsx
import React, { useState } from 'react';
import './ProjectTimeline.css';

type Media = {
  type: 'image' | 'video';
  src: string;
};

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  media?: Media[];
};

const timelineData: TimelineItem[] = [
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Montfort expanded operations across Asia, Europe, and Africa.',
    media: [
      { type: 'image', src: '/assets/expansion1.jpg' },
      { type: 'image', src: '/assets/expansion2.jpg' }
    ]
  },
  {
    year: '2022',
    title: 'Green Initiatives',
    description: 'Launched green energy trading infrastructure.',
    media: [
      { type: 'video', src: '/assets/green.mp4' }
    ]
  },
  {
    year: '2023',
    title: 'AI Innovation',
    description: 'Built predictive AI for logistics.',
    media: [] // Fallback to text only
  }
];

const ProjectTimeline: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Project Timeline</h2>
      <div className="timeline">
        {timelineData.map((item, index) => {
          const hasMedia = item.media && item.media.length > 0;
          return (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="content">
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>

                {hasMedia && (
                  <div className="media-preview">
                    {item.media?.map((media, i) => (
                      <div className="media-item" key={i}>
                        {media.type === 'image' ? (
                          <img
                            src={media.src}
                            alt=""
                            className={hoveredIndex === index ? 'media-visible' : 'media-hidden'}
                          />
                        ) : (
                          <video
                            src={media.src}
                            muted
                            playsInline
                            loop
                            className={hoveredIndex === index ? 'media-visible' : 'media-hidden'}
                            autoPlay={hoveredIndex === index}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectTimeline;
