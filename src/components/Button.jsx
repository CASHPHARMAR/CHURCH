import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-secondary hover:bg-teal-400 text-white shadow-lg shadow-secondary/20',
        outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
        white: 'bg-white text-primary hover:bg-gray-100',
    };

    return (
        <button
            className={twMerge(
                'px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
