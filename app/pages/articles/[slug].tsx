import { notFound } from "next/navigation";
import { Article, Comment } from "../../types";

const getArticle = async (slug: string) => {
    const domain = process.env.SITE_DOMAIN;
    const res = await fetch("http://" + domain + "/api/articles" + `${slug}`,
    {
      next: {revalidate: 60},
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const data = await res.json();
  return data as Article;
};

const getComments = async (slug: string) => {
  const domain = process.env.SITE_DOMAIN;
  const res = await fetch("http://" + domain + "/api/articles" + `${slug}` + "/comments",
    {
      cache: "no-store",
    }
);
  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }
  const data = await res.json();
  return data.comments as Comment[];
}
