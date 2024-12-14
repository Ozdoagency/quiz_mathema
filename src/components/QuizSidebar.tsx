import { Gift, Lightbulb, Play, X } from 'lucide-react';
import { useQuizContext } from '../context/QuizContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { getQuestions } from '../data/questions';
import { useRef, useState } from 'react';

export function QuizSidebar() {
  const { currentStep } = useQuizContext();
  const { language } = useLanguage();
  const t = translations[language].quiz;
  const questions = getQuestions(language);
  const currentQuestion = questions[currentStep];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoError = () => {
    console.error('Error loading video');
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
    <div className="space-y-4">
      {/* Consultant */}
      <div className="bg-card/80 backdrop-blur-xl rounded-xl p-4 md:p-6 shadow-sm border border-border">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 md:mb-4 border-2 border-primary/20">
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
              controls={false}
              controlsList="nodownload nofullscreen noremoteplayback"
              onError={handleVideoError}
            />
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full"
            >
              <Play className="w-8 h-8 text-white opacity-75" />
            </button>
          </div>
          <h3 className="font-semibold text-foreground">{t.consultant.name}</h3>
          <p className="text-sm text-primary mb-3 md:mb-4">{t.consultant.position}</p>
          <p className="text-sm text-muted-foreground">{t.consultant.description}</p>
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

      {/* Current Question Tip */}
      <div className="bg-primary/10 rounded-xl p-4 md:p-6 border border-primary/20">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-foreground mb-2">{t.tip}</h4>
            <p className="text-sm text-muted-foreground">
              {currentQuestion?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Guaranteed Bonuses */}
      <div className="bg-secondary/50 backdrop-blur-xl rounded-xl p-4 md:p-6 shadow-sm border border-border">
        <div className="flex items-start gap-3 mb-4">
          <Gift className="w-5 h-5 text-primary flex-shrink-0" />
          <h4 className="font-medium text-foreground">{t.guaranteedBonuses}</h4>
        </div>
        <ul className="space-y-3">
          {t.bonusList.map((bonus, index) => (
            <li key={index} className="flex items-start gap-2 group">
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover:bg-primary/20">
                <span className="text-primary text-sm">{index + 1}</span>
              </span>
              <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {bonus}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}