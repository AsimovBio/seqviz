import dynamic from 'next/dynamic';

const SVG: any = dynamic(() => import('common/components/svg'));

type Props = {
  text: string;
  className?: string;
};

export default function UserIcon({ text, className }: Props) {
  return (
    <SVG
      width="35px"
      height="35px"
      className={className}
      viewBox="0 0 70 70"
      xmlns="http://www.w3.org/2000/svg"
      css={{
        '& circle.primary': {
          fill: '$primary',
          stroke: '$dark',
          strokeWidth: '4px',
          r: '23px',
          cx: '50%',
          cy: '50%',
        },
        '& circle.border': {
          fill: 'none',
          stroke: '$dark',
          strokeWidth: '4px',
          r: '32px',
          cx: '50%',
          cy: '50%',
        },
        '& text': {
          fontFamily: 'Roboto Mono, sans-serif',
          fontSize: '30px',
          fill: '$overlay',
          textAnchor: 'middle',
        },
        '&:hover, &.full': {
          'circle.primary': {
            r: '32px',
          },
          text: { fontSize: '34px' },
        },
      }}
    >
      <circle className="primary" />
      <circle className="border" />
      <text x="50%" y="65%">
        {text}
      </text>
    </SVG>
  );
}
