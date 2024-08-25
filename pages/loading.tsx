// components/Loading.tsx
import React from 'react';

interface LoadingProps {
  message?: string; // Optional message to display along with the spinner
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-textGreen rounded-full' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      {message && <p className='mt-4 text-lg text-textDark'>{message}</p>}
    </div>
  );
};

export default Loading;
