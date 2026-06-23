import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kamameshi-murata.vercel.app";
const title = "麻布十番釜めし むら田｜麻布十番の釜飯・和食";
const description =
  "麻布十番釜めし むら田は、東京都港区麻布十番の釜飯・和食店です。住所、電話番号、営業時間、予約方法、アクセス、English Guideを確認できます。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "麻布十番釜めし むら田",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
