export default function BlogNotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-3xl font-semibold text-polibatam-navy">Post not found</h1>
      <p className="mt-3 max-w-md text-sm text-gray-500">
        The article you are looking for might have been unpublished or the link is incorrect. Please return to the
        blog list to explore other stories.
      </p>
    </section>
  );
}
