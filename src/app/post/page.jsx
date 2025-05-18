import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-4 gap-4  mt-6">
      {posts.map((singlePost) => {
        return (
          <div
            key={singlePost.id}
            className="border-2 rounded-lg border-red-600 p-4"
          >
            <p>{singlePost.title}</p>
            <p>{singlePost.body}</p>

            <Link href={`/post/${singlePost.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}
