// @chakra-ui/react を標準でセットするとエラーになる。"./Provider.tsx"にてワンクッション置いている。
import Link from "next/link";
import Provider from "./Provider";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
