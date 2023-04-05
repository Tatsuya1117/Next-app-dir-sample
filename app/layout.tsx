// @chakra-ui/react を標準でセットするとエラーになる。"./Provider.tsx"にてワンクッション置いている。
import Link from "next/link";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>
          <header>
            <h1>
              <Link href="/">ブログ</Link>
            </h1>
            <Link href="/articles/new">記事を書く</Link>
          </header>
          {children}
          <footer>
            <small>© 2023 Example Next App</small>
          </footer>
        </Provider>
      </body>
    </html>
  );
}
