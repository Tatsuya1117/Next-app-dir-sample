// Chakra UI のコンポーネントはすべて <ChakraProvider> に依存している。
// Client Component でのみ動作するため UI コンポーネントを使用する場合にはラップして "use client" を宣言する必要がある。

"use client";

import { ChakraProvider } from "@chakra-ui/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
