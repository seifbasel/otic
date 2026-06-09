import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OTIC WOOD",
  description: "Premium wood excepermient",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div  className="font-[family-name:var(--font-arabic)]">
      {children}
    </div>
  );
}

// import type { Metadata } from "next";
// import { Cormorant_Garamond, DM_Sans } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/context/Themecontext";

// // Distinctive display font for headings
// const cormorant = Cormorant_Garamond({
//   variable: "--font-display",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   style: ["normal", "italic"],
// });

// // Clean body font
// const dmSans = DM_Sans({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
// });

// export const metadata: Metadata = {
//   title: "OTIC — Bespoke Woodcraft & Interior Joinery",
//   description: "Artisanal wood craftsmanship for high-end luxury interiors. Custom dressing rooms, architectural kitchens, wall panels, and bespoke doors.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html
//       lang="en"
//       className={`${cormorant.variable} ${dmSans.variable} h-full`}
//     >
//       <body className="min-h-full flex flex-col antialiased">
//         <ThemeProvider>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
