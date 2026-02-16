import React from 'react';

const Toggle = ({
  checked = false,
  onChange,
  label,
  disabled = false,
  size = 'medium'
}) => {
  const sizeStyles = {
    small: {
      track: 'w-9 h-5',
      thumb: 'w-4 h-4',
      translate: 'translate-x-4'
    },
    medium: {
      track: 'w-11 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-5'
    },
    large: {
      track: 'w-14 h-7',
      thumb: 'w-6 h-6',
      translate: 'translate-x-7'
    }
  };

  const labelSizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <label className={`flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      {label && (
        <span className={`${labelSizeStyles[size]} font-medium text-gray-900`}>
          {label}
        </span>
      )}

      <div className="relative flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />

        {/* Track */}
        <div
          className={`
            ${sizeStyles[size].track}
            flex items-center
            ${checked
              ? 'bg-emerald-500'
              : 'bg-gray-300'
            }
            rounded-full
            transition-colors duration-200
            ${!disabled && 'hover:shadow-md'}
          `}
        >
          {/* Thumb */}
          <div
            className={`
              ${sizeStyles[size].thumb}
              flex-shrink-0
              ${checked
                ? sizeStyles[size].translate
                : 'translate-x-0.5'
              }
              bg-white
              rounded-full
              shadow-md
              transition-transform duration-200
            `}
          />
        </div>
      </div>
    </label>
  );
};

export default Toggle;
