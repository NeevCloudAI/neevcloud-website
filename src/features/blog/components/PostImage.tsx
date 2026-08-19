"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

const FALLBACK_IMAGE = "/images/og/neevcloud-og.jpg";

type PostImageProps = Omit<ImageProps, "onError">;

export default function PostImage({ src, alt, className, ...props }: PostImageProps) {
  const [errored, setErrored] = useState(!src);

  return (
    <Image
      src={errored ? FALLBACK_IMAGE : src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
