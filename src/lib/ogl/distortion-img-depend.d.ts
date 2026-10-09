// Hand-written ambient types for the verbatim-ported OGL bundle
// (distortion-img-depend.js). The JS is minified/untyped (// @ts-nocheck) —
// without this file, TypeScript structurally infers overly narrow/incorrect
// types (e.g. `RenderingContext` instead of `WebGLRenderingContext`) from the
// minified body, which breaks consumers. Declared as `any` since this module
// is only ever used inside ImageDistortionBox's own client-only effect.
export const Renderer: any;
export const Program: any;
export const Mesh: any;
export const Vec2: any;
export const Texture: any;
export const Flowmap: any;
export const Plane: any;
