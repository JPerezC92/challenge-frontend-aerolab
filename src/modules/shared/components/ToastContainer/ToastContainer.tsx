import React from 'react';
import { ToastContainer as ToastifyContainer } from 'react-toastify';

type ToastContainerProps = {
  className?: string;
};

export const ToastContainer: React.FC<ToastContainerProps> = ({}) => {
  return (
    <ToastifyContainer
      closeButton={false}
      closeOnClick={false}
      hideProgressBar
      position="bottom-left"
      style={{ width: 'auto' }}
      toastStyle={{
        padding: 0,
        margin: 0,
        background: 'transparent',
        boxShadow: 'none',
        borderRadius: 'none',
      }}
    />
  );
};
