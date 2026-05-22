import { AppData } from "@/types/app";

interface Props {
  app: AppData;
}

export default function AppHeader({ app }: Props) {
  return (
    <section className="hero compact wrap">
      <div className="hero-inner stagger">
        <div className="app-icon-burst-wrap" style={{ marginBottom: 24 }}>
          <span className="hire-star hire-star-0" aria-hidden="true" />
          <span className="hire-star hire-star-1" aria-hidden="true" />
          <span className="hire-star hire-star-2" aria-hidden="true" />
          <span className="hire-star hire-star-3" aria-hidden="true" />
          <span className="hire-star hire-star-4" aria-hidden="true" />
          <span className="hire-star hire-star-5" aria-hidden="true" />
          <span className="hire-star hire-star-6" aria-hidden="true" />
          <span className="hire-star hire-star-7" aria-hidden="true" />
          <div
            className={`app-icon ${app.iconClass}`}
            aria-hidden="true"
            style={{ width: 96, height: 96 }}
          >
            <img src={app.iconSrc} alt="" />
          </div>
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
        {app.tagline !== app.category && (
          <p className="hero-sub">{app.tagline}</p>
        )}
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
              className={`btn btn-primary${
                app.accentFrom && app.accentTo ? " btn-accent-hover" : ""
              }`}
              href={app.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              style={
                app.accentFrom && app.accentTo
                  ? ({
                      "--cta-from": app.accentFrom,
                      "--cta-to": app.accentTo,
                    } as React.CSSProperties)
                  : undefined
              }
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
              className={`btn btn-primary${
                app.accentFrom && app.accentTo ? " btn-accent-hover" : ""
              }`}
              href={app.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              style={
                app.accentFrom && app.accentTo
                  ? ({
                      "--cta-from": app.accentFrom,
                      "--cta-to": app.accentTo,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              Play Store
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
          )}
          {app.links.instagram && (
            <a
              className="btn btn-ghost btn-instagram"
              href={app.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Instagram"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
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
