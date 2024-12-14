import type { FC } from 'react';
import { Check } from 'lucide-react';

type ImageOption = {
  label: string;
  value: string;
  imageUrl: string;
  description?: string;
};

type Props = {
  options: ImageOption[];
  selected: string | null;
  onSelect: (value: string) => void;
};

export const ImageChoice: FC<Props> = ({ options, selected, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
            selected === option.value
              ? 'ring-4 ring-blue-500 ring-offset-2 scale-[1.02]'
              : 'hover:ring-2 hover:ring-blue-200 hover:ring-offset-1'
          }`}
        >
          <div className="aspect-[4/3] relative">
            <img
              src={option.imageUrl}
              alt={option.label}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 transition-all duration-300 ${
              selected === option.value
                ? 'bg-blue-500/20'
                : 'group-hover:bg-blue-500/10'
            }`} />
            {selected === option.value && (
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center scale-in">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
          <div className={`p-4 transition-colors ${
            selected === option.value
              ? 'bg-blue-50'
              : 'bg-white group-hover:bg-gray-50'
          }`}>
            <h3 className={`font-medium mb-1 ${
              selected === option.value ? 'text-blue-700' : 'text-gray-900'
            }`}>
              {option.label}
            </h3>
            {option.description && (
              <p className="text-sm text-gray-600">
                {option.description}
              </p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};