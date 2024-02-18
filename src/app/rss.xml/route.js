import RSS from 'rss';
import { getBlogPostList } from '@/helpers/file-helpers';
import { BLOG_TITLE, BLOG_DESCRIPTION, BLOG_URL } from '@/constants';

export async function GET(request) {
    const feed = new RSS({
        title: BLOG_TITLE,
        description: BLOG_DESCRIPTION,
        site_url: BLOG_URL,
        feed_url: `${BLOG_URL}/rss.xml`,
    });

    const blogPosts = await getBlogPostList();

    blogPosts.forEach(post => feed.item({
        title: post.title,
        description: post.abstract,
        url: `${BLOG_URL}/${post.slug}`,
        date: new Date(post.publishedOn),
    }));

    return new Response(feed.xml({ indent: true }), {
        headers: {
            "content-type": "application/xml",
        }
    });
}