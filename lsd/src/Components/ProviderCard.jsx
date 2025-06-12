import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ProviderCard({ provider }) {
  // Calculate star rating display with purple accent
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(provider.rating);
    const hasHalfStar = provider.rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-[#FFD700]" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-[#FFD700]" />);
      } else {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-gray-300 dark:text-gray-600" />);
      }
    }

    return stars;
  };

  return (
    <Link 
      to={`/providers/${provider.id}`}
      className="block border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#800080]/50 group bg-white dark:bg-[#1E1E1E]"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-[#800080] transition-colors">
            {provider.name}
          </h3>
          <p className="text-[#800080] font-medium mt-1">{provider.specialization}</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#800080]/10 text-[#800080] dark:text-[#FFD700] dark:bg-[#800080]/20">
          {provider.location}
        </span>
      </div>

      <p className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-2">
        {provider.shortDescription}
      </p>

      <div className="mt-4 flex items-center">
        <div className="flex mr-2">
          {renderStars()}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          ({provider.rating.toFixed(1)})
        </span>
        <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {provider.reviewCount} reviews
        </span>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#2A2A2A]">
        <button className="w-full bg-[#800080]/5 hover:bg-[#800080]/10 text-[#800080] dark:text-[#FFD700] font-medium py-2 px-4 rounded-lg transition-colors group-hover:bg-[#800080]/15 group-hover:shadow-sm">
          View Profile
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </button>
      </div>
    </Link>
  );
}