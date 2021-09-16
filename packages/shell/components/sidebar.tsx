import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import ActiveLink from 'components/active-link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useCallback } from 'react';
import { Fragment, useState } from 'react';

import { DashboardContext } from './layout/dashboard-layout';

const Accordion = dynamic(() => import('common/components/accordion'), {
  ssr: false,
});
const Box: any = dynamic(() => import('common/components/box'));
const Button = dynamic(() => import('common/components/button'));
const Icon = dynamic(() => import('common/components/icon'));
const ScrollContainer = dynamic(
  () => import('common/components/scroll-container')
);
const Text: any = dynamic(() => import('common/components/text'));
const Tooltip = dynamic(() => import('common/components/tooltip'));

export default function Sidebar() {
  const router = useRouter();
  const pid = router.query?.pid;
  const [isNavOpen, setNavOpen] = useState(true);

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const {
    send,
    state: {
      context: { projects, recentConstructs },
    },
  } = useContext(DashboardContext);

  const handleCreateProject = useCallback(() => {
    send({ pid, type: 'CREATE', value: 'project' });
  }, [pid, send]);

  const { query } = useRouter();
  const HiddenWrapper = isNavOpen ? Fragment : VisuallyHidden;

  const handleClearRecentConstructs = () => {
    typeof window !== 'undefined' &&
      localStorage.setItem('recentConstructs', JSON.stringify([]));
    send({ type: 'CLEAR_RECENT_CONSTRUCTS', value: [] });
  };

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
            flex: 1,
          },
        },
        nav: {
          backgroundColor: '$background',
        },
      }}
    >
      <Box
        as="nav"
        css={{
          display: 'grid',
          gridTemplateAreas: '"header" "workspaces" "projects"',
          gridTemplateColumns: 'auto',
          gridTemplateRows: 'auto min-content 1fr',
          flex: 1,
        }}
      >
        <Box
          as="header"
          css={{
            alignItems: 'center',
            backgroundColor: '$overlay',
            display: 'flex',
            gridArea: 'header',
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
          </HiddenWrapper>
          <Button
            aria-label="Toggle sidebar"
            color="transparent"
            onClick={handleToggleNav}
          >
            <Icon label="HamburgerMenu" />
          </Button>
        </Box>
        <Box
          css={{
            gridArea: 'workspaces',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isNavOpen && (
            <Accordion
              collapsible
              defaultValue="Recently opened"
              headerContent={
                <HiddenWrapper>
                  <Button
                    aria-label="Clear workspaces"
                    color="tertiary"
                    css={{
                      backgroundColor: '$background',
                      '&:hover': {
                        backgroundColor: '$warningLight',
                        '& svg path': { fill: '$warning' },
                      },
                    }}
                    disabled={recentConstructs.length === 0}
                    onClick={() => handleClearRecentConstructs()}
                    value="project"
                  >
                    <Icon label="Cross2" />
                    &nbsp;Clear
                  </Button>
                </HiddenWrapper>
              }
              isChevronShown={isNavOpen}
              title="Recently opened"
              type="single"
            >
              {recentConstructs.length > 0 ? (
                <ScrollContainer maxHeight="15em">
                  {recentConstructs?.map(
                    ({ id, name, construct_projects: constructProjects }) => {
                      if (!constructProjects?.length) {
                        return null;
                      }
                      const [{ project_id }] = constructProjects;

                      return (
                        <ActiveLink
                          href={`/project/${project_id}/construct/${id}`}
                          key={id}
                          passHref
                        >
                          <Box as="a">
                            <Tooltip content={name}>
                              <Icon label="Circle" />
                            </Tooltip>
                            <Text className="text">{name}</Text>
                          </Box>
                        </ActiveLink>
                      );
                    }
                  )}
                </ScrollContainer>
              ) : (
                <Text
                  css={{
                    px: '$1',
                    py: '$2',
                    textAlign: 'center',
                    color: '$mutedText',
                  }}
                >
                  Select a Construct below
                </Text>
              )}
            </Accordion>
          )}
        </Box>
        <Box
          css={{
            gridArea: 'projects',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Accordion
            collapsible
            defaultValue="Files"
            headerContent={
              <HiddenWrapper>
                <Button
                  aria-label="Create project"
                  color="tertiary"
                  onClick={() => handleCreateProject()}
                  value="project"
                >
                  <Icon label="Plus" />
                  &nbsp;Folder
                </Button>
              </HiddenWrapper>
            }
            isChevronShown={isNavOpen}
            title="Files"
            type="single"
          >
            <ScrollContainer>
              {projects?.map(
                ({ name, project_constructs: constructs, id: projectId }) => {
                  const isActiveProject = query?.pid === projectId;
                  return (
                    <Fragment key={projectId}>
                      <ActiveLink href={`/project/${projectId}`} passHref>
                        <a>
                          <Tooltip content={name} side="right">
                            <Box
                              css={{
                                flex: '0 2.75em',
                                transition: 'transform $standard',
                                '.active &': {
                                  transform: 'rotate(90deg)',
                                },
                              }}
                            >
                              <Icon label="ChevronRight" />
                            </Box>
                          </Tooltip>
                          <span className="text">{name}</span>
                        </a>
                      </ActiveLink>
                      {isActiveProject &&
                        constructs?.map(({ construct }) => {
                          if (!construct) {
                            return null;
                          }

                          const { id: constructId, name } = construct;
                          return (
                            <ActiveLink
                              href={`/project/${projectId}/construct/${constructId}`}
                              key={constructId}
                              passHref
                            >
                              <Box
                                as="a"
                                css={{ pl: isNavOpen ? '1.75em' : 0 }}
                              >
                                <Tooltip content={name} side="right">
                                  <Icon label="Circle" />
                                </Tooltip>
                                <span className="text">{name}</span>
                              </Box>
                            </ActiveLink>
                          );
                        })}
                    </Fragment>
                  );
                }
              )}
            </ScrollContainer>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
