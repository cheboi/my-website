import Link from "next/link";

export default function Articles() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white">Articles</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-800 mb-8">
          Latest Articles
        </h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Article Title 1
            </h3>
            <p className="text-blue-700 mb-4">
              A short excerpt of the article that gives a brief overview of its
              contents...
            </p>
            <Link
              href="/articles/article-1"
              className="text-blue-600 hover:underline"
            >
              Read More &rarr;
            </Link>
          </div>
          {/* Article Card 2 */}
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Article Title 2
            </h3>
            <p className="text-blue-700 mb-4">
              A short excerpt of the article that gives a brief overview of its
              contents...
            </p>
            <Link
              href="/articles/article-2"
              className="text-blue-600 hover:underline"
            >
              Read More &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
