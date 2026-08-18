"use client";

import { isValidElement, useState, type ReactNode } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react";

type BlogContentProps = { content: string };

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function headingText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(headingText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return headingText(node.props.children);
  return "";
}

function CodeBlock({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");
  const isFenced = className?.includes("language-");

  if (!isFenced) {
    return <code className="rounded bg-cloud-gray px-1.5 py-0.5 text-[0.9em]">{children}</code>;
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
        className="mt-10 text-[24px] font-semibold leading-[130%] text-black md:text-[28px]"
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
        className="mt-8 text-[19px] font-semibold leading-[130%] text-black md:text-[22px]"
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
  img: ({ src, alt }) =>
    // ponytail: markdown-authored images can point at any external host with
    // unknown dimensions, so next/image (fixed size or preconfigured domains)
    // doesn't fit here — plain <img> upgrade path: pass posts through a
    // build-time image pipeline if self-hosting becomes worth it.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} loading="lazy" className="my-6 w-full rounded-lg" />,
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-lg border-l-4 border-primary bg-cloud-gray px-5 py-4 text-black/80">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-black/10" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-black/10 py-2 pr-4 font-semibold text-black">{children}</th>
  ),
  td: ({ children }) => <td className="border-b border-black/5 py-2 pr-4">{children}</td>,
  code: CodeBlock,
};

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="max-w-none space-y-5 text-[15px] leading-[170%] text-gray-05 md:text-[16px]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
