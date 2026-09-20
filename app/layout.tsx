import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNICORN | 美容室・サロン向け集客運用サービス",
  description:
    "Meta広告・Google・LP・LINEをつなぎ、新規予約から再来までまとめて運用。HOT PEPPER Beauty以外に、自社から予約が入る集客経路をつくる美容室・サロン向け集客運用代行サービスです。",
  metadataBase: new URL("https://unicorn-salon-lp.vercel.app"),
  openGraph: {
    title: "UNICORN | 美容室・サロン向け集客運用サービス",
    description:
      "自社から予約が入る、もう1本の集客経路を。Meta広告・Google・LP・LINEをつなぎ、新規予約から再来までまとめて運用。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-(--color-bg) text-(--color-ink) font-sans">
        {children}
      </body>
    </html>
  );
}
