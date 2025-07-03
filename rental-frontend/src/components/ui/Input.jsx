// src/components/ui/Input.jsx
import React from 'react';
import clsx from 'clsx';

const Input = React.forwardRef(({ type = 'text', className, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={clsx(
        'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input'; // For better debugging in React DevTools

export default Input;