import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import ActiveLink from 'components/active-link';
import PopoverCreate from 'components/popover';
import useLocalStorage from 'hooks/useLocalStorage';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

const Box: any = dynamic(() => import('common/components/box'));
const Button = dynamic(() => import('common/components/button'));
const Icon = dynamic(() => import('common/components/icon'));
const Text: any = dynamic(() => import('common/components/text'));
const Tooltip = dynamic(() => import('common/components/tooltip'));
const Accordion = dynamic(() => import('common/components/accordion'), {
  ssr: false,
});

type Props = { projects: unknown[]; onCreate: (type: string) => void };

export default function Sidebar({ projects, onCreate }: Props) {
  const [isNavOpen, setNavOpen] = useState(true);
  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const persistedConstructs =
    typeof window !== 'undefined' && localStorage.getItem('recentConstructs');

  const [recentConstructs] = useLocalStorage<unknown[]>(
    'recentConstructs',
    persistedConstructs ? JSON.parse(persistedConstructs) : []
  );

  const { query } = useRouter();
  const HiddenWrapper = isNavOpen ? Fragment : VisuallyHidden;

  return (
    <Box
      as="aside"
      className={isNavOpen ? 'open' : undefined}
      css={{
        backgroundColor: '$overlay',
        display: 'flex',
        flexDirection: 'column',
        gridArea: 'sidebar',
        overflow: 'hidden',
        transition: 'width $standard',
        width: '2.75em',
        '.text': {
          display: 'none',
        },
        '&.open': {
          width: '22em',
          '.text': {
            display: 'unset',
          },
        },
        nav: {
          backgroundColor: '$background',
        },
      }}
    >
      <nav>
        <Box
          as="header"
          css={{
            alignItems: 'center',
            backgroundColor: '$overlay',
            display: 'flex',
            height: '2.75em',
            justifyContent: isNavOpen ? 'right' : 'center',
          }}
        >
          <HiddenWrapper>
            <Link href="/" passHref>
              <Box
                as="a"
                css={{
                  alignItems: 'center',
                  color: 'inherit',
                  display: 'flex',
                  flex: 1,
                  textDecoration: 'none',
                }}
              >
                <Box css={{ p: '$2' }}>
                  <Image
                    alt="Asimov"
                    height={28}
                    layout="fixed"
                    src="/logo-circle.png"
                    width={28}
                  />
                </Box>
                <Text as="h2" font="heading" uppercase>
                  Kernel
                </Text>
              </Box>
            </Link>
            <PopoverCreate onCreate={onCreate} projectId={query?.pid} />
          </HiddenWrapper>
          <Button
            aria-label="Toggle sidebar"
            color="transparent"
            onClick={handleToggleNav}
          >
            <Icon label="HamburgerMenu" />
          </Button>
        </Box>
        <Accordion
          collapsible
          defaultValue="Projects"
          icon="Circle"
          isChevronShown={isNavOpen}
          title="Projects"
          type="single"
        >
          {projects?.map(
            ({ name, project_constructs: constructs, id: projectId }) => {
              const isActiveProject = query?.pid === projectId;
              return (
                <Fragment key={projectId}>
                  <ActiveLink href={`/project/${projectId}`}>
                    <a href={`/project/${projectId}`}>
                      <Tooltip content={name} side="right">
                        <Icon label="Circle" />
                      </Tooltip>
                      <span className="text">{name}</span>
                    </a>
                  </ActiveLink>
                  {isActiveProject &&
                    constructs?.map(
                      ({ construct: { id: constructId, name } }) => {
                        return (
                          <ActiveLink
                            href={`/project/${projectId}/construct/${constructId}`}
                            key={constructId}
                            passHref
                          >
                            <Box as="a" css={{ pl: isNavOpen ? '1.75em' : 0 }}>
                              <Tooltip content={name} side="right">
                                <Icon label="Box" />
                              </Tooltip>
                              <span className="text">{name}</span>
                            </Box>
                          </ActiveLink>
                        );
                      }
                    )}
                </Fragment>
              );
            }
          )}
        </Accordion>
        {isNavOpen && !!recentConstructs?.length && (
          <Accordion
            collapsible
            defaultValue="Open constructs"
            icon="BoxModel"
            isChevronShown={isNavOpen}
            title="Open constructs"
            type="single"
          >
            {recentConstructs?.map(
              ({ id, name, construct_projects: [{ project_id }] }) => (
                <ActiveLink
                  href={`/project/${project_id}/construct/${id}`}
                  key={id}
                >
                  <a href={`/project/${project_id}/construct/${id}`}>
                    <Tooltip content={name}>
                      <Icon label="Box" />
                    </Tooltip>
                    <span className="text">{name}</span>
                  </a>
                </ActiveLink>
              )
            )}
          </Accordion>
        )}
      </nav>
    </Box>
  );
}
