// SDCIC 1.0
// Átomos
// Link (Enlace)

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
// NOTA: Quizá deba importar aquí el objeto Link del Router para utilizar <Link to> en lugar de <a href></a>

// Estilo
const Container = Styled.a`

  font-family: ${props => props.theme.font.family.text};
  font-style: normal; /* Quizá falta esta variabe */
  font-weight: ${props => props.theme.font.weight.regular};
  font-size: ${props => props.theme.font.size.text.medium};
  line-height: ${props => props.theme.font.height.text};

  text-decoration: none;
  color: ${props => props.inverted ? props.theme.color.base.white : props.theme.color.primary.darker};

  &:hover {
      text-decoration: underline;
      color: ${props => props.inverted ? props.theme.color.primary.lightest : props.theme.color.primary.dark};
      cursor: pointer;
  }
`;

// Componente
const Link = props => (

  <Container href={props.url} inverted={props.inverted ? true : false}>{props.children}</Container>

);

// Parámetros
Link.propTypes = {
  url: PropTypes.string,
  inverted: PropTypes.bool
}

// Valores predeterminados
Link.defaultProps = {
  url: '#',
  inverted: true
}

export default Link;
