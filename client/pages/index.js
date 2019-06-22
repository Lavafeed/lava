import Head from 'next/head';
import styled from 'styled-components';
import { mediaMax, container } from '../shared/styles';

/* remove category and add FEED component */
import Category from '../src/home/Category';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Lava — Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Wrapper>
          <Container>
            <Category />
          </Container>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  // margin-left: 224px;
  // margin-right: 285px;
  padding: 24px 0;
  ${mediaMax.tablet`
    margin: 0;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 81px;
  `}
`;

const Container = styled.div`
  ${container};
`;
