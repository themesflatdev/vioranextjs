"use client";

import { useEffect, useRef, type ReactNode } from "react";

const vertex = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, .45);
    }
`;

const fragment = `
    precision highp float;
    uniform sampler2D tImage;
    uniform sampler2D tFlow;
    varying vec2 vUv;

    void main() {
        vec3 flow = texture2D(tFlow, vUv).rgb;
        vec2 uv = vUv;
        uv += (flow.rg * flow.b * 50.0);
        vec3 tex = texture2D(tImage, uv).rgb;
        gl_FragColor.rgb = tex;
        gl_FragColor.a = 1.0;
    }
`;

type ImageDistortionBoxProps = {
  background: string;
  className?: string;
  children?: ReactNode;
};

// Mirrors assets/js/distortion-img.js verbatim (OGL WebGL mouse-flowmap
// distortion) — see src/lib/ogl/distortion-img-depend.js for the ported OGL
// bundle. Original bug: the canvas (last child, position:absolute, covers
// the whole box) sits above the form, so the email input/button are
// unclickable (document.elementFromPoint returns the canvas). Fixed here by
// giving the form `position-relative z-5` in CtaSection — the distortion
// still runs since mouse listeners are bound on the box itself, not on the
// canvas.
export default function ImageDistortionBox({ background, className, children }: ImageDistortionBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    let raf = 0;
    let cleanupGl: (() => void) | undefined;
    let cancelled = false;

    import("@/lib/ogl/distortion-img-depend").then(({ Renderer, Program, Mesh, Vec2, Texture, Flowmap, Plane }) => {
      if (cancelled || !box) return;

      const renderer = new Renderer();
      const gl = renderer.gl;
      box.appendChild(gl.canvas);

      const mouse = new Vec2(0.5);
      const lastMouse = new Vec2(0.5);
      const velocity = new Vec2();
      let aspect = 1;

      const resize = () => {
        const rect = box.getBoundingClientRect();
        aspect = rect.width / rect.height;
        gl.canvas.width = rect.width;
        gl.canvas.height = rect.height;
        renderer.setSize(rect.width, rect.height);
      };
      window.addEventListener("resize", resize, false);
      resize();

      const flowmap = new Flowmap(gl, { falloff: 0.3, dissipation: 0.95, size: 1000 });
      const geometry = new Plane(gl);

      const texture = new Texture(gl);
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        texture.image = img;
        texture.minFilter = gl.LINEAR;
        texture.magFilter = gl.LINEAR;
        texture.wrapS = gl.CLAMP_TO_EDGE;
        texture.wrapT = gl.CLAMP_TO_EDGE;
      };
      img.src = background;

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: { tImage: { value: texture }, tFlow: flowmap.uniform },
      });

      const mesh = new Mesh(gl, { geometry, program });

      const updateMouse = (event: MouseEvent | Touch) => {
        const rect = box.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = 1 - (event.clientY - rect.top) / rect.height;
        mouse.set(x, y);
      };
      const handleMouseMove = (event: MouseEvent) => updateMouse(event);
      const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length > 0) updateMouse(event.touches[0]);
      };
      box.addEventListener("mousemove", handleMouseMove, false);
      box.addEventListener("touchmove", handleTouchMove, false);

      const spring = 0.04;
      const friction = 0.8;
      const springVel = new Vec2();

      const update = () => {
        springVel.copy(mouse).sub(lastMouse).multiply(spring);
        velocity.add(springVel).multiply(friction);
        lastMouse.add(velocity);

        flowmap.mouse.copy(lastMouse);
        flowmap.velocity.copy(velocity);
        flowmap.aspect = aspect;

        flowmap.update();
        renderer.render({ scene: mesh });
        raf = requestAnimationFrame(update);
      };
      raf = requestAnimationFrame(update);

      cleanupGl = () => {
        window.removeEventListener("resize", resize, false);
        box.removeEventListener("mousemove", handleMouseMove, false);
        box.removeEventListener("touchmove", handleTouchMove, false);
        gl.canvas.remove();
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      cleanupGl?.();
    };
  }, [background]);

  return (
    <div
      className={className}
      data-background={background}
      style={{ backgroundImage: `url(${background})` }}
      ref={boxRef}
    >
      {children}
    </div>
  );
}
