import React from 'react';
import PropTypes from 'prop-types';

const GenderToggle = ({
  value = 'boy',
  onChange,
  size = 'medium',
  disabled = false,
}) => {
  const sizeStyles = {
    small: {
      container: 'h-10 text-sm',
      padding: 'p-1',
      icon: 'text-base',
      gap: 'gap-1',
    },
    medium: {
      container: 'h-14 text-base',
      padding: 'p-1.5',
      icon: 'text-xl',
      gap: 'gap-2',
    },
    large: {
      container: 'h-16 text-lg',
      padding: 'p-2',
      icon: 'text-2xl',
      gap: 'gap-2',
    },
  };

  const handleSelect = (selectedValue) => {
    if (!disabled && onChange) {
      onChange(selectedValue);
    }
  };

  const style = sizeStyles[size];

  return (
    <div
      className={`
        ${style.container}
        ${style.padding}
        bg-white
        rounded-full
        border-2 border-cyan-300
        flex items-center
        w-full max-w-sm
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {/* Boy Option */}
      <button
        type="button"
        onClick={() => handleSelect('boy')}
        disabled={disabled}
        className={`
          flex-1
          h-full
          rounded-full
          flex items-center justify-center ${style.gap}
          font-semibold
          transition-all duration-200
          ${value === 'boy'
            ? 'bg-cyan-200 text-cyan-900'
            : 'bg-transparent text-gray-500 hover:text-cyan-700'
          }
          ${!disabled && 'cursor-pointer'}
        `}
      >
        <span className={style.icon}>♂</span>
        <span>Boy</span>
      </button>

      {/* Girl Option */}
      <button
        type="button"
        onClick={() => handleSelect('girl')}
        disabled={disabled}
        className={`
          flex-1
          h-full
          rounded-full
          flex items-center justify-center ${style.gap}
          font-semibold
          transition-all duration-200
          ${value === 'girl'
            ? 'bg-cyan-200 text-cyan-900'
            : 'bg-transparent text-gray-500 hover:text-cyan-700'
          }
          ${!disabled && 'cursor-pointer'}
        `}
      >
        <span className={style.icon}>♀</span>
        <span>Girl</span>
      </button>
    </div>
  );
};

GenderToggle.propTypes = {
  value: PropTypes.oneOf(['boy', 'girl']),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

export default GenderToggle;
