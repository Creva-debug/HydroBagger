"use client";

import { useEffect } from "react";

const CDN_MARKER = "/Hydrobagger/";

/**
 * Tryb podglądu (?preview=1) dla panelu Landing CMS.
 * Naprawia layout w iframe (dvh/svh/sticky) i umożliwia klikanie grafik/wideo.
 */
export function PreviewModeInterceptor() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") !== "1") return;

    const sessionTs = Date.now();

    function extractFilename(el: HTMLImageElement | HTMLVideoElement): string | null {
      const fromAttr = el.getAttribute("data-landing-preview");
      if (fromAttr) return fromAttr;

      const src =
        el instanceof HTMLVideoElement
          ? el.currentSrc || el.src || ""
          : el.currentSrc || el.src || "";
      if (!src || src.startsWith("data:")) return null;

      if (src.includes(CDN_MARKER)) {
        return src.split(CDN_MARKER).pop()?.split("?")[0] ?? null;
      }

      if (src.includes("_next/image")) {
        try {
          const url = new URL(src, window.location.origin);
          const originalUrl = decodeURIComponent(url.searchParams.get("url") ?? "");
          if (originalUrl.includes(CDN_MARKER)) {
            return originalUrl.split(CDN_MARKER).pop()?.split("?")[0] ?? null;
          }
        } catch {
          return null;
        }
      }

      return null;
    }

    function cacheBustMedia(el: HTMLImageElement | HTMLVideoElement) {
      const src = el.src;
      if (!src || src.startsWith("data:")) return;

      if (src.includes(CDN_MARKER) && !src.includes("_next/image")) {
        if (src.includes("_lpr=")) return;
        el.src = src + (src.includes("?") ? "&" : "?") + `_lpr=${sessionTs}`;
        return;
      }

      if (src.includes("_next/image")) {
        try {
          const url = new URL(src, window.location.origin);
          const origUrl = url.searchParams.get("url") ?? "";
          const decoded = decodeURIComponent(origUrl);
          if (decoded.includes("_lpr=")) return;
          const newInner = decoded + (decoded.includes("?") ? "&" : "?") + `_lpr=${sessionTs}`;
          url.searchParams.set("url", newInner);
          el.src = url.toString();
          if (el instanceof HTMLImageElement) el.srcset = "";
        } catch {
          // ignore
        }
      }
    }

    const styleEl = document.createElement("style");
    styleEl.id = "landing-preview-styles";
    styleEl.textContent = `
      img[data-landing-preview-marked],
      video[data-landing-preview-marked],
      img[data-landing-slot-key],
      video[data-landing-slot-key] {
        pointer-events: auto !important;
        cursor: crosshair !important;
        outline: 3px dashed transparent;
        outline-offset: 2px;
        transition: outline-color 0.15s ease;
        position: relative;
        z-index: 5;
      }
      img[data-landing-preview-marked]:hover,
      video[data-landing-preview-marked]:hover,
      img[data-landing-slot-key]:hover,
      video[data-landing-slot-key]:hover {
        outline-color: rgb(139 92 246 / 0.9);
      }
      .landing-preview-plus-badge {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border-radius: 9999px;
        background: rgb(109 40 217);
        color: white;
        font-size: 26px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        opacity: 0;
        pointer-events: none;
        z-index: 8;
        transition: opacity 0.15s ease;
        box-shadow: 0 4px 14px rgba(109, 40, 217, 0.45);
      }
      .landing-preview-plus-host:hover .landing-preview-plus-badge {
        opacity: 1;
      }
      div:has(> img[data-landing-preview-marked]),
      div:has(> img[data-landing-slot-key]),
      div:has(> video[data-landing-slot-key]) {
        cursor: crosshair !important;
      }
      div:has(> img[data-landing-preview-marked]) > *:not(img):not(a):not(button),
      div:has(> img[data-landing-slot-key]) > *:not(img):not(a):not(button) {
        pointer-events: none !important;
      }
      [data-landing-preview-zone="hero"] > div.absolute {
        pointer-events: none !important;
      }
      [data-landing-preview-zone="hero"] .relative.z-10 {
        pointer-events: none !important;
      }
      [data-landing-preview-zone="hero"] a,
      [data-landing-preview-zone="hero"] button {
        pointer-events: auto !important;
        position: relative;
        z-index: 20;
      }
      .min-h-svh, .min-h-screen, .h-svh, .h-screen, .h-dvh, .min-h-dvh,
      .min-h-\\[100svh\\], .min-h-\\[100vh\\], .h-\\[100svh\\], .h-\\[100vh\\],
      .min-h-\\[70vh\\], .min-h-\\[calc\\(100svh-92px\\)\\],
      [class*="svh"], [class*="dvh"] {
        min-height: 0 !important;
        height: auto !important;
        max-height: none !important;
      }
      section[style*="vh"] {
        min-height: auto !important;
      }
      .sticky {
        position: relative !important;
        top: auto !important;
        height: auto !important;
        min-height: 0 !important;
        overflow: visible !important;
      }
      [style*="opacity: 0"], [style*="opacity:0"] {
        opacity: 1 !important;
      }
      [style*="translateY"][style*="opacity"] {
        transform: none !important;
      }
      #landing-preview-banner {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgb(109 40 217);
        color: white;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.04em;
        padding: 4px 16px;
        border-radius: 0 0 8px 8px;
        z-index: 99999;
        pointer-events: none;
        white-space: nowrap;
      }
    `;
    document.head.appendChild(styleEl);

    const banner = document.createElement("div");
    banner.id = "landing-preview-banner";
    banner.textContent = "TRYB PODGLĄDU - kliknij grafikę lub wideo, aby je podmienić";
    document.body.appendChild(banner);

    const attachPlusBadge = (el: HTMLElement) => {
      const host = el.parentElement;
      if (!host || host.querySelector(":scope > .landing-preview-plus-badge")) return;
      host.classList.add("landing-preview-plus-host");
      if (getComputedStyle(host).position === "static") {
        host.style.position = "relative";
      }
      const badge = document.createElement("div");
      badge.className = "landing-preview-plus-badge";
      badge.textContent = "+";
      badge.setAttribute("aria-hidden", "true");
      host.appendChild(badge);
    };

    const markMedia = () => {
      document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
        /* Już oznaczone – nie dotykaj atrybutów, żeby nie zapętlić MutationObservera. */
        if (img.dataset.landingPreviewMarked === "1") return;
        const fn =
          extractFilename(img) ??
          img.getAttribute("data-landing-preview") ??
          null;
        if (!fn) return;
        cacheBustMedia(img);
        img.dataset.landingPreviewMarked = "1";
        if (!img.dataset.landingPreview) img.dataset.landingPreview = fn;
        attachPlusBadge(img);
      });

      document.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
        if (video.dataset.landingPreviewMarked === "1") return;
        const fn =
          extractFilename(video) ??
          video.getAttribute("data-landing-preview") ??
          null;
        if (!fn && !video.dataset.landingSlotKey) return;
        if (fn) {
          cacheBustMedia(video);
          if (!video.dataset.landingPreview) video.dataset.landingPreview = fn;
        }
        video.dataset.landingPreviewMarked = "1";
        attachPlusBadge(video);
      });
    };

    function postImageClick(payload: {
      filename: string;
      slotKey?: string;
      naturalWidth?: number;
      naturalHeight?: number;
      label?: string;
    }) {
      window.parent.postMessage(
        {
          type: "landing-preview-image-click",
          filename: payload.filename,
          slotKey: payload.slotKey,
          naturalWidth: payload.naturalWidth ?? 0,
          naturalHeight: payload.naturalHeight ?? 0,
          label: payload.label ?? payload.filename,
        },
        "*",
      );
    }

    const handleClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, input, textarea, select")) return;

      const slotTile = el.closest("[data-landing-preview-slot]") as HTMLElement | null;
      if (slotTile) {
        const filename = slotTile.dataset.landingFilename ?? null;
        if (filename) {
          e.preventDefault();
          e.stopPropagation();
          postImageClick({
            filename,
            slotKey: slotTile.dataset.landingPreviewSlot,
            label: slotTile.dataset.landingLabel ?? filename,
          });
          return;
        }
      }

      const videoSlot =
        el.closest("video[data-landing-slot-key]") ??
        el.closest("video[data-landing-preview-marked]");
      if (videoSlot instanceof HTMLVideoElement) {
        const filename =
          videoSlot.dataset.landingPreview ??
          videoSlot.getAttribute("data-landing-preview") ??
          extractFilename(videoSlot);
        if (filename) {
          e.preventDefault();
          e.stopPropagation();
          postImageClick({
            filename,
            slotKey: videoSlot.dataset.landingSlotKey,
            naturalWidth: videoSlot.videoWidth || 0,
            naturalHeight: videoSlot.videoHeight || 0,
            label: "Wideo tła hero",
          });
          return;
        }
      }

      let img =
        (el.closest("img[data-landing-slot-key]") as HTMLImageElement | null) ??
        (el.closest("img[data-landing-preview-marked]") as HTMLImageElement | null);
      if (!img) {
        const container = el.closest(
          "div:has(> img[data-landing-preview-marked]), div:has(> img[data-landing-slot-key])",
        );
        if (container) {
          img =
            container.querySelector<HTMLImageElement>("img[data-landing-slot-key]") ??
            container.querySelector<HTMLImageElement>("img[data-landing-preview-marked]");
        }
      }
      if (img) {
        const filename = img.dataset.landingPreview ?? extractFilename(img);
        if (filename) {
          e.preventDefault();
          e.stopPropagation();
          postImageClick({
            filename,
            slotKey: img.dataset.landingSlotKey,
            naturalWidth: img.naturalWidth || 0,
            naturalHeight: img.naturalHeight || 0,
            label: img.alt || filename,
          });
          return;
        }
      }

      const heroZone = el.closest("[data-landing-preview-zone=\"hero\"]") as HTMLElement | null;
      if (heroZone) {
        const heroVideo = heroZone.querySelector<HTMLVideoElement>("video[data-landing-slot-key]");
        if (heroVideo) {
          e.preventDefault();
          e.stopPropagation();
          postImageClick({
            filename:
              heroVideo.dataset.landingPreview ??
              heroVideo.getAttribute("data-landing-preview") ??
              "video-tlo.mp4",
            slotKey: heroVideo.dataset.landingSlotKey ?? "home_hero_video",
            label: "Wideo tła hero",
          });
        }
      }
    };

    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === "landing-preview-scroll-to-zone") {
        const zone = e.data.zone as string;
        if (!zone) return;
        const zoneEl = document.querySelector<HTMLElement>(`[data-landing-preview-zone="${zone}"]`);
        if (!zoneEl) return;
        const top = zoneEl.getBoundingClientRect().top + window.scrollY;
        window.parent.postMessage({ type: "landing-preview-zone-position", zone, top }, "*");
        return;
      }

      if (e.data?.type !== "landing-preview-refresh-image") return;
      const { filename, freshSrc, slotKey } = e.data as {
        filename: string;
        freshSrc: string;
        slotKey?: string;
      };
      if (!filename || !freshSrc) return;

      const refreshImg = (img: HTMLImageElement) => {
        img.src = freshSrc;
        img.srcset = "";
        img.dataset.landingPreview = filename;
      };

      if (slotKey) {
        document
          .querySelectorAll<HTMLImageElement>(`img[data-landing-slot-key="${slotKey}"]`)
          .forEach(refreshImg);
        document.querySelectorAll<HTMLVideoElement>(`video[data-landing-slot-key="${slotKey}"]`).forEach(
          (video) => {
            video.src = freshSrc;
            void video.load();
            video.dataset.landingPreview = filename;
          },
        );
        return;
      }

      document.querySelectorAll<HTMLImageElement>("img[data-landing-preview]").forEach((img) => {
        if (img.dataset.landingPreview === filename) refreshImg(img);
      });
      document.querySelectorAll<HTMLVideoElement>("video[data-landing-preview]").forEach((video) => {
        if (video.dataset.landingPreview === filename) {
          video.src = freshSrc;
          void video.load();
        }
      });
    };

    function broadcastPath() {
      try {
        window.parent.postMessage(
          { type: "landing-preview-pathname", pathname: window.location.pathname },
          "*",
        );
      } catch {
        // ignore
      }
    }

    function broadcastDocumentHeight() {
      try {
        const height = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
          document.documentElement.offsetHeight,
        );
        window.parent.postMessage({ type: "landing-preview-document-height", height }, "*");
      } catch {
        // ignore
      }
    }

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    window.history.pushState = function (...args) {
      const ret = originalPushState.apply(this, args);
      window.dispatchEvent(new Event("landing-preview-locationchange"));
      return ret;
    };
    window.history.replaceState = function (...args) {
      const ret = originalReplaceState.apply(this, args);
      window.dispatchEvent(new Event("landing-preview-locationchange"));
      return ret;
    };

    const handleLocationChange = () => {
      broadcastPath();
      broadcastDocumentHeight();
    };

    markMedia();
    document.addEventListener("click", handleClick, true);
    window.addEventListener("message", handleMessage);
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("landing-preview-locationchange", handleLocationChange);
    window.addEventListener("resize", broadcastDocumentHeight);

    let heightRaf = 0;
    const scheduleHeightBroadcast = () => {
      cancelAnimationFrame(heightRaf);
      heightRaf = requestAnimationFrame(broadcastDocumentHeight);
    };

    /* Debounce przez rAF + attributeFilter: markMedia() sam zmienia atrybuty (dataset,
       src), więc obserwowanie wszystkich atrybutów tworzyło pętlę zwrotną, która
       potrafiła zamrozić podgląd i cały panel. */
    let markRaf = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(markRaf);
      markRaf = requestAnimationFrame(() => {
        markMedia();
        broadcastDocumentHeight();
      });
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["src", "srcset", "poster"],
    });

    broadcastPath();
    scheduleHeightBroadcast();
    window.addEventListener("load", scheduleHeightBroadcast);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("landing-preview-locationchange", handleLocationChange);
      window.removeEventListener("resize", broadcastDocumentHeight);
      window.removeEventListener("load", scheduleHeightBroadcast);
      cancelAnimationFrame(heightRaf);
      cancelAnimationFrame(markRaf);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      observer.disconnect();
      styleEl.remove();
      banner.remove();
    };
  }, []);

  return null;
}
