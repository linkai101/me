import React from 'react';
import Link from "next/link";
import { Box, Heading, Text } from 'theme-ui';
import { getSortedPosts } from "../../lib/posts";
import styles from '../../styles/pages/Blog.module.css';

export default function Blog({ allPostsData }) {
  return (
    <>
      <Box color="text" bg="background" className={styles.main}>
        <div className={styles.title}>
          <h1>Latest Posts</h1>
        </div>
        {allPostsData.map(({ slug, date, title, excerpt }) => (
          <Box key={slug} className={styles.post}>
            <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
              <a>
                <Heading>{title}</Heading>
              </a>
            </Link>
            <Box sx={{ my: "0.5rem" }}>{excerpt}</Box>
            <Text>{date}</Text>
          </Box>
        ))}
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}