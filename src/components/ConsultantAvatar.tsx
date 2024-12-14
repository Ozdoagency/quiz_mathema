import { FC, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { ChevronDown, ChevronUp, Play, X } from 'lucide-react';

export const ConsultantAvatar: FC = () => {
  const { language } = useLanguage();
  const t = translations[language].quiz.consultant;
  const [isExpanded, setIsExpanded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handlePlayClick = () => {
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <div className="flex items-center gap-4 bg-card border border-border shadow-sm p-4 rounded-xl">
        <div className="relative">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
            {videoError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-sm text-gray-500">Video not available</span>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  src="2024-12-14 10.58.17.mov"
                  className="w-full h-full object-cover rounded-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                  disablePictureInPicture
                  onError={handleVideoError}
                  controls={false}
                  controlsList="nodownload nofullscreen noremoteplayback"
                />
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full"
                >
                  <Play className="w-8 h-8 text-white opacity-75" />
                </button>
              </>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-semibold text-foreground truncate">
              {t.name}
            </h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {t.title}
            </span>
          </div>
          <p className={`text-sm text-muted-foreground ${isExpanded ? '' : 'truncate'}`}>
            {t.description}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-primary mt-1"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            <span className="ml-1 text-xs">{isExpanded ? 'Свернуть' : 'Развернуть'}</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 md:p-8"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-black rounded-lg overflow-hidden max-h-full max-w-3xl w-full modal-content">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              ref={videoRef}
              src="2024-12-14 10.58.17.mov"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline
              disablePictureInPicture
              onError={handleVideoError}
              controls
              controlsList="nodownload nofullscreen noremoteplayback"
            />
          </div>
        </div>
      )}
    </>
  );
};