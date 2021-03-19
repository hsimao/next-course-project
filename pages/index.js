import { Fragment } from "react";
import Hero from "../components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes buliding fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10"
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS2",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes buliding fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10"
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS3",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes buliding fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10"
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS4",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes buliding fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10"
  }
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

// Hero sections
// Featured sections
