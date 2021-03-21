import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/postDetail/postContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const {
    params: { slug }
  } = context;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  const pathsParams = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths: pathsParams,
    fallback: false
  };
}
