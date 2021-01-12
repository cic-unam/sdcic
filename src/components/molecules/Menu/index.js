// SBD 1.0
// Moleculas
// Menu (Menú)

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Link from '../../atoms/Link';

// Estilo
const Container = Styled.ul`

  flex-direction: row;
  align-items: flex-start;
  padding-top: ${props => props.theme.space.thin};
  padding-left: ${props => props.theme.space.thin};

  & > li {

    display: inline;
    padding-right: ${props => props.theme.space.s};

    &:last-of-type {
      padding-right: 0;
    }
  }

`;

// Componente
const Menu = props => {

  // NOTA: Si no requiere lógica cambiar a parentesis

  return (
    <Container>
      { props.items.map((item, i) => (
        <li key={i}>
          <Link url={item.url} inverted={props.inverted ? true : false}>{item.label}</Link>
        </li>
      ))}
    </Container>
  )

}

// Parámetros
Menu.propTypes = {
  items: PropTypes.array,
  inverted: PropTypes.bool
}

// Valores predeterminados
Menu.defaultProps = {
  items: [{label: 'Item', url: '#'}],
  inverted: false
}

export default Menu;
