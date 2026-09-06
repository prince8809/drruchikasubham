"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";

export interface LanguageOption {
  code: string;
  nativeName: string;
  englishLabel: string;
  regionHint: string;
  shortCode: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    nativeName: "English",
    englishLabel: "English",
    regionHint: "Default",
    shortCode: "EN",
  },
  {
    code: "bn",
    nativeName: "বাংলা",
    englishLabel: "Bengali",
    regionHint: "West Bengal & Siliguri",
    shortCode: "বাংলা",
  },
  {
    code: "hi",
    nativeName: "हिन्दी",
    englishLabel: "Hindi",
    regionHint: "North Bengal & Bihar",
    shortCode: "हिन्दी",
  },
  {
    code: "ne",
    nativeName: "नेपाली",
    englishLabel: "Nepali",
    regionHint: "Darjeeling, Hills & Sikkim",
    shortCode: "नेपाली",
  },
];

interface LanguageSelectorProps {
  variant?: "navbar" | "compact" | "drawer";
  onSelect?: () => void;
}

export default function LanguageSelector({
  variant = "navbar",
  onSelect,
}: LanguageSelectorProps) {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Read current active language on mount
  useEffect(() => {
    const getCookie = (name: string) => {
      if (typeof document === "undefined") return null;
      const match = document.cookie.match(
        new RegExp("(?:^|;\\s*)" + name + "=([^;]*)")
      );
      return match ? decodeURIComponent(match[1]) : null;
    };

    let active = "en";
    const saved = localStorage.getItem("user_preferred_language");
    const cookie = getCookie("googtrans");

    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      active = saved;
    } else if (cookie) {
      const match = cookie.match(/\/(?:en|auto)\/([a-z]{2})/i);
      if (match && match[1]) {
        active = match[1].toLowerCase();
      }
    }

    if (SUPPORTED_LANGUAGES.some((l) => l.code === active)) {
      setSelectedLang(active);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (langCode: string) => {
    if (langCode === selectedLang && isOpen) {
      setIsOpen(false);
      return;
    }

    setSelectedLang(langCode);
    setIsOpen(false);
    if (onSelect) onSelect();

    try {
      localStorage.setItem("user_preferred_language", langCode);
    } catch {}

    const host = window.location.hostname;
    const cookieVal = langCode === "en" ? "/en/en" : `/en/${langCode}`;

    // Set cookie on standard path and domain
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${host};`;

    const domainParts = host.split(".");
    if (domainParts.length > 1) {
      const rootDomain = "." + domainParts.slice(-2).join(".");
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${rootDomain};`;
    }

    // If restoring English, clear cookies and reload to restore pristine original DOM
    if (langCode === "en") {
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
      if (domainParts.length > 1) {
        const rootDomain = "." + domainParts.slice(-2).join(".");
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
      }
      window.location.reload();
      return;
    }

    // Try triggering Google Translate element select
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else {
      // Fallback reload if Google Translate iframe hasn't initialized combo
      window.location.reload();
    }
  };

  const currentLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === selectedLang) ||
    SUPPORTED_LANGUAGES[0];

  // VARIANT: Drawer (Inside Mobile Menu)
  if (variant === "drawer") {
    return (
      <div className="w-full space-y-2 pt-2 pb-1 notranslate" translate="no">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider px-1 notranslate" translate="no">
          <Globe className="w-3.5 h-3.5 text-[#FB5A7C]" />
          <span>Language / ভাষা / भाषा / भाषा</span>
        </div>
        <div className="grid grid-cols-2 gap-2 notranslate" translate="no">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isCurrent = lang.code === selectedLang;
            return (
              <button
                key={lang.code}
                type="button"
                translate="no"
                onClick={() => changeLanguage(lang.code)}
                className={`flex flex-col text-left p-2.5 rounded-xl border transition-all cursor-pointer notranslate ${
                  isCurrent
                    ? "bg-[#FFF0F3] border-[#FB5A7C] text-[#C4274C] shadow-2xs font-bold"
                    : "bg-white border-gray-200 text-[#1A2229] hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between notranslate" translate="no">
                  <span className="text-sm font-bold tracking-tight notranslate" translate="no">
                    {lang.nativeName}
                  </span>
                  {isCurrent && <Check className="w-3.5 h-3.5 text-[#FB5A7C]" />}
                </div>
                <span className="text-[10px] text-gray-500 font-medium notranslate" translate="no">
                  {lang.englishLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // VARIANT: Compact (Mobile Top Bar icon button)
  if (variant === "compact") {
    return (
      <div className="relative notranslate" translate="no" ref={dropdownRef}>
        <button
          type="button"
          translate="no"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 bg-white/90 hover:bg-[#FFF0F3] text-[#1A2229] border border-[#F1E5E8] hover:border-[#FFD3DC] px-2 py-1.5 rounded-full text-xs font-semibold shadow-2xs transition-all cursor-pointer notranslate"
          aria-label="Change language"
        >
          <Globe className="w-3.5 h-3.5 text-[#FB5A7C]" />
          <span className="text-[11px] font-bold text-[#1A2229] notranslate" translate="no">
            {currentLangObj.shortCode}
          </span>
          <ChevronDown
            className={`w-3 h-3 text-gray-400 transition-transform ${
              isOpen ? "rotate-180 text-[#FB5A7C]" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#F1E5E8] p-2 z-50 animate-in fade-in zoom-in-95 duration-150 notranslate" translate="no">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2.5 py-1 notranslate" translate="no">
              Select Language / ভাষা
            </div>
            <div className="space-y-1 mt-1 notranslate" translate="no">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isCurrent = lang.code === selectedLang;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    translate="no"
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors cursor-pointer notranslate ${
                      isCurrent
                        ? "bg-[#FFF0F3] text-[#C4274C] font-bold"
                        : "hover:bg-gray-50 text-[#1A2229]"
                    }`}
                  >
                    <div className="notranslate" translate="no">
                      <div className="text-xs font-bold leading-tight notranslate" translate="no">
                        {lang.nativeName}
                      </div>
                      <div className="text-[10px] text-gray-500 notranslate" translate="no">
                        {lang.englishLabel}
                      </div>
                    </div>
                    {isCurrent && (
                      <Check className="w-4 h-4 text-[#FB5A7C] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // VARIANT: Navbar (Desktop Header Dropdown)
  return (
    <div className="relative notranslate" translate="no" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select website language"
        translate="no"
        className="flex items-center gap-1.5 bg-white/95 hover:bg-[#FFF0F3] text-[#1A2229] border border-[#F1E5E8] hover:border-[#FFD3DC] px-3 py-2 rounded-full text-xs font-semibold shadow-2xs hover:shadow-sm transition-all cursor-pointer select-none notranslate"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 text-[#FB5A7C]" />
        <span className="font-bold text-xs text-[#1A2229] notranslate" translate="no">
          {currentLangObj.nativeName}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#FB5A7C]" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-3xl shadow-xl border border-[#F1E5E8] p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 notranslate" translate="no">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 pt-1 pb-1.5 notranslate" translate="no">
            Website Language / भाषा নির্বাচন
          </div>

          <div className="space-y-1 notranslate" translate="no">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isCurrent = lang.code === selectedLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  translate="no"
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-all cursor-pointer group notranslate ${
                    isCurrent
                      ? "bg-[#FFF0F3] border border-[#FFD3DC] text-[#C4274C]"
                      : "hover:bg-gray-50 text-[#1A2229]"
                  }`}
                >
                  <div className="notranslate" translate="no">
                    <div className="font-bold text-sm leading-tight flex items-center gap-1.5 notranslate" translate="no">
                      <span className="notranslate" translate="no">{lang.nativeName}</span>
                      {isCurrent && (
                        <span className="text-[9px] font-semibold bg-[#FB5A7C] text-white px-1.5 py-0.5 rounded-full notranslate" translate="no">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium mt-0.5 notranslate" translate="no">
                      {lang.englishLabel} &bull; {lang.regionHint}
                    </div>
                  </div>
                  {isCurrent && (
                    <Check className="w-4 h-4 text-[#FB5A7C] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-gray-100 px-2 text-[10px] text-gray-400 text-center notranslate" translate="no">
            Automatic translation for Siliguri &amp; Hills patients
          </div>
        </div>
      )}
    </div>
  );
}
