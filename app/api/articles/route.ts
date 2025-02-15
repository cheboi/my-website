import { NextResponse } from "next/server";

let articles = [
  {
    id: "1",
    title: "Next.js 13 Guide",
    content:
      "Learn Next.js! Enim reprehenderit laboris enim voluptate aliquip officia ad mollit labore mollit. Laboris voluptate qui nostrud adipisicing dolore aute. Sit aliquip nisi mollit exercitation. Irure sit nisi deserunt qui pariatur labore voluptate labore amet magna ex ut.",
    votes: 0,
    image: "/articles/c_sharp.jpg",
  },
  {
    id: "2",
    title: "Tailwind CSS Tips",
    content: "Style like a pro!",
    votes: 0,
    image: "/articles/tailwind.jpg",
  },
  {
    id: "3",
    title: "C# Basics",
    content: "Master C# programming!",
    votes: 0,
    image: "/articles/c_sharp.jpg",
  },
];

// Get all articles
export async function GET() {
  return NextResponse.json(articles);
}

export async function POST(req: Request) {
  const { id, voteType } = await req.json();

  // Find the article
  const article = articles.find((a) => a.id === id);
  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  if (voteType === "upvote") article.votes += 1;
  if (voteType === "downvote") article.votes -= 1;

  return NextResponse.json({ message: "Vote updated", article });
}
