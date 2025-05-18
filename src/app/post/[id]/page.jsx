export const getSinglePost = async (post_id) => {
  // https://jsonplaceholder.typicode.com/posts/1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export default async function SinglePost({ params }) {
  const p = await params;
  console.log(p.id);
  const singlePost = await getSinglePost(p.id);
  return (
    <div className="mt-4">
      <p> {JSON.stringify(singlePost)}</p>
      <h1 className="text-2xl font-bold">{singlePost.title}</h1>
      <p>{singlePost.body}</p>
    </div>
  );
}
