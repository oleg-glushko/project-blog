import React from 'react';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';
import { MDXRemote } from 'next-mdx-remote/rsc';

import dynamic from 'next/dynamic';
const DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'));

import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';
import { BLOG_TITLE } from '@/constants';

export async function generateMetadata({ params }) {
    const { frontmatter: { title, abstract } } = await loadBlogPost(params.postSlug);
    const postTitle = `${title} • ${BLOG_TITLE}`;

    return { title: postTitle, description: abstract };
};

async function BlogPost({ params }) {
    const { frontmatter: { title, publishedOn }, content } = await loadBlogPost(params.postSlug);

    return (
        <article className={styles.wrapper}>
            <BlogHero
                title={title}
                publishedOn={publishedOn}
            />
            <div className={styles.page}>
                <MDXRemote source={content} components={{
                    pre: CodeSnippet,
                    DivisionGroupsDemo,
                }} />
            </div>
        </article>
    );
}

export default BlogPost;
