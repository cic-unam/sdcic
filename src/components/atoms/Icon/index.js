// SDCIC 1.0
// Átomos
// Icon (Icono)

import React from 'react';
import PropTypes from 'prop-types';

import icons from '../../../assets/icons.svg';

// Estructura
const Icon = props => (
  <svg style={{ color: props.color, fontSize: props.size }} width="1em" height="1em">
    <use href={`${icons}#${props.name}`} />
  </svg>
);

// Parámetros
Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}

// Valores predeterminados
Icon.defaultProps = {
  name: 'circle',
  color: 'black',
  size: '32px'
}

export default Icon;
