import React, { useState, useEffect } from "react";
import { Youtube, ExternalLink } from "lucide-react";

// YouTube Channel Configuration
const YOUTUBE_CHANNEL_HANDLE = "@SakethAi.Automation";
const YOUTUBE_CHANNEL_URL = `https://www.youtube.com/${YOUTUBE_CHANNEL_HANDLE}`;

// Fallback videos if auto-fetch fails
const fallbackVideos = [
  "https://youtu.be/HsjgWEwdy6U?si=dS05G6bSAH1_rvOI",
  "https://youtu.be/Jay1PwTj-y4?si=iZqWQdgXloe-ksnB",
  "https://youtu.be/yN0_PKrgYRw?si=TOJng1CcYYLS0NVl",
  "https://youtu.be/47Bbj9tw5Ek?si=9sr7zODDxIvEI6uv",
  "https://youtu.be/1yhS6arcEgY?si=A_uI68Ljh6Lxo_dQ",
  "https://youtu.be/aCXzu10s7U4?si=esLLdWrFIclM2KfF", 
  "https://youtu.be/2ONYotzhiR4?si=a5DG6Qr_0qoWMr2C",
  "https://youtu.be/prgdjomM1lU?si=wSN7q-7Stpx6h42I",
  "https://youtu.be/9mzITDsX9SA?si=BJTye7TYC05CpREs",
  "https://youtu.be/6nTmxyajezg?si=T8xMf5MC1nf-_xQR"
];

interface Video {
  id: string;
  url: string;
  title?: string;
}

// Utility to extract YouTube video ID from URL (supports youtu.be and youtube.com)
function getYouTubeId(url: string): string {
  try {
    const urlObj = new URL(url);
    
    if (urlObj.hostname === "youtu.be" && urlObj.pathname.length > 1) {
      return urlObj.pathname.slice(1);
    }
    
    if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v") || "";
    }
    
    return "";
  } catch (error) {
    const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : "";
  }
}

const MarqueeVideoCarousel: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Convert fallback URLs to Video objects
    const videoList: Video[] = fallbackVideos.map(url => ({
      id: getYouTubeId(url),
      url: url,
    }));
    setVideos(videoList);

    // TODO: Implement auto-fetch from YouTube Data API or RSS feed
    // For auto-fetch, you'll need to:
    // 1. Get YouTube Data API key from Google Cloud Console
    // 2. Or use RSS feed: https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID
    // 3. Parse and extract latest videos
  }, []);

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...videos, ...videos];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-dark-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
            <Youtube className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">Latest from YouTube</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
            Learn with <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Free Tutorials</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
            Subscribe to our channel for AI automation tips, n8n workflows, and step-by-step guides
          </p>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            <Youtube className="w-5 h-5" />
            <span>Subscribe Now</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
          </a>
        </div>

        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-50 via-dark-50 to-transparent z-10 pointer-events-none"></div>

          <div className="relative overflow-hidden py-4">
            <div className="flex gap-6 animate-youtube-marquee" style={{ width: "max-content" }}>
              {duplicatedVideos.map((video, idx) => (
                <a
                  key={`${video.id}-${idx}`}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-80 flex-shrink-0 relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title || `YouTube video ${video.id}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        // Fallback to medium quality if maxres not available
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('maxresdefault')) {
                          target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }
                      }}
                    />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
                        <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* YouTube branding */}
                    <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-lg flex items-center space-x-1">
                      <Youtube className="w-4 h-4 text-white" />
                      <span className="text-white text-xs font-bold">Video</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes youtube-marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-youtube-marquee {
            animation: youtube-marquee 60s linear infinite;
          }
          .animate-youtube-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default MarqueeVideoCarousel;
