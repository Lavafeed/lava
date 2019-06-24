import styled from 'styled-components';
import Heading from '../../src/common/Heading';
import Card from './Card';

export default () => {
  const params = {
    slug: '1',
    avatar: '',
    username: 'Paul van dyke',
    title: 'IKEA Digital concept',
    comments: 21,
    tags: ['User Experience', 'Interaction Design', 'Animation Design'],
    coins: 987,
    likes: 286
  };
  return (
    <Wrapper>
      <Heading>Trending</Heading>
      <Cards>
        <Card {...params} />
      </Cards>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
