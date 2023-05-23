import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./_layouts/Header";
import Sidebar from "./_layouts/Sidebar";
import Head from "./_layouts/Head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const listsData = [
  {
    title: "ユーザー一覧",
    href: "/users",
  },
  {
    title: "検索アルゴリズム",
    href: "/algorithms",
  },
  {
    title: "キャンペーン",
    href: "/campaigns",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head />
      <body className={inter.className}>
        <Header />
        <main>
          <div className="flex flex-row">
            <div className="basis-1/5">
              <Sidebar lists={listsData} />
            </div>
            <section className="basis-4/5 h-full max-h-screen pt-10">
              {children}
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
