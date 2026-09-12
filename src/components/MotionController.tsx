import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionController() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .from(".hero-place", { autoAlpha: 0, x: -18, duration: 0.45 })
          .from(".hero h1", { clipPath: "inset(0 0 100% 0)", yPercent: 18, duration: 0.72 }, "-=0.2")
          .from(".hero-intro", { autoAlpha: 0, y: 12, duration: 0.45 }, "-=0.38")
          .from(".hero-drink", { autoAlpha: 0, scale: 0.96, rotate: -2, duration: 0.65 }, "-=0.55")
          .from(".scroll-cue", { autoAlpha: 0, duration: 0.3 }, "-=0.2");

        gsap.utils.toArray<HTMLElement>(".story").forEach((story, index) => {
          gsap.from(story, {
            clipPath: index % 2 === 0 ? "inset(0 0 24% 0)" : "inset(24% 0 0 0)",
            y: index % 2 === 0 ? 20 : -20,
            duration: 0.62,
            ease: "power3.out",
            scrollTrigger: { trigger: story, start: "top 88%", once: true },
          });
        });

        gsap.fromTo(
          ".menu-pour__liquid",
          { scaleY: 0.08 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".menu-section",
              start: "top 78%",
              end: "top 30%",
              scrub: 0.55,
            },
          },
        );
        gsap.fromTo(
          ".menu-pour__crema",
          { autoAlpha: 0, scaleX: 0.55 },
          {
            autoAlpha: 1,
            scaleX: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".menu-section",
              start: "top 44%",
              end: "top 28%",
              scrub: 0.35,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".space-scene .media-placeholder").forEach((scene, index) => {
          gsap.from(scene, {
            clipPath: index === 0 ? "inset(0 0 0 18%)" : "inset(0 18% 0 0)",
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: { trigger: scene, start: "top 86%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".film-frame").forEach((frame, index) => {
          gsap.from(frame, {
            autoAlpha: 0,
            rotate: index % 2 === 0 ? -1.5 : 1.5,
            scale: 0.975,
            duration: 0.58,
            ease: "power3.out",
            scrollTrigger: { trigger: frame, start: "top 90%", once: true },
          });
        });

        ScrollTrigger.refresh();
      });

      media.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const cursor = document.querySelector<HTMLElement>(".coffee-cursor");
          const targets = gsap.utils.toArray<HTMLElement>(
            ".language-link, .menu-filters button, .primary-link, .secondary-link, .text-link",
          );
          const moveX = cursor ? gsap.quickTo(cursor, "x", { duration: 0.24, ease: "power3" }) : null;
          const moveY = cursor ? gsap.quickTo(cursor, "y", { duration: 0.24, ease: "power3" }) : null;

          const showCursor = (event: PointerEvent) => {
            moveX?.(event.clientX);
            moveY?.(event.clientY);
            if (cursor) gsap.to(cursor, { autoAlpha: 0.62, duration: 0.2 });
          };
          const hideCursor = () => {
            if (cursor) gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });
          };

          const cleanups = targets.map((target) => {
            const move = (event: MouseEvent) => {
              const bounds = target.getBoundingClientRect();
              gsap.to(target, {
                x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 7,
                y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 5,
                duration: 0.28,
                ease: "power3.out",
              });
            };
            const reset = () => gsap.to(target, { x: 0, y: 0, duration: 0.24, ease: "power3.out" });

            target.addEventListener("mousemove", move);
            target.addEventListener("mouseleave", reset);
            return () => {
              target.removeEventListener("mousemove", move);
              target.removeEventListener("mouseleave", reset);
            };
          });

          window.addEventListener("pointermove", showCursor, { passive: true });
          document.documentElement.addEventListener("mouseleave", hideCursor);

          return () => {
            cleanups.forEach((cleanup) => cleanup());
            window.removeEventListener("pointermove", showCursor);
            document.documentElement.removeEventListener("mouseleave", hideCursor);
          };
        },
      );
    }, document.body);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return <span className="coffee-cursor" aria-hidden="true" />;
}
