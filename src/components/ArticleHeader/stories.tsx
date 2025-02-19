import { Meta, StoryFn } from '@storybook/react';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: StoryFn<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum
        tempore repellendus neque est sequi quam inventore voluptate
        reprehenderit, tenetur ut, molestias sunt aut doloribus dolorum
        molestiae enim? Eligendi, molestiae!
      </p>
    </div>
  );
};