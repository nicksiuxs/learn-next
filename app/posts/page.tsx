const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <section>
      <h1>Posts</h1>
      {posts.map((post: Post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        );
      })}
    </section>
  );
}
