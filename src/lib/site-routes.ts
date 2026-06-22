import { readdirSync } from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "src/app");

/** Internal or noindex pages excluded from sitemap and robots allow rules. */
export const NON_INDEXABLE_ROUTES = ["/design-system"] as const;

function collectPageRoutes(dir: string, urlPath = ""): string[] {
  const routes: string[] = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
      routes.push(...collectPageRoutes(fullPath, `${urlPath}${segment}`));
      continue;
    }

    if (entry.name === "page.tsx") {
      routes.push(urlPath || "/");
    }
  }

  return routes;
}

export function getIndexableRoutes(): string[] {
  const excluded = new Set<string>(NON_INDEXABLE_ROUTES);

  return collectPageRoutes(APP_DIR)
    .filter((route) => !excluded.has(route))
    .sort((a, b) => {
      if (a === "/") return -1;
      if (b === "/") return 1;
      return a.localeCompare(b);
    });
}
