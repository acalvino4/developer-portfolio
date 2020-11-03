import React, { ReactElement } from 'react';
import unified from 'unified';
import markdown2remark from 'remark-parse';
import remark2rehype from 'remark-rehype';
// import rehype2html from 'rehype-stringify';
// import html2rehype from 'rehype-parse';
import rehype2react from 'rehype-react';

// eslint-disable-next-line import/prefer-default-export
export const markdown2react = (markdown: string): ReactElement => (
  unified()
    .use(markdown2remark)
    .use(remark2rehype)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment
    })
    .processSync(markdown)
    .result as ReactElement
);

// export const markdown2html = (markdown: string) => (
//   unified()
//     .use(markdown2remark)
//     .use(remark2rehype)
//     .use(rehype2html)
//     .processSync(markdown)
//     .contents
// );

// export const html2react = (html: string): FC => (() => (
//   unified()
//     .use(html2rehype)
//     .use(rehype2react, { createElement: React.createElement })
//     .processSync(html)
//     .result as ReactElement
// ));
