import React from 'react';
import { Button } from './ui/button';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button className="relative flex items-center justify-center p-4 bg-blue-500 text-white rounded-full animate-spin">
        <svg
          className="absolute w-6 h-6 text-background animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Carregando...
      </Button>
    </div>
  );
};

export default Loading;
