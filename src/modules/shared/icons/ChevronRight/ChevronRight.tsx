import React from 'react';

import { Svg } from 'src/modules/shared/components/base/Svg';

type ChevronRightProps = {
  className?: string;
};

export const ChevronRight: React.FC<ChevronRightProps> = ({ className }) => {
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
        d="M9 4.5L16.5 12L9 19.5"
        stroke="#8FA3BF"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </Svg>
  );
};
