import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-white/50 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-2xl font-display font-semibold text-white mb-2">Loading Portfolio</h2>
        <p className="text-white/80">Preparing something amazing...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;