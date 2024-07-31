/* eslint-disable react/no-children-prop */
import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '.';
import { JSX } from 'react';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Light: StoryFn<HeadingProps> = (args: JSX.IntrinsicAttributes) => <Heading children={undefined} {...args} />;
export const Dark: StoryFn<HeadingProps> = (args: JSX.IntrinsicAttributes & HeadingProps) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};