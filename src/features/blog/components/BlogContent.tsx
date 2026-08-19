"use client";

import { isValidElement, useState, type ReactNode } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react";
import { slugifyHeading } from "@/lib/slugify";

type BlogContentProps = { content: string };

function headingText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(headingText).join("");
  if (isValidElement<{ children?: ReactNode }>(node))
    return headingText(node.props.children);
  return "";
}

function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");
  const isFenced = className?.includes("language-");

  if (!isFenced) {
    return (
      <code className="rounded bg-cloud-gray px-1.5 py-0.5 font-mono text-[0.85em]">
        {children}
      </code>
    );
  }

  return (
    <div className="relative my-6 overflow-hidden rounded-lg bg-black">
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs text-white/70 hover:bg-white/20"
      >
        {copied ? <RiCheckLine size={14} /> : <RiFileCopyLine size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className="overflow-x-auto p-4 text-sm text-white">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const components: Components = {
  h2: ({ children }) => {
    const text = headingText(children);
    return (
      <h2
        id={slugifyHeading(text)}
        className="mt-12 text-[23px] font-bold leading-[132%] text-black md:text-[27px]"
      >
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const text = headingText(children);
    return (
      <h3
        id={slugifyHeading(text)}
        className="mt-9 text-[19px] font-bold leading-[132%] text-black md:text-[21px]"
      >
        {children}
      </h3>
    );
  },
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <Link
        href={href ?? "#"}
        className="font-medium text-primary underline underline-offset-2"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  },
  img: ({ src, alt }) => (
    // ponytail: markdown-authored images can point at any external host with
    // unknown dimensions, so next/image (fixed size or preconfigured domains)
    // doesn't fit here — plain <img> upgrade path: pass posts through a
    // build-time image pipeline if self-hosting becomes worth it.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : ""}
      alt={alt ?? ""}
      loading="lazy"
      className="my-8 w-full rounded-lg"
    />
  ),
  // Medium-style pull quote: large italic blog type, thin rule, no fill.
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-black pl-6 font-blog text-[21px] italic leading-[142%] text-black md:text-[24px]">
      {children}
    </blockquote>
  ),
  // Medium's signature "···" section break in place of a plain rule.
  hr: () => (
    <div aria-hidden className="my-10 flex items-center justify-center gap-2 text-black/40">
      <span className="size-1 rounded-full bg-current" />
      <span className="size-1 rounded-full bg-current" />
      <span className="size-1 rounded-full bg-current" />
    </div>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left font-sans text-sm">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-black/10 py-2 pr-4 font-semibold text-black">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-black/5 py-2 pr-4">{children}</td>
  ),
  code: CodeBlock,
};

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="space-y-6 font-blog text-[19px] leading-[170%] text-black/85 md:text-[20px]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
