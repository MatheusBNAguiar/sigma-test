import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Pagination>;

export const Example: ComponentStory<typeof Pagination> = args => <Pagination {...args} />;
