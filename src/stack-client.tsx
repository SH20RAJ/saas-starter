"use client";

import { StackClientApp } from "@stackframe/stack";

export const stackClientApp = new StackClientApp({
  baseUrl: process.env.NEXT_PUBLIC_STACK_URL || "http://localhost:8101",
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID || "your-project-id",
});