import { build } from "esbuild";

build({
  entryPoints: ["./client/index.jsx"],
  bundle: true,
  outfile: "public/bundle.js",
  watch: true,
}).catch((err) => {
  console.log(err);
  process.exit(1);
});
