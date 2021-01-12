// SBD 1.0
// Átomos
// Text (Texto)

import PropTypes from 'prop-types';
import Styled from 'styled-components';

// Estilo
const Text = Styled.p`

  font-family: ${props => props.theme.font.family.text};
  font-style: normal; /* Quizá falta esta variabe */
  font-weight: ${props => props.theme.font.weight.regular};

  line-height: ${props => props.theme.font.height.text};

  color: ${props => props.color};
  font-size: ${props => props.size};
  text-align: ${props => props.align};;

`;

// Parámetros
Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string

}

// Valores predeterminados
Text.defaultProps = {
  size: `${props => props.theme.font.size.text.medium}`,
  color: `${props => props.theme.color.primary.darkest}`,
  align: 'left'
}

export default Text;
