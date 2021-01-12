// SBD 1.0
// Átomos
// Marca (Brand)

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Logo from '../../atoms/Logo';

// Estilo
const Container = Styled.a`

  &:hover {
    cursor: pointer;
  }

`;

// Componente
const Brand = props => {

  return (
    <Container href={props.url} target="_blank">
      <Logo name={props.logo} size={props.size} color={props.color}/>
    </Container>
  )

}

// Parámetros
Brand.propTypes = {
  logo: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string,
  target: PropTypes.string
}

// Valores predeterminados
Brand.defaultProps = {
  logo: 'soft4pilot',
  size: '64px',
  href: '#'
}

export default Brand;
