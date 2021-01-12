// SBD 1.0
// Átomos
// Heading (Encabezado)

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

// Estilo
const Template = Styled.div`

  color: ${props => props.color};
  font-size: ${props => props.size};
  text-align: ${props => props.align};

  font-family: ${props => props.theme.font.family.display};
  font-style: normal;
  font-weight: ${props => props.theme.font.weight.bold};

  line-height: ${props => props.theme.font.height.display};

  & > small {
    font-size: 0.5em;
  }

`;

// Estructura
const Heading = props => {

  return (
    <Template as={`h${props.level}`} size={props.size} color={props.color} align={props.align}>
        {props.children}
    </Template>
  )
};

// Parámetros
Heading.propTypes = {
  level: PropTypes.oneOf([1,2,3,4,5,6]).isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string
}

// Valores predeterminados
Heading.defaultProps = {
  level: 1,
  size: `${props => props.theme.font.size.display.small}`,
  color: `${props => props.theme.color.primary.darker}`,
  align: 'left'
}

export default Heading;
