import { useState, useEffect } from 'react';
import { getBothRatings } from '../services/competitiveProgramming';

/**
 * Custom hook to fetch and manage competitive programming ratings
 * @param {string} codeforcesHandle - Codeforces username
 * @param {string} codechefHandle - CodeChef username
 * @param {number} fallbackCodeforces - Fallback Codeforces rating
 * @param {number} fallbackCodechef - Fallback CodeChef rating
 * @returns {Object} Ratings state and loading status
 */
export const useCompetitiveProgramming = (
  codeforcesHandle, 
  codechefHandle, 
  fallbackCodeforces = 1564, 
  fallbackCodechef = 1889
) => {
  const [ratings, setRatings] = useState({
    codeforces: fallbackCodeforces,
    codechef: fallbackCodechef
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await getBothRatings(codeforcesHandle, codechefHandle);
        
        setRatings({
          codeforces: result.codeforces || fallbackCodeforces,
          codechef: result.codechef || fallbackCodechef
        });
        
        setLastUpdated(new Date());
      } catch (err) {
        console.error('Error in useCompetitiveProgramming:', err);
        setError(err.message);
        
        // Use fallback values on error
        setRatings({
          codeforces: fallbackCodeforces,
          codechef: fallbackCodechef
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, [codeforcesHandle, codechefHandle, fallbackCodeforces, fallbackCodechef]);

  const refresh = () => {
    const fetchRatings = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await getBothRatings(codeforcesHandle, codechefHandle);
        
        setRatings({
          codeforces: result.codeforces || fallbackCodeforces,
          codechef: result.codechef || fallbackCodechef
        });
        
        setLastUpdated(new Date());
      } catch (err) {
        console.error('Error in useCompetitiveProgramming:', err);
        setError(err.message);
        
        // Use fallback values on error
        setRatings({
          codeforces: fallbackCodeforces,
          codechef: fallbackCodechef
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  };

  return {
    ratings,
    loading,
    error,
    lastUpdated,
    refresh
  };
};