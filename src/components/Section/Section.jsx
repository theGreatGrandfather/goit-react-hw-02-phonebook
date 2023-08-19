import React from 'react';
import PropTypes from 'prop-types';

import { SectionElemet, Title } from './Section.styled';

const Section = ({title, children}) => {

  return (
    <SectionElemet>
      <Title>
        {title}
      </Title>
      {children}
    </SectionElemet>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}

export default Section