"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

interface Article {
  id: string;
  title: string;
  content: string;
  votes: number;
  image: string;
}

interface Comment {
  id: string;
  articleId: string;
  text: string;
  replies: Comment[];
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<{ [articleId: string]: string }>(
    {}
  );
  const [expandedComments, setExpandedComments] = useState<{
    [articleId: string]: boolean;
  }>({});

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  const handleVote = async (id: string, voteType: "upvote" | "downvote") => {
    await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({ id, voteType }),
      headers: { "Content-Type": "application/json" },
    });

    setArticles((prev) =>
      prev.map((article) =>
        article.id === id
          ? {
              ...article,
              votes: article.votes + (voteType === "upvote" ? 1 : -1),
            }
          : article
      )
    );
  };

  const fetchComments = async (articleId: string) => {
    const response = await fetch(`/api/comments?articleId=${articleId}`);
    const data = await response.json();
    setComments(data);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 mt-20">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <li
              key={article.id}
              className="p-4 bg-white rounded-lg shadow-lg text-center"
            >
              {/* Wider Image (85-95% width) */}
              <img
                src={article.image}
                alt={article.title}
                className="w-[90%] h-48 object-cover rounded-lg mx-auto"
              />
              <a
                href={`/articles/${article.id}`}
                className="block text-xl font-semibold text-blue-700 mt-2"
              >
                {article.title}
              </a>
              <p className="mt-2 text-gray-700">{article.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
