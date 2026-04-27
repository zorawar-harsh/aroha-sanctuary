import React from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

const SiteDown = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Icon Section */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-yellow-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <AlertTriangle className="relative h-24 w-24 text-yellow-500 mx-auto" />
      </div>

      {/* Text Content */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Something's Not Right
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        We're having trouble connecting to our servers or the site is currently under maintenance. 
        Don't worry, we're already on it!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleRefresh}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md"
        >
          <RefreshCw size={18} />
          Try Refreshing
        </button>
        
        <a
          href="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors shadow-sm"
        >
          <Home size={18} />
          Go to Home
        </a>
      </div>

      {/* Status Footer */}
      <div className="mt-12 text-sm text-gray-400">
        Error Code: <span className="font-mono">503_SERVICE_UNAVAILABLE</span>
      </div>
    </div>
  );
};

export default SiteDown;