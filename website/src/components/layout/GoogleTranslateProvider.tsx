"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslateProvider() {
  useEffect(() => {
    // 1. React DOM safety patch for Google Translate
    // Google Translate replaces text nodes with <font> tags. When React's reconciler
    // tries to remove or update elements whose child text nodes were altered by Google,
    // it can throw "NotFoundError: Failed to execute 'removeChild' on 'Node'".
    // This polyfill safely intercepts mismatched parent-child operations.
    if (typeof window !== "undefined") {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function <T extends Node>(child: T): T {
        if (child.parentNode !== this) {
          return child;
        }
        return originalRemoveChild.apply(this, [child]) as T;
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function <T extends Node>(
        newNode: T,
        referenceNode: Node | null
      ): T {
        if (referenceNode && referenceNode.parentNode !== this) {
          return originalInsertBefore.apply(this, [newNode, null]) as T;
        }
        return originalInsertBefore.apply(this, [newNode, referenceNode]) as T;
      };
    }

    // 2. Global Google Translate Element Init Callback
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,bn,hi,ne",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // 3. Inject Google Translate script if not already present
    const SCRIPT_ID = "google-translate-script";
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // 4. Suppress Google Translate body top offset & remove banner iframe
    const fixBodyOffset = () => {
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.top = "0px";
      }
      if (document.body.style.position === "relative") {
        document.body.style.position = "static";
      }
      const banner = document.querySelector<HTMLElement>(
        ".VIpgJd-ZVi9od-ORHb-OEVmcd, [id=':1.container'], iframe.skiptranslate"
      );
      if (banner) {
        banner.style.display = "none";
        banner.style.visibility = "hidden";
        banner.style.height = "0px";
      }

      const tooltips = document.querySelectorAll<HTMLElement>(
        "#goog-gt-tt, #goog-gt-vt, [class*='VIpgJd-yAWNEb'], [class*='VIpgJd-ZVi9od'], .goog-tooltip, .goog-te-balloon-frame"
      );
      tooltips.forEach((tt) => {
        tt.style.setProperty("display", "none", "important");
        tt.style.setProperty("visibility", "hidden", "important");
        tt.style.setProperty("opacity", "0", "important");
      });
    };

    const observer = new MutationObserver(fixBodyOffset);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
      childList: true,
    });

    // 5. Intercept hover/mouseover on translated font tags to suppress popup balloon
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.tagName === "FONT" || target.closest("font")) {
          target.classList.remove("goog-text-highlight");
        }
      }
      const tt = document.getElementById("goog-gt-tt");
      if (tt) {
        tt.style.setProperty("display", "none", "important");
        tt.style.setProperty("visibility", "hidden", "important");
        tt.style.setProperty("opacity", "0", "important");
      }
    };

    document.addEventListener("mouseover", handleMouseOver, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("mouseover", handleMouseOver, true);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="hidden pointer-events-none"
      style={{ display: "none", position: "absolute", left: "-9999px" }}
      aria-hidden="true"
    />
  );
}
