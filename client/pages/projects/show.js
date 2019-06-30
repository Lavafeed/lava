import styled from 'styled-components';
import Head from 'next/head';
import { withRouter } from 'next/router';
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

  render() {
    console.log('---', this.props.router);
    return (
      <React.Fragment>
        <Head>
          <title>random</title>
        </Head>
        <Container>
          <Project />
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ShowProject);

const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1021;
  width: 100%;
  max-width: 1206px;
`;
