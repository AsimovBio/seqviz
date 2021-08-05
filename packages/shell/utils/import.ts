// use low-level Webpack API to load the module
export async function getModule(path: string, remote = 'common') {
  if (typeof window === 'undefined') {
    return null;
  }
  const factory = await (window as any)[remote]?.get(path);
  return typeof factory === 'function' ? factory() : null;
}
