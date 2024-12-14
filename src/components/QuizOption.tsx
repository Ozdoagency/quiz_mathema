import type { FC } from 'react';
import type { QuestionOption } from '../types/quiz';
import { Check } from 'lucide-react';

type Props = {
  option: QuestionOption;
  selected: boolean;
  onClick: () => void;
};

export const QuizOption: FC<Props> = ({ option, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 rounded-xl transition-all duration-300 
        ${selected 
          ? 'bg-primary/10 border border-primary shadow-lg shadow-primary/10 scale-[1.02]' 
          : 'bg-card/50 border border-border hover:bg-card/80 hover:border-primary/20 hover:shadow-md hover:-translate-y-1'
        }
      `}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xl text-primary">{option.label.split(' ')[0]}</span>
          <span className="text-foreground font-medium">
            {option.label.split(' ').slice(1).join(' ')}
          </span>
        </div>
        {selected && (
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-in fade-in duration-300">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
      </div>
    </button>
  );
};