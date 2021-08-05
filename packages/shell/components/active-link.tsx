import type { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';

type Props = {
  activeClassName?: string;
  children: ReactElement;
} & LinkProps;

export default function ActiveLink({
  activeClassName = 'active',
  children,
  ...props
}: Props) {
  const { href } = props;
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const isActive = asPath?.startsWith(href as string);

  const className = isActive
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
}
