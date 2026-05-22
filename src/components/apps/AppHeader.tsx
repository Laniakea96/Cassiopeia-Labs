import { AppData } from "@/types/app";

interface Props {
  app: AppData;
}

export default function AppHeader({ app }: Props) {
  return (
    <section className="hero compact wrap">
      <div className="hero-inner stagger">
        <div
          className={`app-icon ${app.iconClass}`}
          aria-hidden="true"
          style={{ width: 96, height: 96, marginBottom: 24 }}
        >
          <img src={app.iconSrc} alt="" />
        </div>
        <h1
          className="hero-title"
          style={{ maxWidth: "none", whiteSpace: "nowrap" }}
        >
          <span className="serif">{app.name}</span>{" "}
          <span style={{ color: "var(--dim)", fontWeight: 400 }}>
            — {app.category}
          </span>
        </h1>
        <p className="hero-sub">{app.tagline}</p>
        <p
          style={{
            color: "var(--dim)",
            maxWidth: 640,
            lineHeight: 1.6,
            marginTop: 8,
          }}
        >
          {app.longDescription ?? app.description}
        </p>
        <div
          className="card-actions"
          style={{ marginTop: 24, justifyContent: "flex-start", gap: 12 }}
        >
          {app.links.appStore ? (
            <a
              className="btn btn-primary"
              href={app.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          ) : (
            <span className="pill-sm" style={{ opacity: 0.6 }}>
              App Store · Próximamente
            </span>
          )}
          {app.links.playStore && (
            <a
              className="btn btn-ghost"
              href={app.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
          )}
          {app.links.web && (
            <a
              className="btn btn-ghost"
              href={app.links.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              Web
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
