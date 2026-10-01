import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La home es una sola página: las antiguas rutas apuntan a su sección.
  async redirects() {
    return [
      { source: "/about", destination: "/#estudio", permanent: true },
      { source: "/contact", destination: "/#contacto", permanent: true },
      // Gymest pasó a llamarse Rexis.
      { source: "/apps/gymest", destination: "/apps/rexis", permanent: true },
      {
        source: "/apps/gymest/:path*",
        destination: "/apps/rexis/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
