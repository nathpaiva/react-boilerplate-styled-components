'user strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../css/reset.css';

import Box from './';

storiesOf('Box', module)
  .add('with', () => <Box title='Test Story Register' text='First time using of caffeine.' />);
