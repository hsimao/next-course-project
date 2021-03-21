import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts()
    }
  };
}
