import { useParams, useNavigate } from 'react-router-dom';
import { getProviders } from '../api/api';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ProviderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProviders();
        const foundProvider = data.find(p => p.id === parseInt(id));
        
        if (!foundProvider) {
          setError('Provider not found');
        } else {
          setProvider(foundProvider);
        }
      } catch (err) {
        setError('Failed to load provider details');
        console.error('Error fetching provider:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProvider();
  }, [id]);

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {  
      if (i <= fullStars) {
        stars.push(<StarIcon key={i} className="w-6 h-6 text-[#FFD700]" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarIcon key={i} className="w-6 h-6 text-[#FFD700]" />);
      } else {
        stars.push(<StarIcon key={i} className="w-6 h-6 text-gray-300" />);
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 max-w-4xl min-h-screen flex flex-col">
        <div className="mt-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center px-5 py-3 text-[#800080] hover:text-white hover:bg-[#800080] rounded-lg transition-colors duration-300 mb-8 border border-[#800080] hover:border-transparent"
            disabled
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Providers
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#800080] mb-4"></div>
          <p className="text-gray-600">Loading provider details...</p>
        </div>
      </div>
    );
  }

  if (error || !provider) {
    return (
      <div className="container mx-auto p-4 max-w-4xl min-h-screen flex flex-col">
        <div className="mt-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center px-5 py-3 text-[#800080] hover:text-white hover:bg-[#800080] rounded-lg transition-colors duration-300 mb-8 border border-[#800080] hover:border-transparent"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Providers
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-[#800080] mb-4">{error || 'Provider not found'}</h2>
          <p className="text-gray-600 mb-6">We couldn't find the provider you're looking for.</p>
          <button 
            onClick={() => navigate('/providers')}
            className="px-6 py-3 bg-[#800080] text-white rounded-lg hover:bg-[#9C27B0] transition-colors"
          >
            Browse All Providers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center px-5 py-3 text-[#800080] hover:text-white hover:bg-[#800080] rounded-lg transition-colors duration-300 mb-8 border border-[#800080] hover:border-transparent mt-12"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Providers
      </button>

      <div className="bg-white dark:bg-[#1E1E1E] p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-[#2A2A2A]">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="w-32 h-32 rounded-full bg-[#800080]/10 flex items-center justify-center overflow-hidden border-2 border-[#800080]/30">
            {provider.image ? (
              <img 
                src={provider.image} 
                alt={provider.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '';
                  e.target.parentElement.classList.add('items-center', 'justify-center');
                }}
              />
            ) : (
              <div className="text-4xl font-bold text-[#800080]">
                {provider.name.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{provider.name}</h1>
                <p className="text-[#800080] font-medium mt-1">{provider.specialization}</p>
              </div>
              <span className="inline-flex items-center mt-2 sm:mt-0 px-3 py-1 rounded-full text-sm font-medium bg-[#800080]/10 text-[#800080] dark:text-[#FFD700]">
                <MapPinIcon className="h-4 w-4 mr-1" />
                {provider.location}
              </span>
            </div>

            <div className="mt-4 flex items-center">
              <div className="flex mr-2">
                {renderStars(provider.rating)}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                {provider.rating.toFixed(1)} ({provider.reviewCount} reviews)
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">About</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {provider.longDescription || 'No description available.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#2A2A2A]">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-[#800080] mr-3" />
                  <a 
                    href={`mailto:${provider.contactEmail}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-[#800080] hover:underline"
                  >
                    {provider.contactEmail || 'Not provided'}
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-[#800080] mr-3" />
                  <a 
                    href={`tel:${provider.phoneNumber}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-[#800080] hover:underline"
                  >
                    {provider.phoneNumber || 'Not provided'}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#800080] text-white rounded-lg hover:bg-[#9C27B0] transition-colors">
                Book Consultation
              </button>
              <button className="px-6 py-3 border border-[#800080] text-[#800080] rounded-lg hover:bg-[#800080]/10 transition-colors">
                View Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}