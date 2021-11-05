import type { Construct_Part } from 'models/graphql';
import dynamic from 'next/dynamic';

const Icon: any = dynamic(import('common/components/icon'), { ssr: false });
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
  canMove: boolean;
  canUndo: boolean;
  canRedo: boolean;
  clipboardItems: Construct_Part[];
  onEvent: ({ type, value }: Record<string, string | number>) => void;
  onToggleLabels: () => void;
};

export default function Toolbar({
  canMove,
  canUndo,
  canRedo,
  clipboardItems,
  onEvent,
  onToggleLabels,
}: Props) {
  const handleEvent = ({ currentTarget: { name: type, value } }) => {
    onEvent({ type, value: value ? value : undefined });
  };

  return (
    <StyledRoot
      css={{
        display: 'block',
        flex: '0 0 4rem',
        button: {
          display: 'inline-block',
        },
      }}
      data-testid="construct-toolbar"
    >
      <StyledButton
        color="tertiary"
        data-testid="button-undo"
        disabled={!canUndo}
        name="UNDO"
        onClick={handleEvent}
        title="Undo"
        type="button"
      >
        <Icon label="Reply" />
      </StyledButton>
      <StyledButton
        color="tertiary"
        data-testid="button-redo"
        disabled={!canRedo}
        name="REDO"
        onClick={handleEvent}
        title="Redo"
        type="button"
      >
        <Icon css={{ transform: 'scaleX(-1)' }} label="Reply" />
      </StyledButton>

      <StyledButton
        color="tertiary"
        data-testid="button-delete"
        name="DELETE"
        onClick={handleEvent}
        title="Delete part"
        type="button"
      >
        <Icon label="Backspace" />
      </StyledButton>
      <StyledButton
        color="tertiary"
        data-testid="button-toggle-flip"
        name="FLIP"
        onClick={handleEvent}
        title="Flip orientation"
        type="button"
      >
        <Icon label="SwitchVertical" />
      </StyledButton>
      <StyledButton
        color="tertiary"
        data-testid="button-move-left"
        disabled={!canMove}
        name="MOVE"
        onClick={handleEvent}
        title="Move left"
        type="button"
        value={-1}
      >
        <Icon label="ArrowLeft" />
      </StyledButton>
      <StyledButton
        color="tertiary"
        data-testid="button-move-right"
        disabled={!canMove}
        name="MOVE"
        onClick={handleEvent}
        title="Move right"
        type="button"
        value={1}
      >
        <Icon label="ArrowRight" />
      </StyledButton>

      <StyledButton
        color="tertiary"
        data-testid="button-label"
        onClick={onToggleLabels}
        title="Toggle part labels"
        type="button"
      >
        <Icon label="Tag" />
      </StyledButton>
      <StyledButton
        color="tertiary"
        data-testid="button-toggle-color"
        name="TOGGLE_COLOR"
        onClick={() => {
          alert('Not implemented yet');
        }}
        title="Color part"
        type="button"
      >
        <Icon
          css={{
            fill: '$primary',
          }}
          label="Square"
        />
      </StyledButton>

      <StyledButton
        color="tertiary"
        data-testid="button-copy"
        name="COPY"
        onClick={handleEvent}
        title="Copy parts"
        type="button"
      >
        <Icon label="Duplicate" />
      </StyledButton>
      <StyledButton
        color="tertiary"
        data-testid="button-cut"
        name="CUT"
        onClick={handleEvent}
        title="Cut parts"
        type="button"
      >
        <Icon label="Scissors" />
      </StyledButton>

      <StyledButton
        color="tertiary"
        data-testid="button-paste"
        disabled={!clipboardItems.length}
        name="PASTE"
        onClick={handleEvent}
        title="Paste parts"
        type="button"
      >
        <Icon label="ClipboardCopy" />
      </StyledButton>
      <StyledButton
        color="tertiary"
        data-testid="button-download"
        onClick={() => {
          alert('Not implemented yet');
        }}
        title="Export image"
        type="button"
      >
        <Icon label="Download" />
      </StyledButton>
    </StyledRoot>
  );
}
