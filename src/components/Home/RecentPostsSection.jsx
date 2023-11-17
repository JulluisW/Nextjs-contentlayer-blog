import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPostsSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href={"/categories/all"}
          className="inline-block font-medium text-accent underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => (
          <arcticle className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </arcticle>
        ))}
      </div>
    </section>
  );
};

export default RecentPostsSection;