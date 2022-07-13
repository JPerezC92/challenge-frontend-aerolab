import React from 'react';
import { Svg } from 'src/modules/shared/components/base/Svg';

type CrossActiveProps = {
  className?: string;
};

export const CrossActive: React.FC<CrossActiveProps> = ({ className }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.75 5.25L5.25 18.75"
        stroke="#7C899C"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 18.75L5.25 5.25"
        stroke="#7C899C"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
