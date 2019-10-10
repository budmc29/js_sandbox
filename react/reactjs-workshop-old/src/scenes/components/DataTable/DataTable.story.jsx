/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  STATUS_STATE_UNAVAILABLE,
  STATUS_STATE_AVAILABLE,
} from 'utils/status';
import { storeDecorator } from 'utils/storybook';
import DataTable, {
  DataTableHeading,
  DataTableRow,
} from './index';

const DataTableStories = storiesOf('Demo App/DataTable', module);
const DataTableHeadingStories = storiesOf('Demo App/DataTable/Heading', module);
const DataTableRowStories = storiesOf('Demo App/DataTable/Row', module);

// Data Table Heading
DataTableHeadingStories
  .add('Default', () => (
    <DataTableHeading />
  ));

// Data Table Row
DataTableRowStories
  .add('Default', () => (
    <DataTableRow />
  ))
  .add('Available (long status time)', () => (
    <DataTableRow
      name="John Doe"
      team="Apollo"
      sources={[
        'Inbound',
        'Internal',
      ]}
      functions={[
        'Renewals',
        'Sales',
        'Tc Sales',
      ]}
      status={STATUS_STATE_AVAILABLE}
      statusSince={1537786989.1483066}
    />
  ))
  .add('Available', () => (
    <DataTableRow
      name="John Doe"
      team="Apollo"
      sources={[
        'Inbound',
        'Internal',
      ]}
      functions={[
        'Renewals',
        'Sales',
        'Tc Sales',
      ]}
      status={STATUS_STATE_AVAILABLE}
    />
  ))
  .add('Unavailable', () => (
    <DataTableRow
      name="Jane Smith"
      team="Aphrodite"
      sources={[
        'Outbound',
        'Internal',
      ]}
      functions={[
        'Sales',
        'Tc Sales',
      ]}
      status={STATUS_STATE_UNAVAILABLE}
    />
  ))
  .add('Busy', () => (
    <DataTableRow
      name="Alice Bob"
      team="Achillies"
      sources={[
        'Internal',
      ]}
      functions={[
        'Sales',
      ]}
      status="Meeting"
    />
  ));

// Data Table
DataTableStories
  .addDecorator(storeDecorator)
  .add('Default', () => {
    const data = [
      {
        name: 'Alice Bob',
        team: 'Achillies',
        sources: [
          'Internal',
        ],
        functions: [
          'Sales',
        ],
        status: 'Meeting',
      },
      {
        name: 'Jane Smith',
        team: 'Aphrodite',
        sources: [
          'Outbound',
          'Internal',
        ],
        functions: [
          'Sales',
          'Tc Sales',
        ],
        status: STATUS_STATE_UNAVAILABLE,
      },
      {
        name: 'John Doe',
        team: 'Apollo',
        sources: [
          'Inbound',
          'Internal',
        ],
        functions: [
          'Tc Sales',
          'Renewals',
          'Sales',
        ],
        status: STATUS_STATE_AVAILABLE,
      },
      {
        name: 'Alice Bob',
        team: 'Achillies',
        sources: [
          'Internal',
        ],
        functions: [
          'Sales',
        ],
        status: 'Meeting',
      },
      {
        name: 'Jane Smith',
        team: 'Aphrodite',
        sources: [
          'Outbound',
          'Internal',
        ],
        functions: [
          'Sales',
          'Tc Sales',
        ],
        status: STATUS_STATE_UNAVAILABLE,
      },
      {
        name: 'John Doe',
        team: 'Apollo',
        sources: [
          'Inbound',
          'Internal',
        ],
        functions: [
          'Tc Sales',
          'Renewals',
          'Sales',
        ],
        status: STATUS_STATE_AVAILABLE,
      },
    ];

    return (
      <DataTable rowData={data} />
    );
  });
