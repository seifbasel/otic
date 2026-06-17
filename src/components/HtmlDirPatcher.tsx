"use client";
import { useEffect } from "react";

export default function HtmlDirPatcher({
  lang,
  dir,
}: {
  lang: string;
  dir: "ltr" | "rtl";
}) {
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", dir);

    return () => {
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
    };
  }, [lang, dir]);

  return null;
}