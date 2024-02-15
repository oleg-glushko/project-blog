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
