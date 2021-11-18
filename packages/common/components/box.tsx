import { memo } from 'react';

import { styled } from '../stitches.config';

type Props = { forwardedRef?: React.Ref<any>; [key: string]: unknown };

const Box = styled('div', {});

const ForwardedRefBox = ({ forwardedRef, ...props }: Props) => {
  return <Box ref={forwardedRef} {...props}></Box>;
};

export default memo(ForwardedRefBox);
