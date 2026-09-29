import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La home es una sola página: las antiguas rutas apuntan a su sección.
  async redirects() {
    return [
      { source: "/apps", destination: "/#apps", permanent: true },
      { source: "/about", destination: "/#estudio", permanent: true },
      { source: "/contact", destination: "/#contacto", permanent: true },
    ];
  },
};

export default nextConfig;
