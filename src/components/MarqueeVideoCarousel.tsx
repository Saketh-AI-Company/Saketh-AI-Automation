import React from "react";

// Your actual YouTube URLs - Add your 10 URLs here
const youtubeLinks = [
  "https://youtu.be/HsjgWEwdy6U?si=dS05G6bSAH1_rvOI",
  "https://youtu.be/Jay1PwTj-y4?si=iZqWQdgXloe-ksnB",
  // Add 
  "https://youtu.be/yN0_PKrgYRw?si=TOJng1CcYYLS0NVl",
  "https://youtu.be/47Bbj9tw5Ek?si=9sr7zODDxIvEI6uv",
  "https://youtu.be/1yhS6arcEgY?si=A_uI68Ljh6Lxo_dQ",
  "https://youtu.be/aCXzu10s7U4?si=esLLdWrFIclM2KfF", 
  "https://youtu.be/2ONYotzhiR4?si=a5DG6Qr_0qoWMr2C",
  "https://youtu.be/prgdjomM1lU?si=wSN7q-7Stpx6h42I",
  "https://youtu.be/9mzITDsX9SA?si=BJTye7TYC05CpREs",
  "https://youtu.be/6nTmxyajezg?si=T8xMf5MC1nf-_xQR"
];

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

const MarqueeVideoCarousel: React.FC = () => (
  <div className="w-full bg-white py-6 overflow-hidden mb-16">
    {/* Heading */}
    <h1 className="text-4xl font-semibold text-black mb-6 text-center">Follow Us on YouTube</h1>
    
    {/* Marquee */}
    <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
      {youtubeLinks.concat(youtubeLinks).map((url, idx) => {
        const videoId = getYouTubeId(url);
        return (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-52 flex-shrink-0 relative"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={`YouTube video ${videoId}`}
              className="rounded-lg shadow-lg transition-transform hover:scale-105 w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg cursor-pointer">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
    
    {/* Styling for marquee animation */}
    <style>
      {`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}
    </style>
  </div>
);

export default MarqueeVideoCarousel;
