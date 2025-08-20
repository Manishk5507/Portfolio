// Competitive Programming API Service
const CODEFORCES_API = 'https://codeforces.com/api/user.info';
const CODECHEF_API = 'https://codechef-api.vercel.app';

// Cache to avoid too many API calls
const cache = {
  codeforces: { data: null, timestamp: 0 },
  codechef: { data: null, timestamp: 0 }
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch Codeforces user rating
 * @param {string} handle - Codeforces username
 * @returns {Promise<number|null>} Current rating or null if failed
 */
export const getCodeforcesRating = async (handle) => {
  try {
    // Check cache first
    const now = Date.now();
    if (cache.codeforces.data && (now - cache.codeforces.timestamp) < CACHE_DURATION) {
      return cache.codeforces.data;
    }

    const response = await fetch(`${CODEFORCES_API}?handles=${handle}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status === 'OK' && data.result && data.result.length > 0) {
      const rating = data.result[0].rating || 0;
      
      // Cache the result
      cache.codeforces = {
        data: rating,
        timestamp: now
      };
      
      return rating;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching Codeforces rating:', error);
    return null;
  }
};

/**
 * Fetch CodeChef user rating
 * @param {string} handle - CodeChef username
 * @returns {Promise<number|null>} Current rating or null if failed
 */
export const getCodeChefRating = async (handle) => {
  try {
    // Check cache first
    const now = Date.now();
    if (cache.codechef.data && (now - cache.codechef.timestamp) < CACHE_DURATION) {
      return cache.codechef.data;
    }

    const response = await fetch(`${CODECHEF_API}/${handle}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.currentRating) {
      const rating = parseInt(data.currentRating);
      
      // Cache the result
      cache.codechef = {
        data: rating,
        timestamp: now
      };
      
      return rating;
    } else if (data.rating) {
      // Alternative response format
      const rating = parseInt(data.rating);
      
      // Cache the result
      cache.codechef = {
        data: rating,
        timestamp: now
      };
      
      return rating;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching CodeChef rating:', error);
    return null;
  }
};

/**
 * Fetch both ratings simultaneously
 * @param {string} codeforcesHandle - Codeforces username
 * @param {string} codechefHandle - CodeChef username
 * @returns {Promise<{codeforces: number|null, codechef: number|null}>}
 */
export const getBothRatings = async (codeforcesHandle, codechefHandle) => {
  try {
    const [codeforcesRating, codechefRating] = await Promise.all([
      getCodeforcesRating(codeforcesHandle),
      getCodeChefRating(codechefHandle)
    ]);

    return {
      codeforces: codeforcesRating,
      codechef: codechefRating
    };
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return {
      codeforces: null,
      codechef: null
    };
  }
};

/**
 * Clear cache (useful for testing or manual refresh)
 */
export const clearCache = () => {
  cache.codeforces = { data: null, timestamp: 0 };
  cache.codechef = { data: null, timestamp: 0 };
};

/**
 * Get cache status for debugging
 */
export const getCacheStatus = () => {
  const now = Date.now();
  return {
    codeforces: {
      cached: cache.codeforces.data !== null,
      age: cache.codeforces.timestamp ? now - cache.codeforces.timestamp : 0,
      data: cache.codeforces.data
    },
    codechef: {
      cached: cache.codechef.data !== null,
      age: cache.codechef.timestamp ? now - cache.codechef.timestamp : 0,
      data: cache.codechef.data
    }
  };
};

/**
 * Test API endpoints directly (for debugging)
 */
export const testAPIs = async (codeforcesHandle, codechefHandle) => {
  const results = {
    codeforces: { success: false, data: null, error: null },
    codechef: { success: false, data: null, error: null }
  };

  // Test Codeforces
  try {
    const cfResponse = await fetch(`${CODEFORCES_API}?handles=${codeforcesHandle}`);
    const cfData = await cfResponse.json();
    results.codeforces = {
      success: cfResponse.ok && cfData.status === 'OK',
      data: cfData,
      error: cfResponse.ok ? null : `HTTP ${cfResponse.status}`
    };
  } catch (error) {
    results.codeforces.error = error.message;
  }

  // Test CodeChef
  try {
    const ccResponse = await fetch(`${CODECHEF_API}/${codechefHandle}`);
    const ccData = await ccResponse.json();
    results.codechef = {
      success: ccResponse.ok,
      data: ccData,
      error: ccResponse.ok ? null : `HTTP ${ccResponse.status}`
    };
  } catch (error) {
    results.codechef.error = error.message;
  }

  return results;
};