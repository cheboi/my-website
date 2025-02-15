"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
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
  const [editingComment, setEditingComment] = useState<{
    id: string | null;
    text: string;
  }>({
    id: null,
    text: "",
  });

  const [replyText, setReplyText] = useState<{ [commentId: string]: string }>(
    {}
  );

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

  // Voting System
  const handleVote = async (voteType: "upvote" | "downvote") => {
    if (!article) return;

    await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({ id: article.id, voteType }),
      headers: { "Content-Type": "application/json" },
    });

    setArticle((prev) =>
      prev
        ? { ...prev, votes: prev.votes + (voteType === "upvote" ? 1 : -1) }
        : null
    );
  };

  // Add comments
  const addComment = async () => {
    if (!newComment.trim()) return;

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ articleId: id, text: newComment }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const newCommentData = await response.json();
      setComments((prev) => [...prev, newCommentData]);
      setNewComment("");
    }
  };

  // Edit comments method
  const editComment = async (commentId: string) => {
    if (!editingComment.text.trim()) return;

    const response = await fetch("/api/comments", {
      method: "PUT",
      body: JSON.stringify({ id: commentId, text: editingComment.text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, text: editingComment.text }
            : comment
        )
      );
      setEditingComment({ id: null, text: "" });
    }
  };

  // Delete comments
  const deleteComment = async (commentId: string) => {
    await fetch(`/api/comments?id=${commentId}`, { method: "DELETE" });

    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  //reply to a comments
  const addReply = async (commentId: string) => {
    const text = replyText[commentId];
    if (!text.trim()) return;

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ articleId: id, text, parentId: commentId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const newReplyData = await response.json();
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, newReplyData] }
            : comment
        )
      );
      setReplyText((prev) => ({ ...prev, [commentId]: "" }));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 mt-20">
        {article ? (
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={article.image}
              alt={article.title}
              className="w-[90%] h-56 object-cover rounded-lg mx-auto"
            />
            <h2 className="text-4xl font-bold text-blue-800 mt-4">
              {article.title}
            </h2>
            <p className="mt-4 text-gray-700 text-lg">{article.content}</p>

            {/* Votes section */}
            <div className="mt-4 flex justify-center items-center gap-4">
              <button
                onClick={() => handleVote("upvote")}
                className="text-green-500"
              >
                <AiOutlineLike size={24} />
              </button>
              <span className="text-lg font-semibold">
                {article.votes} votes
              </span>
              <button
                onClick={() => handleVote("downvote")}
                className="text-red-500"
              >
                <AiOutlineDislike size={24} />
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Comments</h3>

              <textarea
                className="w-full p-2 border rounded mb-2"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                onClick={addComment}
                className="bg-blue-600 px-3 py-1 text-white rounded"
              >
                Post Comment
              </button>

              {comments.map((comment) => (
                <div key={comment.id} className="mt-4 p-3 bg-gray-100 rounded">
                  {editingComment.id === comment.id ? (
                    <div>
                      <textarea
                        className="w-full p-2 border rounded"
                        value={editingComment.text}
                        onChange={(e) =>
                          setEditingComment({
                            id: comment.id,
                            text: e.target.value,
                          })
                        }
                      />
                      <button
                        onClick={() => editComment(comment.id)}
                        className="bg-green-500 px-2 py-1 text-white rounded mt-2"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <p>{comment.text}</p>
                  )}

                  {/* Edit & Delete Buttons */}
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() =>
                        setEditingComment({
                          id: comment.id,
                          text: comment.text,
                        })
                      }
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <AiOutlineEdit size={20} />
                    </button>
                    <button
                      onClick={() => deleteComment(comment.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  </div>

                  {/* Replies Section */}
                  {(comment.replies?.length || 0) > 0 && (
                    <div className="mt-2 ml-6 border-l-2 pl-4 border-gray-300">
                      {comment.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className="p-2 bg-gray-200 rounded mt-2"
                        >
                          <p>{reply.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
}
