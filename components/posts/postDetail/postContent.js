import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import ReactMarkdown from "react-markdown";
import PostHeader from "./postHeader";
import Image from "next/image";
import classes from "./postContent.module.css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const { slug, title, image, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;

  // 將 Markdown 的 img 替換成 next Image 組件來顯示
  const customRenterers = {
    paragraph(paragraph) {
      const { node } = paragraph;

      // fix ReactMarkdown error (HTML to contain a matching <div> in <p>.)
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image.url}`}
              alt={title}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown renderers={customRenterers}>{content}</ReactMarkdown>
    </article>
  );
}
