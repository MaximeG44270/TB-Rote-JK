import React from 'react';

interface YouTubeEmbedProps {
  videoUrl: string;
  start?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoUrl, start = 0 }) => {
  const embedUrl = `${videoUrl}?start=${start}`;

  return (
    <div className="mt-8 border-2 border-gray-500 relative w-full" style={{ maxWidth: '100%', height: 0, paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          pointerEvents: 'auto',
        }}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;