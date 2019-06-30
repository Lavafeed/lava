import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from '../common/Link';

class AppOverlay extends React.Component {
  state = {
    isClosed: false
  };
  handleOutsideClick = () =>
    this.setState(({ isClosed }) => ({ isClosed: true }));

  render() {
    return (
      !this.state.isClosed && <Overlay onClick={this.handleOutsideClick} />
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(AppOverlay);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1020;
  background-color: ${props =>
    props.theme.colors.black.color.alpha(0.88).string()};
`;
