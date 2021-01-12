// SDCIC 1.0
// Átomos
// Button (Botón)

// import React from 'react';
// import PropTypes from 'prop-types';
import Styled, {css} from 'styled-components';

// Estilo
const Button = Styled.button`

  /* Recuadro */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${props => props.theme.space.s} ${props => props.theme.space.ml};
  background: ${props => props.disabled ? props.theme.color.secondary.lighter : props.theme.color.primary.base};
  border: 2px solid ${props => props.disabled ? props.theme.color.secondary.lightest : props.theme.color.primary.lightest};
  border-radius: 10px;
  box-shadow: 0px ${props => props.theme.effect.shadow.Y} ${props => props.disabled ? props.theme.effect.shadow.disabled : props.theme.effect.shadow.blur} ${props => props.theme.color.primary.darker};

  /* Texto */

  color: ${props => props.theme.color.base.white};

  font-family: ${props => props.theme.font.family.text};
  font-style: normal; /* Quizá falta esta variabe */
  font-weight: ${props => props.theme.font.weight.regular};
  font-size: ${props => props.theme.font.size.text.medium};
  line-height: ${props => props.theme.font.height.text};

  text-align: center;

  ${props => !props.disabled &&

    css`&:hover {
      cursor: pointer;
      background: ${props => props.theme.color.primary.light};
      box-shadow: 0px ${props => props.theme.effect.shadow.hover.Y} ${props => props.theme.effect.shadow.blur} ${props => props.theme.color.primary.darker};
      transform: translateY(-2px);

    }`
  }
`;

// // Parámetros
// Link.propTypes = {
//   href: PropTypes.string,
// }
//
// // Valores predeterminados
// Link.defaultProps = {
//   href: '#',
// }

export default Button;
