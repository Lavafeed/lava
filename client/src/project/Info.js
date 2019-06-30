import styled from 'styled-components';
import { connect } from 'react-redux';
import Router from 'next/router';
import { toggleOverlay } from '../../redux/ducks/layout';
import Icon from '../common/Icon';
import { avatar, button } from '../../shared/styles';
import Follow from '../home/Follow';

const Info = ({ ...props }) => {
  const tags = ['User Experience', 'Interaction Design', 'Animation Design'];

  const handleClose = () => {
    props.toggleOverlay();
    Router.back();
  };

  return (
    <Wrapper>
      <Header>
        <Avatar />
        <Username>Jack</Username>
        <IconBtn>
          <Icon name="more" />
        </IconBtn>
        <IconBtn onClick={handleClose}>
          <Icon name="cross" />
        </IconBtn>
      </Header>
      <Follow>Follow</Follow>
      <Details>
        <Title>IKEA Digital concept redesign</Title>
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Buttons>
          <Button>
            $ 987
            <IconWrapper>
              <Icon name="token" />
            </IconWrapper>
          </Button>
          <Button>
            590
            <IconWrapper>
              <Icon name="like" />
            </IconWrapper>
          </Button>
          <Button>
            21
            <IconWrapper>
              <Icon name="comment" />
            </IconWrapper>
          </Button>
          <RewardBtn>
            <Icon name="more" />
          </RewardBtn>
        </Buttons>
      </Details>
    </Wrapper>
  );
};

export default connect(
  state => ({}),
  dispatch => ({
    toggleOverlay: () => dispatch(toggleOverlay())
  })
)(Info);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 28px 27px;
  border-bottom: 1px solid ${props => props.theme.colors.greyBorders.value};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const Avatar = styled.div`
  ${avatar};
  height: 28px;
  width: 28px;
  margin-right: 12px;
  margin-left: 0;
`;

const Username = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #3b3a3a;
  margin-right: auto;
`;

const IconBtn = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  transition: opacity 125ms ease-in-out;
  height: 28px;
  width: 28px;
`;

const Details = styled.div`
  margin-top: 22px;
`;

const Title = styled.h3`
  font-size: 26px;
  line-height: 1.23;
  text-align: left;
  color: ${props => props.theme.colors.black.value};
  margin-bottom: 12px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  position: relative;
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.colors.inactive.value};
  margin-right: 5px;

  &:after {
    content: ',';
    position: absolute;
    right: -2px;
    bottom: 0;
    font-size: 12px;
    color: ${props => props.theme.colors.inactive.value};
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  ${button};
  position: relative;
  font-size: 12px;
  border-radius: 35px;
  padding: 8px 8px 8px 25px;
  max-height: 28px;
  color: ${props => props.theme.colors.black.value};
  border: 1px solid ${props => props.theme.colors.greyBorders.value};
  margin-right: 6px;
  line-height: 0.9;

  &:last-of-type {
    margin-right: 0;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 14px;
`;

const RewardBtn = styled(IconBtn)`
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary.value};
  height: 28px;
  width: 28px;
  margin-left: auto;
`;
