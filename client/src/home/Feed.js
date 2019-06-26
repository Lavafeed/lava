import styled from 'styled-components';
import { button, container } from '../../shared/styles';

import Icon from '../common/Icon';
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
      <Container>
        <Cards>
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
          <Card {...params} />
        </Cards>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  ${container};
  padding-top: 24px;
  padding-bottom: 24px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
