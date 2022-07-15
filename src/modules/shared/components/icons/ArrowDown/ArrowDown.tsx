import React from 'react';
import { Svg } from 'src/modules/shared/components/base/Svg';

type ArrowDownProps = {
  className?: string;
};

export const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => {
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
        d="M17.0625 13.2L12.375 17.8875H11.0625L6.375 13.2L7.6875 11.8687L10.7813 14.9437V4.5H12.6563V14.9437L15.75 11.85L17.0625 13.2Z"
        fill="white"
      />
    </Svg>
  );
};
