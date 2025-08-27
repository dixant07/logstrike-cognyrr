import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LogstrikeEvaluationVideo, RestaurantVideo, SupermarketVideo } from '@/assets';

interface VideoCarouselProps {
  className?: string;
}

const VideoCarousel = ({ className = "" }: VideoCarouselProps) => {
  const videos = [
    {
      src: LogstrikeEvaluationVideo,
      title: "Logstrike Evaluation Board",
      description: "Advanced AI vision technology in action"
    },
    {
      src: RestaurantVideo,
      title: "Restaurant Analytics",
      description: "Real-time restaurant monitoring and insights"
    },
    {
      src: SupermarketVideo,
      title: "Supermarket Intelligence",
      description: "Comprehensive retail analytics solution"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Title and description above the carousel */}
      <div className="relative text-center overflow-hidden min-h-[5.5rem] md:min-h-[6.5rem]">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex h-full flex-col items-center justify-center gap-2 transition-all duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{video.title}</h3>
            <p className="text-base md:text-lg text-muted-foreground">{video.description}</p>
          </div>
        ))}
      </div>
      
      <div className="relative overflow-hidden rounded-2xl shadow-hero">
        <div className="relative aspect-video">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
            aria-label="Next video"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;