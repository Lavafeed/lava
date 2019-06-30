import styled from 'styled-components';
import Head from 'next/head';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { selectOverlay, toggleOverlay } from '../../redux/ducks/layout';
import { container } from '../../shared/styles';
import Project from '../../src/project/Project';

class ShowProject extends React.Component {
  static async getInitialProps({
    query: { slug },
    reduxStore: { getState, dispatch }
  }) {
    // const promises = [];
    // promises.push(dispatch(load(slug)));
    // await Promise.all(promises);

    const state = getState();

    // const project = getData(state);
    // const isWatched = getIsWatched(state);
    // const authorized = getAuthorized(state);
    // if (!isWatched && authorized) {
    //   await dispatch(watched(slug));
    // }

    return {
      slug
      // project,
    };
  }

  componentDidMount() {
    this.props.toggleOverlay();
  }

  render() {
    const { hasOverlay } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Project info</title>
        </Head>
        <Container hasOverlay={hasOverlay}>
          <Project />
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    hasOverlay: selectOverlay(state)
  }),
  dispatch => ({
    toggleOverlay: () => dispatch(toggleOverlay())
  })
)(withRouter(ShowProject));

const Container = styled.div`
  ${props =>
    props.hasOverlay &&
    `
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1021;
    width: 100%;
    max-width: 1206px;
  `}
`;
