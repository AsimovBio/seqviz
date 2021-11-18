import {
  Corner,
  Root,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area';

export default function ScrollArea({ children, ...props }) {
  return (
    <Root {...props}>
      <>
        <Viewport>{children}</Viewport>
        <Scrollbar orientation="horizontal">
          <Thumb />
        </Scrollbar>
        <Scrollbar orientation="vertical">
          <Thumb />
        </Scrollbar>
        <Corner />
      </>
    </Root>
  );
}
