"use client";

import Link from "next/link";
import { AppData } from "@/types/app";
import Badge from "@/components/ui/Badge";

interface Props {
  app: AppData;
}

export default function AppCard({ app }: Props) {
  return (
    <Link href={`/apps/${app.slug}`}>
      <div
        className="group relative bg-surface-raised border border-border rounded-2xl p-6 transition-all duration-300 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-1"
        style={
          {
            "--app-color": app.color,
          } as React.CSSProperties
        }
      >
        {/* Icon placeholder */}
        <div
          className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl font-bold text-white"
          style={{ backgroundColor: app.color }}
        >
          {app.name[0]}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-brand-400 transition-colors">
          {app.name}
        </h3>
        <p className="text-muted text-sm mb-4">{app.tagline}</p>

        <div className="flex flex-wrap gap-2">
          {app.platforms.map((platform) => (
            <Badge key={platform}>{platform}</Badge>
          ))}
          <Badge variant="brand">{app.category}</Badge>
        </div>
      </div>
    </Link>
  );
}
