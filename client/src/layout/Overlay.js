import { connect } from 'react-redux';
import { selectOverlay, toggleOverlay } from '../../redux/ducks/layout';
import styled from 'styled-components';
import Link from '../common/Link';

const AppOverlay = ({ hasOverlay, toggleOverlay }) =>
  hasOverlay && <Overlay onClick={toggleOverlay} />;

export default connect(
  state => ({
    hasOverlay: selectOverlay(state)
  }),
  dispatch => ({
    toggleOverlay: () => dispatch(toggleOverlay())
  })
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
