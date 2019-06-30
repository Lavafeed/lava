import styled from 'styled-components';
import Icon from '../common/Icon';

export default ({ ...props }) => (
  <Wrapper>
    <Heading>
      <Avatar src="/static/img/users/1.jpeg" />
      <Username>Step by step</Username>
      <PostDate>11 hours ago</PostDate>
      <MoreBtn>
        <Icon name="more" />
      </MoreBtn>
    </Heading>
    <Text>Very nice project bro! Keep it up! ;)</Text>
    <Footer>
      <ReplyBtn>
        <ReplyIcon name="reply" height="10px" />
        Reply
      </ReplyBtn>
      <Cost>$ 0.05</Cost>
      <LikeBtn>
        <Icon name="like-grey" />
      </LikeBtn>
    </Footer>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.greyBorders.value};

  &:last-of-type {
    border-bottom: 0;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img.attrs(({ src }) => ({
  src
}))`
  width: 17px;
  height: 17px;
  object-fit: cover;
  margin-right: 11px;
  border-radius: 50%;
`;

const Username = styled.span`
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.black.value};
  margin-right: 11px;
`;

const PostDate = styled.span`
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.inactive.value};
  margin-right: auto;
`;

const MoreBtn = styled.button``;

const Text = styled.p`
  line-height: 1.21;
  padding-left: 28px;
  margin-bottom: 14px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
`;

const ReplyBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.17;
  color: ${props => props.theme.colors.inactive.value};
  margin-right: auto;
`;

const ReplyIcon = styled(Icon)`
  && {
    margin-right: 8px !important;
  }
`;

const Cost = styled.span`
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.inactive.value};
  margin-right: 18px;
`;

const LikeBtn = styled.button``;
