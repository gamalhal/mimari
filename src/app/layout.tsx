import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * إعداد الخطوط المستخدمة في الموقع
 * Geist للعناوين والنصوص العادية
 * Geist_Mono للنصوص التقنية
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * بيانات الموقع (Meta Data)
 * تستخدم في محركات البحث وشاركات وسائل التواصل الاجتماعي
 */
export const metadata: Metadata = {
  title: "معمارى - شركة التصميم المعماري الرائدة",
  description: "شركة معمارى تقدم خدمات التصميم المعماري والبناء والتخطيط الحضري. نبتكر تصاميم فريدة تجمع بين الجمال والوظيفة والاستدامة.",
  keywords: "معمارى، تصميم معماري، بناء، تخطيط حضري، استشارات هندسية، مشاريع معمارية",
  authors: [{ name: "gamal hal" }],
  creator: "gamal hal",
  openGraph: {
    title: "معمارى - شركة التصميم المعماري الرائدة",
    description: "نبتكر تصاميم معمارية فريدة تجمع بين الجمال والوظيفة والاستدامة",
    type: "website",
  },
};

/**
 * Layout الرئيسي للموقع
 * يحتوي على الهيكل الأساسي لجميع الصفحات
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
