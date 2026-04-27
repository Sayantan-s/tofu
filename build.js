import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["app/server.js"],
    format: "esm",
    platform: "node",
    target: ["node18"],
    outdir: "dist",
    sourcemap: true,
    bundle: true,
    packages: "external",
    loader: {
      ".js": "jsx",
    },
  })
  .catch(() => {
    console.log("failed to build");
    process.exit(1);
  });
