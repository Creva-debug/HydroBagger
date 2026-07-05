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
      img[data-landing-preview-marked], video[data-landing-preview-marked] {
        cursor: crosshair !important;
        outline: 3px dashed transparent;
        outline-offset: 2px;
        transition: outline-color 0.15s ease;
      }
      img[data-landing-preview-marked]:hover, video[data-landing-preview-marked]:hover {
        outline-color: rgb(139 92 246 / 0.9);
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

    const markMedia = () => {
      document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
        const fn = extractFilename(img);
        if (!fn) return;
        cacheBustMedia(img);
        img.dataset.landingPreviewMarked = "1";
        if (!img.dataset.landingPreview) img.dataset.landingPreview = fn;
      });

      document.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
        const fn = extractFilename(video);
        if (!fn) return;
        cacheBustMedia(video);
        video.dataset.landingPreviewMarked = "1";
        if (!video.dataset.landingPreview) video.dataset.landingPreview = fn;
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

      const video = el.closest("video[data-landing-preview-marked]") as HTMLVideoElement | null;
      if (video) {
        const filename = video.dataset.landingPreview ?? extractFilename(video);
        if (!filename) return;
        e.preventDefault();
        e.stopPropagation();
        postImageClick({
          filename,
          slotKey: video.dataset.landingSlotKey,
          naturalWidth: video.videoWidth || 0,
          naturalHeight: video.videoHeight || 0,
          label: filename,
        });
        return;
      }

      let img = el.closest("img[data-landing-preview-marked]") as HTMLImageElement | null;
      if (!img) {
        const container = el.closest("div:has(> img[data-landing-preview-marked])");
        if (container) {
          img = container.querySelector<HTMLImageElement>("img[data-landing-preview-marked]");
        }
      }
      if (!img) return;

      const filename = img.dataset.landingPreview ?? extractFilename(img);
      if (!filename) return;
      e.preventDefault();
      e.stopPropagation();
      postImageClick({
        filename,
        slotKey: img.dataset.landingSlotKey,
        naturalWidth: img.naturalWidth || 0,
        naturalHeight: img.naturalHeight || 0,
        label: img.alt || filename,
      });
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

    const observer = new MutationObserver(() => {
      markMedia();
      scheduleHeightBroadcast();
    });
    observer.observe(document.body, { subtree: true, childList: true, attributes: true });

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
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      observer.disconnect();
      styleEl.remove();
      banner.remove();
    };
  }, []);

  return null;
}
