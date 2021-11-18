import type { DraggableStateSnapshot } from 'react-beautiful-dnd';

export const getBackgroundColor = ({
  combineTargetFor,
  isDragging,
}: DraggableStateSnapshot) => {
  if (isDragging) {
    return '$highlight';
  }

  if (combineTargetFor) {
    return '$senary';
  }

  return '$transparent';
};

export function getStyle(style, snapshot) {
  if (!snapshot.isDropAnimating) {
    return style;
  }

  const { moveTo, curve, duration } = snapshot.dropAnimation;
  // move to the right spot
  const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;

  // patching the existing style
  return {
    ...style,
    transform: translate,
    // slowing down the drop because we can
    transition: `all ${curve} ${duration + 1}s`,
  };
}
