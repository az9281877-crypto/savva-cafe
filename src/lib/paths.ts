function normalizeBase(base: string) {
  const withLeadingSlash = base.startsWith("/") ? base : `/${base}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function withBase(base: string, path: string) {
  const normalizedBase = normalizeBase(base);
  const relativePath = path.replace(/^\/+/, "");
  return relativePath ? `${normalizedBase}${relativePath}` : normalizedBase;
}

export function stripBase(pathname: string, base: string) {
  const normalizedBase = normalizeBase(base);

  if (normalizedBase === "/") return pathname;

  const baseWithoutTrailingSlash = normalizedBase.slice(0, -1);
  if (pathname === baseWithoutTrailingSlash) return "/";
  if (!pathname.startsWith(normalizedBase)) return pathname;

  return `/${pathname.slice(normalizedBase.length)}`;
}
