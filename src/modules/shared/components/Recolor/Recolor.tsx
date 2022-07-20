import styled from '@emotion/styled';
import React from 'react';

type RecolorNeutralProps = {
  shade: 0 | 100 | 200 | 300 | 500 | 600 | 900;
};

export const RecolorNeutral = styled.span<RecolorNeutralProps>(
  ({ shade, theme: { Colors } }) => ({
    color: Colors.neutral[shade],
  })
);
