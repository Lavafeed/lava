import styled from 'styled-components';
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
      <Card {...params} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
