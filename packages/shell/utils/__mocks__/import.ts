// use the real dynamic import for testing purposes
export async function getModule(path: string, remote = 'common') {
  return import([remote, path].join('/'));
}
