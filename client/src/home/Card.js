import styled from 'styled-components';
import Link from '../common/Link';
import Icon from '../common/Icon';
import { avatar, button } from '../../shared/styles';

export default ({ slug, avatar, username, ...props }) => (
  <ProjectLink to={`/projects/show?slug=${slug}`}>
    <Header>
      <Avatar />
      <Username>{username}</Username>
      <MoreBtn>
        <Icon name="more" />
      </MoreBtn>
    </Header>
    <Content>
      <ProjectPreview src="/static/img/artboard.png" />
      <HoverableContent>
        <Title>{props.title}</Title>
        <Comments>
          <Icon name="comment" />
          <Count>{props.comments}</Count>
        </Comments>
        <Tags>
          {props.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </HoverableContent>
    </Content>
    <Buttons>
      <Button>
        $ {props.coins}
        <IconWrapper>
          <Icon name="token" />
        </IconWrapper>
      </Button>
      <Button>
        {props.likes}
        <IconWrapper>
          <Icon name="like" />
        </IconWrapper>
      </Button>
    </Buttons>
  </ProjectLink>
);

const ProjectLink = styled(Link)`
  padding: 15px 10px 19px;
  border-radius: 14px;
  transition: 150ms ease-in-out;
  max-width: 240px;
  width: 100%;

  &:hover {
    background-color: #f6f7fb;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  ${ProjectLink}:hover & {
    ${IconWrapper} {
      opacity: 1;
    }
  }
`;

const Avatar = styled.div`
  ${avatar};
  height: 17px;
  width: 17px;
  margin-right: 12px;
  margin-left: 0;
`;

const Username = styled.span`
  font-size: 12px;
  color: #3b3a3a;
  margin-right: auto;
`;

const MoreBtn = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0;
  transition: opacity 125ms ease-in-out;

  ${ProjectLink}:hover & {
    opacity: 1;
  }
`;

const HoverableContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 14px;
  background-color: ${props =>
    props.theme.colors.primary.color.alpha(0.85).string()};
  transition: opacity 125ms ease-in-out;
  border-radius: 8px;
`;

const Title = styled.h3`
  color: ${props => props.theme.colors.white.value};
  font-weight: bold;
  margin-bottom: 6px;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: auto;
`;

const Count = styled.span`
  color: ${props => props.theme.colors.white.value};
  font-size: 12px;
  line-height: 1;
  margin-left: 6px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 1.4;
  color: ${props => props.theme.colors.secondary.value};
  margin-right: 4px;

  &:after {
    content: ',';
    position: absolute;
    right: -2px;
    bottom: 0;
    font-size: 12px;
    color: ${props => props.theme.colors.secondary.value};
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }
`;

const Content = styled.div`
  position: relative;
  object-fit: contain;
  max-width: 220px;
  max-height: 160px;
  border-radius: 8px;
  margin-bottom: 18px;

  ${ProjectLink}:hover & {
    ${HoverableContent} {
      opacity: 1;
    }
  }
`;

const ProjectPreview = styled.img.attrs(({ src }) => ({
  src,
  alt: 'project preview',
  title: 'project preview'
}))`
  width: 220px;
  max-height: 160px;
  border-radius: 8px;
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

  &:first-of-type {
    margin-right: 8px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 14px;
`;
