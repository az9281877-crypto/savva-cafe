import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionController() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isRtl = document.documentElement.dir === "rtl";
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        gsap.timeline({ delay: isMobile ? 0.72 : 0.78, defaults: { ease: "power3.out" } })
          .from(".hero-place", { autoAlpha: 0, x: isRtl ? 28 : -28, duration: 0.55 })
          .from(".hero h1", { clipPath: "inset(0 0 100% 0)", yPercent: isMobile ? 22 : 30, duration: isMobile ? 0.78 : 0.9 }, "-=0.22")
          .from(".hero-intro", { autoAlpha: 0, y: isMobile ? 18 : 24, duration: isMobile ? 0.5 : 0.58 }, "-=0.42")
          .from(".hero-drink", {
            autoAlpha: 0,
            clipPath: isRtl ? "inset(0 12% 0 0)" : "inset(0 0 0 12%)",
            xPercent: isRtl ? (isMobile ? -3 : -5) : (isMobile ? 3 : 5),
            scale: isMobile ? 0.96 : 0.94,
            duration: isMobile ? 0.82 : 0.95,
          }, "-=0.64")
          .from(".hero-media img", { scale: 1.12, duration: 1.15 }, "-=0.9")
          .from(".hero-drink p", { autoAlpha: 0, y: 18, duration: 0.48 }, "-=0.42")
          .from(".scroll-cue", { autoAlpha: 0, y: 10, duration: 0.35 }, "-=0.18");

        gsap.to(".hero-media img", {
          yPercent: isMobile ? 5 : 8,
          scale: isMobile ? 1.035 : 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.from(".story", {
          autoAlpha: 0,
          clipPath: "inset(0 0 18% 0)",
          y: isMobile ? 28 : 42,
          scale: isMobile ? 0.975 : 0.965,
          duration: isMobile ? 0.62 : 0.72,
          stagger: isMobile ? 0.08 : 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".story-strip", start: isMobile ? "top 88%" : "top 82%", once: true },
        });

        gsap.from(".menu-visual", {
          autoAlpha: 0,
          y: isMobile ? 22 : 34,
          scale: isMobile ? 0.97 : 0.94,
          duration: isMobile ? 0.58 : 0.68,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: ".menu-visuals", start: "top 86%", once: true },
        });

        gsap.fromTo(
          ".menu-pour__liquid",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".menu-section",
              start: isMobile ? "top 90%" : "top 82%",
              end: isMobile ? "top 48%" : "top 18%",
              scrub: 0.28,
            },
          },
        );
        gsap.fromTo(
          ".menu-pour__crema",
          { autoAlpha: 0, scaleX: 0.35 },
          {
            autoAlpha: 1,
            scaleX: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".menu-section",
              start: isMobile ? "top 56%" : "top 30%",
              end: isMobile ? "top 42%" : "top 14%",
              scrub: 0.2,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".space-scene").forEach((scene, index) => {
          const frame = scene.querySelector<HTMLElement>(".media-frame");
          const image = scene.querySelector<HTMLElement>(".media-frame img");
          if (!frame || !image) return;

          gsap.from(frame, {
            autoAlpha: 0,
            clipPath: index === 0 ? "inset(0 22% 0 0)" : "inset(0 0 0 22%)",
            xPercent: index === 0 ? (isMobile ? -3 : -5) : (isMobile ? 3 : 5),
            scale: isMobile ? 0.98 : 0.97,
            duration: isMobile ? 0.72 : 0.88,
            ease: "power3.out",
            scrollTrigger: { trigger: scene, start: isMobile ? "top 88%" : "top 84%", once: true },
          });

          gsap.fromTo(image, { yPercent: -4 }, {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: scene,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.75,
            },
          });
        });

        gsap.from(".film-heading > *", {
          autoAlpha: 0,
          y: 28,
          duration: 0.62,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".film-heading", start: "top 84%", once: true },
        });

        gsap.utils.toArray<HTMLElement>(".film-frame").forEach((frame, index) => {
          gsap.from(frame, {
            autoAlpha: 0,
            x: index % 2 === 0 ? (isMobile ? -24 : -46) : (isMobile ? 24 : 46),
            y: isMobile ? 22 + (index % 2) * 8 : 30 + (index % 3) * 12,
            rotate: index % 2 === 0 ? (isMobile ? -0.7 : -1.4) : (isMobile ? 0.7 : 1.4),
            scale: isMobile ? 0.96 : 0.93,
            duration: isMobile ? 0.68 : 0.82,
            ease: "power3.out",
            scrollTrigger: { trigger: frame, start: isMobile ? "top 92%" : "top 88%", once: true },
          });
        });

        gsap.from(".visit-heading, .hours-arc, .visit-details", {
          autoAlpha: 0,
          y: isMobile ? 26 : 38,
          duration: isMobile ? 0.62 : 0.72,
          stagger: isMobile ? 0.09 : 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".visit-section", start: "top 82%", once: true },
        });

        gsap.from(".visit-qr h3, .qr-link", {
          autoAlpha: 0,
          y: isMobile ? 20 : 28,
          scale: isMobile ? 0.97 : 0.95,
          duration: isMobile ? 0.5 : 0.58,
          stagger: isMobile ? 0.06 : 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".visit-qr", start: "top 88%", once: true },
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
