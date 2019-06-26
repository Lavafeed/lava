import Head from 'next/head';
import styled from 'styled-components';
import { mediaMax } from '../../shared/styles';

/* remove category and add FEED component */
import Categories from '../../src/explore/Categories';
import Category from '../../src/home/Category';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Lava — Explore</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Wrapper>
          <Categories />
          <Category />
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
