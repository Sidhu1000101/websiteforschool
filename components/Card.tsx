import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  badge?: string;
  className?: string;
}

const Card = ({ title, description, icon: Icon, image, badge, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 card-shadow ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      
      {image && (
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-gray-400 text-sm">Image Placeholder</div>
        </div>
      )}

      {Icon && (
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-primary-600" size={24} />
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
