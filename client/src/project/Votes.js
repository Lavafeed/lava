import styled from 'styled-components';
import { button, buttonPrimary } from '../../shared/styles';
import Icon from '../common/Icon';
import Comments from './Comments';

export default ({ ...props }) => {
  const users = [
    {
      avatar: '/static/img/users/3.jpeg',
      name: 'Petrogradweb'
    },
    {
      avatar: '/static/img/users/2.jpeg',
      name: 'Step by step'
    },
    {
      avatar: '/static/img/users/1.jpeg',
      name: 'Steve romero'
    }
  ];
  return (
    <Wrapper>
      <Buttons>
        <VoteBtn>
          Vote
          <IconWrapper>
            <Icon name="like-white" />
          </IconWrapper>
        </VoteBtn>
        <BtnsAdditional>
          <GreyBtn>
            <Icon name="save" height="16" />
          </GreyBtn>
          <GreyBtn>
            <Icon name="share" height="16" />
          </GreyBtn>
        </BtnsAdditional>
      </Buttons>
      <Upvotes>
        <UsersAvatars>
          {users.map(user => (
            <Avatar src={user.avatar} key={user.name} />
          ))}
        </UsersAvatars>
        <UpvotesQuantity>87+</UpvotesQuantity>
        <Caption>
          <BoldCaption>{users[0].name}</BoldCaption>,{' '}
          <BoldCaption>{users[1].name}</BoldCaption>,{' '}
          <BoldCaption>{users[2].name}</BoldCaption> and{' '}
          <BoldCaption>{users.length}</BoldCaption> upvoted
        </Caption>
      </Upvotes>
      <Comments />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px 28px 0;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const VoteBtn = styled.button`
  ${buttonPrimary};
  position: relative;
  max-width: 101px;
  width: 100%;
  padding: 17px 0 17px 16px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.17;
  text-transform: uppercase;
  margin-right: auto;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 24px;
`;

const BtnsAdditional = styled.div`
  display: flex;
  align-items: center;
`;

const GreyBtn = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  transition: opacity 125ms ease-in-out;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightGrey.value};
  margin-right: 12px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Upvotes = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
`;

const UsersAvatars = styled.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
`;

const Avatar = styled.img.attrs(({ src }) => ({
  src
}))`
  position: relative;
  height: 33px;
  width: 33px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.colors.white.value};
  margin-left: -12px;

  &:first-of-type {
    border: 3px solid transparent;
    margin-left: 0;
  }
`;

const UpvotesQuantity = styled.div`
  ${button};
  border: 1px solid ${props => props.theme.colors.greyBorders.value};
  padding: 6px 0;
  max-height: 28px;
  width: 100%;
  max-width: 42px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.17;
  color: ${props => props.theme.colors.black.value};
  margin-right: 12px;
`;

const Caption = styled.span`
  font-size: 12px;
  line-height: 1.17;
  text-align: left;
  color: #3b3a3a;
`;

const BoldCaption = styled.span`
  font-weight: bold;
`;
