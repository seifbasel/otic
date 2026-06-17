import HtmlDirPatcher from "@/components/HtmlDirPatcher";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أوتيك — حرفية الخشب الراقية",
  description: "حرفية خشبية راقية للمساحات الداخلية الفاخرة.",
};

export default function ArabicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HtmlDirPatcher lang="ar" dir="rtl" />
      <div
        dir="rtl"
        className="min-h-full flex flex-col font-(family-name:--font-arabic)"
      >
        {children}
      </div>
    </>
  );
}