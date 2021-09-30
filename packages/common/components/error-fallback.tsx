import Box from './box';
import Text from './box';

export default function ErrorFallback({ error }) {
  return (
    <Box
      css={{
        alignItems: 'center',
        backgroundColor: '$warning',
        color: '$warningLight',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: '$2',
      }}
      role="alert"
    >
      <Text css={{ mb: '$2' }}>Whoops, something went wrong!</Text>
      <pre>{error.message}</pre>
    </Box>
  );
}
