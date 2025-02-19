import { Meta, StoryFn } from '@storybook/react';
import { GoTop } from '.';
import { JSX } from 'react';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn = (args: JSX.IntrinsicAttributes) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <GoTop {...args} />
    </div>
  );
};