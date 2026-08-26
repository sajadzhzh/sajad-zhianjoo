import { ReactNode } from "react";

export default function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-max px-4 py-1 bg-(--surface-hover) border border-(--border) rounded-xl ${className}`}>
      {children}
    </div>
  );
}
