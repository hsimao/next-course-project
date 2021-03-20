import { Fragment } from "react";
import Hero from "../components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getFeaturedPosts()
    }
  };
}
