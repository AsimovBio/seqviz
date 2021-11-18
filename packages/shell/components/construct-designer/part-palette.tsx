import type { Part_Type } from 'models/graphql';
import dynamic from 'next/dynamic';
import type { DraggableProvided, DroppableProvided } from 'react-beautiful-dnd';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Icon: any = dynamic(import('common/components/icon'), { ssr: false });
const Glyph: any = dynamic(import('common/components/glyph'), { ssr: false });
const Box: any = dynamic(import('common/components/box'), { ssr: false });

const StyledPartWrapper: any = dynamic(
  async () => {
    const { StyledPartWrapper } = await import(
      'common/components/mini-controller'
    );
    return StyledPartWrapper;
  },
  { ssr: false }
);

const StyledButton: any = dynamic(
  async () => {
    const { StyledButton } = await import('common/components/toolbar');
    return StyledButton;
  },
  { ssr: false }
);

const StyledRoot: any = dynamic(
  async () => {
    const { StyledRoot } = await import('common/components/toolbar');
    return StyledRoot;
  },
  { ssr: false }
);

export type Props = {
  onEvent: ({ type, value }: Record<string, string | number>) => void;
  partTypes: Partial<Part_Type>[];
};

export default function PartToolbar({ partTypes }: Props) {
  return (
    <Droppable
      direction="horizontal"
      droppableId="palette"
      isDropDisabled={true}
      renderClone={(
        { draggableProps, dragHandleProps, innerRef },
        snapshot,
        { source: { index } }
      ) => {
        const { name, glyph } = partTypes[index];

        return (
          <div {...draggableProps} {...dragHandleProps} ref={innerRef}>
            <StyledPartWrapper
              className="forward"
              color="transparent"
              css={{ svg: { fill: '$overlay' } }}
              data-testid="part-controller-activate"
            >
              <Glyph glyph={glyph} name={name} />
            </StyledPartWrapper>
          </div>
        );
      }}
    >
      {({ innerRef, droppableProps, placeholder }: DroppableProvided) => (
        <div ref={innerRef} {...droppableProps}>
          <StyledRoot
            css={{
              backgroundColor: '$overlay',
              justifyContent: 'center',
            }}
            data-testid="part-palette"
          >
            {partTypes.map(({ glyph, id, name }: Part_Type, i: number) => (
              <Draggable draggableId={id.toString()} index={i} key={id}>
                {({
                  draggableProps,
                  dragHandleProps,
                  innerRef,
                }: DraggableProvided) => {
                  return (
                    <div
                      {...draggableProps}
                      {...dragHandleProps}
                      ref={innerRef}
                    >
                      <StyledButton
                        color="transparent"
                        css={{
                          height: '2.5em',
                          overflow: 'hidden',
                          alignItems: 'baseline',
                          svg: {
                            position: 'relative',
                            bottom: '.25em',
                          },
                        }}
                        title={name}
                      >
                        <Icon label={name}>
                          <Box
                            as="span"
                            css={{ svg: { height: '3em' } }}
                            dangerouslySetInnerHTML={{ __html: glyph }}
                          />
                        </Icon>
                      </StyledButton>
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {placeholder}
          </StyledRoot>
        </div>
      )}
    </Droppable>
  );
}
