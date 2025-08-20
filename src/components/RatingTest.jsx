import React from 'react';
import { useCompetitiveProgramming } from '../hooks/useCompetitiveProgramming';

const RatingTest = () => {
  const { ratings, loading, error, lastUpdated, refresh } = useCompetitiveProgramming(
    import.meta.env.VITE_CODEFORCES_HANDLE || '_.Manish._',
    import.meta.env.VITE_CODECHEF_HANDLE || 'manishk5507',
    1564, // Fallback Codeforces rating
    1889  // Fallback CodeChef rating
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Rating Test Component</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Status:</span>
          <span className={loading ? 'text-yellow-600' : 'text-green-600'}>
            {loading ? 'Loading...' : 'Loaded'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Codeforces:</span>
          <span className="font-mono">{loading ? '...' : ratings.codeforces}</span>
        </div>
        
        <div className="flex justify-between">
          <span>CodeChef:</span>
          <span className="font-mono">{loading ? '...' : ratings.codechef}</span>
        </div>
        
        {error && (
          <div className="text-red-600 text-sm">
            Error: {error}
          </div>
        )}
        
        {lastUpdated && (
          <div className="text-gray-500 text-sm">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
        )}
        
        <button 
          onClick={refresh}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          disabled={loading}
        >
          {loading ? 'Refreshing...' : 'Refresh Ratings'}
        </button>
      </div>
    </div>
  );
};

export default RatingTest;