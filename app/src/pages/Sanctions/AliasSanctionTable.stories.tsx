import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AliasSanctionTable } from './AliasSanctionTable';

export default {
  title: 'Pages/Sanction/AliasSanctionTable',
  component: AliasSanctionTable,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AliasSanctionTable>;
const Template: ComponentStory<typeof AliasSanctionTable> = args => <AliasSanctionTable {...args} />;

export const NoData = Template.bind({});

export const WithData: ComponentStory<typeof AliasSanctionTable> = props => (
  <AliasSanctionTable
    {...props}
    data={[
      {
        id: 10000,
        sanctionId: 100,
        alias: 'KCST',
        sanction: {
          id: 100,
          primaryName: 'KCST',
          issued: '2006-06-12T22:24:11.602Z',
        },
      },
      {
        id: 10002,
        sanctionId: 100,
        alias: 'DPRK Committee for Space Technology',
        sanction: {
          id: 100,
          primaryName: 'KCST',
          issued: '2006-06-12T22:24:11.602Z',
        },
      },
      {
        id: 10003,
        sanctionId: 100,
        alias: 'Department of Space Technology of the DPRK',
        sanction: {
          id: 100,
          primaryName: 'KCST',
          issued: '2006-06-12T22:24:11.602Z',
        },
      },
      {
        id: 10004,
        sanctionId: 100,
        alias: 'Korean Committee for Space Technology',
        sanction: {
          id: 100,
          primaryName: 'KCST',
          issued: '2006-06-12T22:24:11.602Z',
        },
      },
      {
        id: 10202,
        sanctionId: 102,
        alias: 'Saddam Hussein Al-Tikriti',
        sanction: {
          id: 102,
          primaryName: 'Abou Ali',
          issued: '2001-10-27T22:24:11.602Z',
        },
      },
      {
        id: 10302,
        sanctionId: 103,
        alias: 'Noureddine Ben Ali Ben Belkassem Al-Drissi',
        sanction: {
          id: 103,
          primaryName: 'Abou Ali',
          issued: '2003-03-01T22:24:11.602Z',
        },
      },
      {
        id: 10400,
        sanctionId: 104,
        alias: 'Popular Credit Bank',
        sanction: {
          id: 104,
          primaryName: 'Popular Credit Bank',
          issued: '2010-10-31T22:24:11.602Z',
        },
      },
      {
        id: 10500,
        sanctionId: 105,
        alias: 'Malek Ashtar University',
        sanction: {
          id: 105,
          primaryName: 'Université Malek Ashtar',
          issued: '2015-11-27T22:24:11.602Z',
        },
      },
      {
        id: 10501,
        sanctionId: 105,
        alias: 'Malek Ashtar universitetas',
        sanction: {
          id: 105,
          primaryName: 'Université Malek Ashtar',
          issued: '2015-11-27T22:24:11.602Z',
        },
      },
      {
        id: 10502,
        sanctionId: 105,
        alias: 'Malek Ashtar-Universität',
        sanction: {
          id: 105,
          primaryName: 'Université Malek Ashtar',
          issued: '2015-11-27T22:24:11.602Z',
        },
      },
    ]}
  />
);
