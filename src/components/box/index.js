'user strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Title, Subtitle } from './box.css';

const Box = ({ title, text }) => (
  <Title>
    {title} and
    {console.log('​title', title)};
    <Subtitle>
      {text}
    </Subtitle>
  </Title>
);

Box.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Box;
