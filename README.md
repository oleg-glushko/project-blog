# Blog Project
## Joy of React, Project III

In this project, we'll build an interactive MDX-based blog using Next 13:

![Screenshot of the final product](/docs/end-result.png)


## Getting Started

This is a Next 14 project. You'll first need to install NPM dependencies, and then run a local development server. Here are the relevant terminal commands:

```bash
# Install dependencies:
npm install

# Run a development server:
npm run dev
```

To create new components, you can use this helper script. It saves you a bit of time, creating all the files and adding the standard code:

```bash
# Create a new component:
npm run new-component [TheNewComponentName]
```

> **Using a Markdown renderer**
>
> For best results, you should use a Markdown renderer to view this file. This README includes lots of embedded images and screen recordings, and you'll need a Markdown renderer to be able to view them.
>
> In VS Code, you can render this README by opening the command palette (`Ctrl` + `Shift` + `P` on Windows/Linux, `⌘` + `Shift` + `P` on MacOS), typing “Markdown”, and selecting “Markdown: Open Preview”.

## Troubleshooting

- When you run a dev server, you may notice a warning: _You have enabled experimental feature (outputFileTracingIncludes)_. This warning can safely be ignored. `outputFileTracingIncludes` is a configuration option required to make sure that our MDX files are included when deploying our application to Vercel.
  - If you're curious about this, you can learn more [in Module 6 of the course](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/07.01-rendering-strategies-exercises#failed-vercel-deploys)

- If the dev server seems to be stuck on a stale error, and restarting the dev server doesn't help, you can clear Next's cache by deleting the `.next/cache` subdirectory. Don't worry about losing anything important: everything inside the `.next` directory is derived from the rest of the codebase.

- If you get stuck, you can definitely ask for help on Discord! Post your question in the #joy-of-react Discord channel.

- Please make sure you're using Node.js version 18.17 or higher. This is the minimum Node version required by Next.js.
  - You can find your current Node version by running `node -v` in a terminal. If the value is less than 18.17, you'll want to upgrade Node to the [current LTS (Long Term Support) version](https://nodejs.org/en).


---

## Exercise 1: Homepage list of posts

Let's update the homepage so that it shows a list of blog posts:

![Screenshot showing the homepage with a reverse-chronological list of blog posts](/docs/homepage-list-of-posts.png)

**Acceptance Criteria:**

- One `<BlogSummaryCard>` element should be rendered for each MDX file in the `/content` directory.
- A unique `key` should be given to each element.
- Each `<BlogSummaryCard>` element should be given the following props:
  - `slug`, matching the filename (eg. `javascript-modulo-operator`)
  - `title`, `abstract`, and `publishedOn`, all passed along from the frontmatter for each post.

**Note:** To help with some of the Node file-manipulation stuff, a helper module has been provided, `/src/helpers/file-helpers.js`. You can use the `getBlogPostList` function to gather the full list of blog posts. Alternatively, if you some experience using Node, feel free to solve this exercise without using this helper.

---

## Exercise 2: Displaying MDX

When clicking on one of the blog posts on the homepage, we're taken to the dynamic blog post route:

![Screenshot showing the blog post layout with the initial placeholder content](/docs/blog-post-before-mdx.png)

In this exercise, we'll use next-mdx-remote to render the MDX associated with the selected blog post.

**Acceptance Criteria:**

- The MDX corresponding to the selected blog post should be rendered.
  - For example, visiting `/javascript-modulo-operator` should display all of the content included in `/content/javascript-modulo-operator.mdx`.
- The raw content from the MDX file should be passed to the `<MDXRemote>` component.

The final result should look like this:

![Screenshot showing the blog post layout with all of the content from the MDX file, with correct formatting (paragraphs, headings, etc)](/docs/blog-post-with-mdx.png)

**Note:** Inside `/src/helpers/file-helpers.js`, you'll find a function called `loadBlogPost`. You can use this helper function if you're not comfortable with the Node `fs` module.

**Resources:**

- [“MDX in Next.js” lesson](https://courses.joshwcomeau.com/joy-of-react/project-blog/01.02-mdx-in-next)
- [next-mdx-remote docs](https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support)
  - **Be sure to use the _RSC_ version of the package!**
- [“Dynamic Segments” lesson](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/04.03-dynamic-segments)

---

## Exercise 3: Adding metadata

As we learned in Module 6, the [Next.js Metadata API](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/05-metadata) allows us to specify site metadata, like adding a `<title>` tag, or various `<meta>` tags. Let's use this API to add metadata to our blog.

For example, here's the metadata we should include, in the `<head>`:

```html
<title>Bits & Bytes</title>
<meta
  name="description"
  content="A wonderful blog about JavaScript"
/>
```

And on the blog post page, it should look something like this:

```html
<title>
  Understanding the JavaScript Modulo Operator • Bits & Bytes
</title>
<meta
  name="description"
  content="One of the most commonly-misunderstood operators…"
/>
```

**Acceptance Criteria:**

- The homepage and blog post pages should include the metadata specified above.
  - For the blog post page, the metadata should match the particular blog post. The `<title>` should include the blog post's `title`, and the `<meta name="description">` should use the `abstract`.
- The name of the blog, “Bits & Bytes”, shouldn't be hardcoded. It should use the `BLOG_TITLE` constant found in `/src/constants.js`.
- Performance should be optimized, as necessary, using the React Cache API.

**Resources:**

- [“Next.js Metadata API” lesson](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/05-metadata)
- [Next Metadata API official docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
