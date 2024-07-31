/* eslint-disable import/no-anonymous-default-export */
import { Meta, StoryFn } from '@storybook/react';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

export default { 
    title: 'PostGrid',
    component: PostGrid,
    args: mock,
    parameters: {
      layout: 'fullscreen',
    },
} as Meta<PostGridProps>;

export const Template: StoryFn<PostGridProps> = (args) => { 
    return (
        <div></div>
    );
};

export const NoPosts: StoryFn<PostGridProps> = () => {
    return (
      <div>
        <PostGrid />
      </div>
    );
  };