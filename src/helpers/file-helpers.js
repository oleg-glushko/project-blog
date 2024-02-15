import fs from 'fs/promises';
import { existsSync } from 'node:fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

const NONEXISTENT_POST = {
    frontmatter: {
        title: "This post doesn't exist",
        publishedOn: new Date(0),
    },
    content: "",
};

export async function getBlogPostList() {
    const fileNames = await readDirectory('/content');

    const blogPosts = [];

    for (let fileName of fileNames) {
        const rawContent = await readFile(
            `/content/${fileName}`
        );

        const { data: frontmatter } = matter(rawContent);

        blogPosts.push({
            slug: fileName.replace('.mdx', ''),
            ...frontmatter,
        });
    }

    return blogPosts.sort((p1, p2) =>
        p1.publishedOn < p2.publishedOn ? 1 : -1
    );
}

export const loadBlogPost = React.cache(async function (slug) {
    const blogFile = `/content/${slug}.mdx`;
    if (!isFileExist(blogFile))
        return NONEXISTENT_POST;

    const rawContent = await readFile(blogFile);

    const { data: frontmatter, content } =
        matter(rawContent);

    return { frontmatter, content };
});

function isFileExist(localPath) {
    return existsSync(
        path.join(process.cwd(), localPath));
}

function readFile(localPath) {
    return fs.readFile(
        path.join(process.cwd(), localPath),
        'utf8'
    );
}

function readDirectory(localPath) {
    return fs.readdir(
        path.join(process.cwd(), localPath)
    );
}
