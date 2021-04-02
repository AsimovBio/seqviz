/** @jsxRuntime classic */
/** @jsx jsx */
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { jsx } from 'theme-ui';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <nav>
        <ul
          sx={{
            alignItems: 'center',
            bg: 'primary',
            display: 'flex',
            justifyContent: 'space-between',
            listStyle: 'none',
            margin: 0,
            p: 2,
          }}
        >
          <li>
            <Link href="/">
              <Image
                alt="Asimov logo"
                height={50}
                src="/asimov_logo.svg"
                layout="fixed"
                width={50}
              />
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <a href="/profile-ssr">Profile (SSR)</a>
              </li>{' '}
              <li>
                <a href="/api/auth/logout" data-testid="logout">
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/api/auth/login" data-testid="login">
                  Login
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
