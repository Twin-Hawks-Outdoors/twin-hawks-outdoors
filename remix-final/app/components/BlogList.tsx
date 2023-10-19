import { useFetcher } from "@remix-run/react";
import PostExcerpt from "./modules/PostExcerpt";
import type { PostExcerpt as PostExcerptDoc } from "types/post";
import { useEffect } from "react";

export function BlogList() {
  const postFetcher = useFetcher<Promise<{ posts: PostExcerptDoc[] }>>();

  const posts = postFetcher.data?.posts ?? [];

  useEffect(() => {
    if (postFetcher.state === "idle" && postFetcher.data == null) {
      postFetcher.load("/resources/getPosts");
    }
  }, [postFetcher]);

  return (
    <section className="my-32  container grid md:grid-cols-2 gap-8 place-items-center place-content-center">
      {posts?.map((post) => (
        <PostExcerpt {...post} key={post._id} />
      ))}
    </section>
  );
}

export default BlogList;
