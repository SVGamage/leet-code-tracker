"use client";

import * as Icons from "lucide-react";

interface CategoryIconProps {
  name: string;
  className?: string;
}

export function CategoryIcon({ name, className }: CategoryIconProps) {
  const Icon = Icons[name as keyof typeof Icons];
  return Icon ? <Icon className={className} /> : null;
}