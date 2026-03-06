const blogPosts = [
  {
    title: "What Is CORS?",
    body: "Cross-Origin Resource Sharing lets a server explicitly allow browsers to request resources from different origins using response headers.",
  },
  {
    title: "Why Use Firebase For Auth?",
    body: "Firebase Authentication is fast to integrate and provides secure sign-in flows. Alternatives include Auth0, Supabase Auth, AWS Cognito, and custom JWT auth services.",
  },
  {
    title: "How Private Routes Work",
    body: "A private route checks if a user is authenticated. If not authenticated, it redirects to sign-in and can preserve the intended destination.",
  },
  {
    title: "What Is Node.js?",
    body: "Node.js is a JavaScript runtime built on V8. It uses an event-driven, non-blocking I/O model that handles many concurrent requests efficiently.",
  },
];

const Blogs = () => {
  return (
    <section className='page-shell'>
      <div className='soft-card p-6 md:p-8'>
        <h1 className='text-3xl font-black'>Blog Notes</h1>
        <div className='mt-6 space-y-4'>
          {blogPosts.map((post) => (
            <article key={post.title} className='neo-subcard p-4'>
              <h2 className='text-xl font-black text-slate-900'>{post.title}</h2>
              <p className='mt-2 text-slate-700'>{post.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
