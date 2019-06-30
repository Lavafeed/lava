import styled from 'styled-components';
import { connect } from 'react-redux';
import { button, container } from '../../shared/styles';
import { toggleOverlay, selectOverlay } from '../../redux/ducks/layout';

import Icon from '../common/Icon';
import Heading from '../../src/common/Heading';
import Card from './Card';
import Follow from './Follow';

export default props => {
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
        <CategoryHead>
          <Heading>Trending</Heading>
          {/* {projects.length > 0 && <ViewMore to={this.props.to}>View More</ViewMore>} */}
          <Follow>Follow</Follow>
          <ViewMore>View More</ViewMore>
        </CategoryHead>
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
  border-bottom: 1px solid ${props => props.theme.colors.greyBorders.value};

  &:last-of-type {
    border-bottom: none;
  }
`;

const Container = styled.div`
  ${container};
  padding-top: 24px;
  padding-bottom: 38px;
`;

const CategoryHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const ViewMore = styled.button`
  ${button};
  position: relative;
  margin-left: auto;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.17;
  text-align: right;
  color: ${props => props.theme.colors.black.value};
  width: 100%;
  max-width: 95px;

  &::before {
    content: '';
    background: url('/static/img/icons/ui/plus.svg') no-repeat center center;
    background-color: ${props => props.theme.colors.white.value};
    background-size: 8px;
    position: absolute;
    display: flex;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.greyBorders.value};
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CustomIcon = styled(Icon)`
  border: 5px solid red;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
