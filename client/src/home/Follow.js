import styled from 'styled-components';
import { connect } from 'react-redux';
import { button } from '../../shared/styles';

class Follow extends React.Component {
  render() {
    return <Button>{this.props.children}</Button>;
  }
}

export default connect(null)(Follow);

const Button = styled.button`
  ${button};
  border-radius: 35px;
  background-color: ${props => props.theme.colors.black.value};
  color: ${props => props.theme.colors.white.value};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  padding: 7px 20px 8px;
  max-width: 68px;
  margin-left: 24px;
`;
