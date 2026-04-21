"use client";

import Link from "next/link";

interface Props {
  open: boolean;
  links: { href: string; label: string }[];
  pathname: string;
  onClose: () => void;
}

export default function MobileMenu({ open, links, pathname, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-surface-raised/95 backdrop-blur-xl border-b border-border">
      <div className="px-6 py-4 flex flex-col gap-4">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`text-base transition-colors ${
                isActive
                  ? "text-brand-400 font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
