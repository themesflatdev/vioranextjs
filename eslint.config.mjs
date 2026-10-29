import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored third-party OGL bundle, kept byte-for-byte identical to
    // viora/assets/js/distortion-img-depend.js — not our code to lint.
    "src/lib/ogl/distortion-img-depend.js",
    "src/lib/ogl/distortion-img-depend.d.ts",
  ]),
]);

export default eslintConfig;
