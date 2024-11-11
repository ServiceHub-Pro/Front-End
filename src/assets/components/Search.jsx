import React, { useState } from 'react';
import { Search, X, Loader2 } from 'lucide-react';

const Search = ({ onSearch, placeholder = "Search for artisans, crafts, or services..." }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    try {
      await onSearch(searchQuery);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative group">
        {/* Main Search Container */}
        <div
          className={`
            relative flex items-center transition-all duration-300
            ${isFocused 
              ? 'shadow-lg transform -translate-y-0.5' 
              : 'shadow-md hover:shadow-lg'
            }
            bg-white rounded-xl overflow-hidden
            border-2 border-[#8B5E3C] focus-within:border-[#6B4423]
          `}
        >
          {/* Search Icon */}
          <div className="pl-4">
            <Search 
              className={`
                w-5 h-5 transition-colors duration-300
                ${isFocused ? 'text-[#6B4423]' : 'text-[#8B5E3C]'}
              `}
            />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`
              w-full py-4 px-3 text-lg
              bg-transparent outline-none
              text-[#4A3526] placeholder-[#B08968]
              transition-all duration-300
            `}
          />

          {/* Clear and Loading Icons */}
          <div className="pr-4 flex items-center space-x-2">
            {searchQuery && !isLoading && (
              <button
                type="button"
                onClick={clearSearch}
                className="p-1 hover:bg-[#F5EDE7] rounded-full transition-colors duration-200"
              >
                <X className="w-4 h-4 text-[#8B5E3C]" />
              </button>
            )}
            {isLoading && (
              <Loader2 className="w-5 h-5 text-[#8B5E3C] animate-spin" />
            )}
          </div>
        </div>

        {/* Search Suggestions Container - can be expanded for autocomplete */}
        {isFocused && searchQuery && (
          <div className="
            absolute w-full mt-2 py-2 
            bg-white rounded-lg shadow-lg 
            border border-[#E6D5C7]
            z-10
          ">
            {/* Example suggestion items */}
            <div className="py-2 px-4 hover:bg-[#F5EDE7] cursor-pointer text-[#4A3526]">
              Search "{searchQuery}"
            </div>
          </div>
        )}
      </form>

      {/* Optional Search Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        <button 
          className="
            px-3 py-1 text-sm
            rounded-full bg-[#F5EDE7] text-[#6B4423]
            hover:bg-[#E6D5C7] transition-colors duration-200
          "
        >
          Popular
        </button>
        <button 
          className="
            px-3 py-1 text-sm
            rounded-full bg-[#F5EDE7] text-[#6B4423]
            hover:bg-[#E6D5C7] transition-colors duration-200
          "
        >
          Nearby
        </button>
        <button 
          className="
            px-3 py-1 text-sm
            rounded-full bg-[#F5EDE7] text-[#6B4423]
            hover:bg-[#E6D5C7] transition-colors duration-200
          "
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Search;