import ReactMarkdown from "react-markdown";
import PostHeader from "./postHeader";
import classes from "./postContent.module.css";

export default function PostContent(props) {
  const { slug, title, image, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
