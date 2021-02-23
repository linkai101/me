import Head from "next/head";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { Box, Text } from "theme-ui";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import components from "../../components/blog/AllComponents";

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <>
      <Head>
        <title>{frontMatter.title} - Linkai Wu</title>
      </Head>
      <Box sx={{ variant: "containers.page" }}>
        <Box sx={{ mt: "3rem", textAlign: "center" }}>
          <h1 style={{ margin: 8 }}>{frontMatter.title}</h1>
          <Text
            sx={{
              width: ["80%", "50%"],
              mx: "auto"
            }}
          >
            {frontMatter.author}
            {" / "}
            <span>{frontMatter.date}</span>
          </Text>
        </Box>
        <Box sx={{ my: "4rem", mx: "6rem" }}>
          <Box>{content}</Box>
        </Box>
      </Box>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostData(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    components,
    scope: data
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
}