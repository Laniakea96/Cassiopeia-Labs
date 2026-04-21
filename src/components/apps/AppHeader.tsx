import { AppData } from "@/types/app";
import Badge from "@/components/ui/Badge";

interface Props {
  app: AppData;
}

export default function AppHeader({ app }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shrink-0"
        style={{ backgroundColor: app.color }}
      >
        {app.name[0]}
      </div>

      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {app.name}
        </h1>
        <p className="text-muted text-lg mb-4">{app.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {app.platforms.map((p) => (
            <Badge key={p}>{p}</Badge>
          ))}
          <Badge variant="brand">{app.category}</Badge>
        </div>

        <div className="flex flex-wrap gap-3">
          {app.links.appStore && (
            <a
              href={app.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              App Store
            </a>
          )}
          {app.links.playStore && (
            <a
              href={app.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border hover:border-brand-500/50 text-foreground rounded-lg text-sm font-medium transition-colors"
            >
              Google Play
            </a>
          )}
          {app.links.web && (
            <a
              href={app.links.web}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border hover:border-brand-500/50 text-foreground rounded-lg text-sm font-medium transition-colors"
            >
              Web App
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
