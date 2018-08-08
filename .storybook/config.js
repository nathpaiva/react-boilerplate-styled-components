'use strict';

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src/components', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: 'Components of app',
  url: 'http://nathpaiva.com.br',
});

configure(loadStories, module);
