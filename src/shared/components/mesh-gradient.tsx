"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import type { ComponentProps } from "react";

// Client wrapper around Paper's WebGL MeshGradient shader so it can be dropped
// into server-component sections. Same props as the Paper design export.
export default function Mesh(props: ComponentProps<typeof MeshGradient>) {
  return <MeshGradient {...props} />;
}
