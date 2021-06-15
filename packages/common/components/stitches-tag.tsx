import { getCssString, global } from '../stitches.config';

const globalStyles = global({
  '*': { boxSizing: 'border-box' },
  body: {
    backgroundColor: '$background',
    fontFamily: '$body',
    margin: 0,
  },
});

export default function StitchesTag() {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
  );
}

export function GlobalStyles() {
  globalStyles();
  return null;
}
