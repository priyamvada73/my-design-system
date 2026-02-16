import React from 'react';

const Checkbox = ({ 
  checked = false,
  onChange,
  label,
  disabled = false,
  size = 'medium'
}) => {
  const sizeStyles = {
    small: 'w-5 h-5',
    medium: 'w-6 h-6',
    large: 'w-7 h-7'
  };

  const checkSizeStyles = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5'
  };

  const boxSize = sizeStyles[size] ?? sizeStyles.medium;
  const checkSize = checkSizeStyles[size] ?? checkSizeStyles.medium;

  return (
    <label className={`flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer group'}`}>
      <div className="relative flex-shrink-0 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 rounded-md">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />
        <div 
          className={`
            ${boxSize}
            ${checked 
              ? 'bg-emerald-500 border-emerald-500' 
              : 'bg-white border-gray-300 group-hover:border-gray-400'
            }
            border-2 rounded-md
            flex items-center justify-center
            transition-all duration-200
          `}
        >
          {checked && (
            <svg 
              className={`${checkSize} text-white`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          )}
        </div>
      </div>
      
      {label && (
        <span className={`text-base ${
          checked 
            ? 'text-gray-400 line-through' 
            : 'text-gray-900'
        }`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
