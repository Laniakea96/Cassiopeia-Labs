"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  slug: string;
}

const tabs = [
  { path: "", label: "Overview" },
  { path: "/support", label: "Support" },
  { path: "/privacy", label: "Privacy" },
  { path: "/terms", label: "Terms" },
];

export default function AppSubNav({ slug }: Props) {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border mb-8">
      <div className="flex gap-6 overflow-x-auto">
        {tabs.map((tab) => {
          const href = `/apps/${slug}${tab.path}`;
          const isActive = pathname === href;
          return (
            <Link
              key={tab.path}
              href={href}
              className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                isActive
                  ? "border-brand-500 text-brand-400"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
