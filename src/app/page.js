import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection.jsx";
import FeaturedPostSection from "../components/Home/FeaturedPostSection.jsx";
import RecentPostsSection from "../components/Home/RecentPostsSection.jsx";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPostSection blogs={allBlogs} />
      <RecentPostsSection blogs={allBlogs} />
    </main>
  );
}
