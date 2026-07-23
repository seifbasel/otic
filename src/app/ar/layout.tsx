import HtmlDirPatcher from "@/components/HtmlDirPatcher";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أوتيك هوم — نجارة خشب راقية",
  description: "نجارة خشبية راقية للمساحات الداخلية الفاخرة في السعودية.",
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
