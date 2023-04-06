import Image from "next/image";
import { Inter } from "next/font/google";
import { Article } from "./types";
import ArticleList from "./components/ArticleList";
import { Heading } from "./common/components";

async function getArticles() {
  const domain = process.env.SITE_DOMAIN;
  const res = await fetch(`http://` + domain + `/api/articles/`, {
    cache: "no-store",
  });

  // error handling
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}
