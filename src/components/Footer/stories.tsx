import { Meta, StoryFn } from '@storybook/react/';
import { Footer, FooterProps } from '.';
import { JSX } from 'react';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Foi Feito com ❤ por Otávio Miranda</a></p>`,
  },
} as Meta;

export const Template: StoryFn<FooterProps> = (args: JSX.IntrinsicAttributes & FooterProps) => {
  return (
    <div style={{ marginTop: '200px' }}>
      <Footer {...args} />
    </div>
  );
};