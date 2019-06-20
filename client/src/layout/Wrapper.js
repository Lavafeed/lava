// import { connect } from 'react-redux';
import styled from 'styled-components';

class Wrapper extends React.Component {
  timer = null;

  static defaultProps = {
    scrollClassName: 'scroll',
    lockClassName: 'locked'
  };

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.overlay !== nextProps.overlay) {
  //     this.toggleOverlayClass(nextProps.overlay);
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (this.timer) {
  //     clearTimeout(this.timer);
  //   }

  //   if (!document.body.classList.contains(this.props.scrollClassName)) {
  //     document.body.classList.add(this.props.scrollClassName);
  //   }
  //   this.timer = setTimeout(() => {
  //     document.body.classList.remove(this.props.scrollClassName);
  //   }, 300);
  // };

  // toggleOverlayClass = overlay => {
  //   if (overlay) {
  //     document.body.classList.add(this.props.lockClassName);
  //   } else {
  //     document.body.classList.remove(this.props.lockClassName);
  //   }
  // };

  render() {
    return <App id="app">{this.props.children}</App>;
  }
}

const App = styled.div`
  margin-top: 60px;
  background-color: ${props => props.theme.colors.bg.value};
`;

export default Wrapper;

// export default connect(state => ({
//   overlay: hasOverlay(state)
// }))(Wrapper);
