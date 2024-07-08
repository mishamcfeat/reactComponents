import propTypes from 'prop-types';
import className from 'classnames';
import { twMerge } from 'tailwind-merge';

// Button component
function Button({ children, primary, secondary, success, danger, warning, rounded, outline, ...rest }) {
  Button.propTypes = {
    primary: propTypes.bool,
    secondary: propTypes.bool,
    success: propTypes.bool,
    danger: propTypes.bool,
    warning: propTypes.bool,
    rounded: propTypes.bool,
    outline: propTypes.bool,
    onClick: propTypes.func
  };

  // Ensure only one prop type can be true at a time
  const propCount = [primary, secondary, success, danger, warning].filter(Boolean).length;
  if (propCount > 1) {
    throw new Error('Only one prop type can be true at a time');
  }

  // later styling overrides earlier styling
  const styling = twMerge(
    className(rest.className, 'flex items-center px-3 py-1.5 border m-1', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-lg': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
      'hover:bg-opacity-80 hover:shadow-md': !outline // Add hover:shadow-md class
    })
  );

  return (
    <button className={styling} {...rest}>
      {children}
    </button>
  );
}

export default Button;
