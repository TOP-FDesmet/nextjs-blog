import { articles } from "../data";
import Link from "next/link";
import { Article } from "../types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florian Desmet - le blog",
  description: "Description de mon blog",
};

export default function BlogPage() {
  const listArticles = articles.map((article: Article) => {
    const link = `blog/${article.id}`;
    return (
      <li key={article.id}>
        <h2 className="text-lg">
          {article.title} le {article.date} par {article.author}
        </h2>
        <Link
          href={link}
          className="text-base text-blue-500 no-underline hover:underline"
        >
          Voir l&apos;article
        </Link>
      </li>
    );
  });
  return <ul>{listArticles}</ul>;
}
