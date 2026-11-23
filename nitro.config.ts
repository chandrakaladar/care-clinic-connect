import { defineConfig } from "nitro";

const applicationRoutes = [
  "/",
  "/about",
  "/contact",
  "/team",
  "/testimonials",
  "/physio-in-guntur",
  "/chiropractor-in-guntur",
  "/blog",
  "/blog/(.*)",
  "/services",
  "/services/(.*)",
  "/physiotherapy/(.*)",
];

export default defineConfig({
  vercel: {
    config: {
      routes: applicationRoutes.map((src) => ({ src, dest: "/__server" })),
    },
  },
});
