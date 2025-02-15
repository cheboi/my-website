import { NextResponse } from "next/server";

interface Comment {
  id: string;
  articleId: string;
  text: string;
  replies: Comment[];
}

let comments: Comment[] = [
  { id: "1", articleId: "1", text: "Great article!", replies: [] },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const articleId = url.searchParams.get("articleId");

  const articleComments = comments.filter((c) => c.articleId === articleId);
  return NextResponse.json(articleComments);
}

export async function POST(req: Request) {
  const { articleId, text, parentId } = await req.json();

  if (!text) {
    return NextResponse.json({ error: "Text is required" }, { status: 400 });
  }

  if (parentId) {
    // Find the parent comment
    const parentComment = comments.find((c) => c.id === parentId);

    if (parentComment) {
      parentComment.replies.push({
        id: Date.now().toString(),
        articleId,
        text,
        replies: [],
      });
      return NextResponse.json({ message: "Reply added", parentComment });
    }
  } else {
    const newComment: Comment = {
      id: Date.now().toString(),
      articleId,
      text,
      replies: [],
    };
    comments.push(newComment);
    return NextResponse.json({ message: "Comment added", newComment });
  }

  return NextResponse.json(
    { error: "Parent comment not found" },
    { status: 404 }
  );
}
