import { Link } from "react-router-dom";
import f_posts_01 from "../assets/images/banners/f_posts_01.jpeg"
import f_posts_02 from "../assets/images/banners/f_posts_02.jpeg"
import f_posts_03 from "../assets/images/banners/f_posts_03.jpeg"

const posts = [
  {
    id: 1,
    image: f_posts_01,
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    link: "/post/1"
  },
  {
    id: 2,
    image: f_posts_02,
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    link: "/post/2"
  },
  {
    id: 3,
    image: f_posts_03,
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    link: "/post/3"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-10 px-5 relative z-10 overflow-hidden">
      <h2 className="text-center text-3xl font-bold">Featured Posts</h2>
      <p className="text-center text-gray-500 mt-2">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:px-8 w-full max-w-7xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full sm:max-w-[320px] md:max-w-[348px] h-[606px] mx-auto flex flex-col">
            <div className="relative w-full h-[300px]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-sm text-gray-500">
                <span className="text-blue-600">Google</span> Trending New
              </p>
              <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
              <p className="text-gray-600 mt-2 text-sm flex-grow">{post.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                <span className="flex items-center gap-1">📅 {post.date}</span>
                <span className="flex items-center gap-1">📊 {post.comments} comments</span>
              </div>
              <Link to={post.link} className="block text-blue-600 font-semibold mt-4 hover:underline">
                Learn More &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
