import { FC } from 'react';
import { markdown2react } from 'lib/unify';

type ComponentizedMarkdownProps = {
  markdown: string
}

const ComponentizedMarkdown: FC<ComponentizedMarkdownProps> = ({ markdown }: ComponentizedMarkdownProps) => markdown2react(markdown);

export default ComponentizedMarkdown;
