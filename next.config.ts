import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from other devices on the local network (e.g. phone testing).
  allowedDevOrigins: ["192.168.1.22", "192.168.*.*"],
};

export default nextConfig;
