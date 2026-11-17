// Static export so the site can be hosted on GitHub Pages.
// PAGES_BASE_PATH is set by the GitHub Actions workflow (e.g. "/Gautami-Portfolio");
// it is empty when running locally.
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
