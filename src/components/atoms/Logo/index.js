// SBD 1.0
// Átomos
// Icon (Icono)

import React from 'react';
import PropTypes from 'prop-types';

import logos from '../../../assets/logos.svg';

// Estructura
const Logo = props => (
  <svg style={{ color: props.color, fontSize: props.size }} width="1em" height="1em">
    <use href={`${logos}#${props.name}`} />
  </svg>
);

// Parámetros
Logo.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}

// Valores predeterminados
Logo.defaultProps = {
  name: 'soft4pilot',
  color: 'black',
  size: '64px'
}

export default Logo;
