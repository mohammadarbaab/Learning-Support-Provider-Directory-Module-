import { useState, useEffect } from 'react';
import { getProviders } from '../api/api';
import ProviderCard from '../Components/ProviderCard';

function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const providersPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    getProviders()
      .then(data => {
        setProviders(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  // Filter providers based on search term
  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    provider.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastProvider = currentPage * providersPerPage;
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage;
  const currentProviders = filteredProviders.slice(indexOfFirstProvider, indexOfLastProvider);
  const totalPages = Math.ceil(filteredProviders.length / providersPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search providers by name or specialization..."
          className="p-3 border border-gray-300 rounded-lg w-full max-w-2xl mb-8 mt-16 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#800080]"></div>
          </div>
        ) : (
          <>
            {/* Providers Grid */}
            {currentProviders.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProviders.map(provider => (
                    <ProviderCard key={provider.id} provider={provider} />
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-12 mb-8">
                  <nav className="flex items-center gap-2">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#800080]/10 transition-colors"
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`w-10 h-10 rounded-full ${currentPage === number ? 'bg-[#800080] text-white' : 'hover:bg-[#800080]/10'} transition-colors`}
                      >
                        {number}
                      </button>
                    ))}

                    <button
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#800080]/10 transition-colors"
                    >
                      Next
                    </button>
                  </nav>
                </div>

                <div className="text-center text-gray-600 mb-8">
                  Showing {indexOfFirstProvider + 1}-{Math.min(indexOfLastProvider, filteredProviders.length)} of {filteredProviders.length} providers
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700">No providers found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search query</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProviderList;