import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content
  };

  return postData;
}

export function getAllPosts() {
  return getPostsFiles()
    .map((postFile) => getPostData(postFile))
    .sort((a, b) => b.date - a.date);
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
