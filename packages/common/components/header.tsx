import { styled } from '../stitches.config';
import Box from './box';

export default styled(Box, {
  alignItems: 'center',
  background: '$overlay',
  borderColor: '$highlight',
  borderStyle: 'solid',
  borderWidth: '0 0 $space$1 0',
  display: 'flex',
  px: '$3',
  py: '$2',
  width: '100%',
  svg: { mr: '$2', path: { stroke: '$primary' } },
});
