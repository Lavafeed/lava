import Head from 'next/head';
import styled from 'styled-components';
import { mediaMax } from '../shared/styles';

import Feed from '../src/home/Feed';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Lava — Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Wrapper>
          <Feed />
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  ${mediaMax.tablet`
    margin: 0;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 81px;
  `}
`;
