"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");

    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gradientBtns = document.querySelectorAll<HTMLElement>(".btn-gradient");
    const onMove = (e: PointerEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const r = btn.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      btn.style.setProperty("--mx", x + "%");
      btn.style.setProperty("--my", y + "%");
    };
    gradientBtns.forEach((btn) => {
      btn.addEventListener("pointermove", onMove as EventListener);
      btn.addEventListener("pointerleave", onMove as EventListener);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const container = e.target.parentElement;
            const siblings = container
              ? Array.from(container.querySelectorAll<HTMLElement>(".reveal"))
              : [e.target as HTMLElement];
            const i = siblings.indexOf(e.target as HTMLElement);
            const step = (e.target as HTMLElement).closest(".apps-grid")
              ? 220
              : 90;
            (e.target as HTMLElement).style.transitionDelay =
              Math.max(0, i) * step + "ms";
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    if (reduce) {
      document.querySelectorAll(".reveal").forEach((el) =>
        el.classList.add("in")
      );
    }

    let brandIO: IntersectionObserver | null = null;
    const heroBrand = document.getElementById("heroBrand");
    if (heroBrand && nav) {
      nav.classList.add("brand-dock");
      brandIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.intersectionRatio === 0) {
              nav.classList.add("brand-in");
            } else {
              nav.classList.remove("brand-in");
            }
          });
        },
        { threshold: [0, 0.01], rootMargin: "-60px 0px 0px 0px" }
      );
      brandIO.observe(heroBrand);
    }

    function buildConstellation(svg: SVGSVGElement) {
      const wrap = svg.parentElement;
      if (!wrap) return;
      const cards = Array.from(
        wrap.querySelectorAll<HTMLElement>(".card[data-star]")
      );
      if (cards.length < 2) return;
      const wrapRect = wrap.getBoundingClientRect();
      svg.setAttribute(
        "viewBox",
        `0 0 ${wrapRect.width} ${wrapRect.height}`
      );
      svg.setAttribute("width", String(wrapRect.width));
      svg.setAttribute("height", String(wrapRect.height));
      const ns = "http://www.w3.org/2000/svg";
      svg.innerHTML = "";
      const defs = document.createElementNS(ns, "defs");
      defs.innerHTML =
        '<linearGradient id="con-stroke" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#bf5af2" stop-opacity="0.7"/>' +
        '<stop offset="50%" stop-color="#ff9f0a" stop-opacity="0.55"/>' +
        '<stop offset="100%" stop-color="#ffd60a" stop-opacity="0.7"/>' +
        "</linearGradient>";
      svg.appendChild(defs);

      const points = cards.map((c) => {
        const icon = c.querySelector(".app-icon") || c;
        const r = (icon as HTMLElement).getBoundingClientRect();
        return {
          x: r.left - wrapRect.left + r.width / 2,
          y: r.top - wrapRect.top + r.height / 2,
        };
      });

      const d = "M " + points.map((p) => `${p.x} ${p.y}`).join(" L ");
      const path = document.createElementNS(ns, "path");
      path.setAttribute("class", "con-line");
      path.setAttribute("d", d);
      svg.appendChild(path);

      points.forEach((p) => {
        const star = document.createElementNS(ns, "circle");
        star.setAttribute("class", "con-star");
        star.setAttribute("cx", String(p.x));
        star.setAttribute("cy", String(p.y));
        star.setAttribute("r", "2.5");
        svg.appendChild(star);
      });
    }

    function refreshConstellations() {
      document
        .querySelectorAll<SVGSVGElement>(".constellation")
        .forEach(buildConstellation);
    }

    refreshConstellations();
    const t1 = window.setTimeout(refreshConstellations, 400);
    const t2 = window.setTimeout(refreshConstellations, 1200);
    const onLoad = () => refreshConstellations();
    window.addEventListener("load", onLoad);

    let rzTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(rzTimer);
      rzTimer = window.setTimeout(refreshConstellations, 120);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(rzTimer);
      io.disconnect();
      if (brandIO) brandIO.disconnect();
      gradientBtns.forEach((btn) => {
        btn.removeEventListener("pointermove", onMove as EventListener);
        btn.removeEventListener("pointerleave", onMove as EventListener);
      });
    };
  }, []);

  return null;
}
