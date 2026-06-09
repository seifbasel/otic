import type { Metadata } from "next";
import { Cairo as CairoFont } from "next/font/google";

import "../globals.css";

const cairo = CairoFont({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "أوتيك — حرفية الخشب الراقية وتصميم المساحات الداخلية",
  description:
    "حرفية خشبية راقية للمساحات الداخلية الفاخرة. غرف ملابس مخصصة، مطابخ معمارية، ألواح جدارية، وأبواب فريدة من نوعها.",
};

export default function ArabicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-cairo)">
        {children}
      </body>
    </html>
  );
}
