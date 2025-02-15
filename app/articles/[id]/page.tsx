"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

interface Article {
  id: string;
  title: string;
  content: string;
  image: string;
  votes: number;
}

interface Comment {
  id: string;
  articleId: string;
  text: string;
  replies: Comment[];
}

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState<{ [commentId: string]: string }>({});
  const [showMoreReplies, setShowMoreReplies] = useState<{
    [commentId: string]: boolean;
  }>({});
  const [visibleComments, setVisibleComments] = useState(2);

  useEffect(() => {
    fetch(`/api/articles`)
      .then((res) => res.json())
      .then((data) => {
        const foundArticle = data.find((a: Article) => a.id === id);
        setArticle(foundArticle);
      });

    fetch(`/api/comments?articleId=${id}`)
      .then((res) => res.json())
      .then(setComments);
  }, [id]);

  const addComment = async () => {
    if (!newComment.trim()) return;

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ articleId: id, text: newComment }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const newCommentData = await response.json();
      setComments([...comments, newCommentData]);
      setNewComment("");
    }
  };

  const addReply = async (commentId: string) => {
    const text = newReply[commentId];
    if (!text.trim()) return;

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ articleId: id, text, parentId: commentId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const newReplyData = await response.json();
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, newReplyData] }
            : comment
        )
      );
      setNewReply((prev) => ({ ...prev, [commentId]: "" }));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 mt-20 ">
        {article ? (
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center w-full">
            <img
              src={article.image}
              alt={article.title}
              className="w-[90%] h-56 object-cover rounded-lg mx-auto"
            />
            <h2 className="text-4xl font-bold text-blue-800 mt-4">
              {article.title}
            </h2>
            <p className="mt-4 text-gray-700 text-lg">{article.content}</p>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
}
