import styled from 'styled-components';
import Link from '../common/Link';
import Icon from '../common/Icon';
import { container, buttonPrimary, avatar } from '../../shared/styles';

export default ({ pathname, ...props }) => {
  return (
    <Header>
      <Container>
        <Left>
          <LogoLink to="/">
            <Logo src="/static/img/logo.svg" />
          </LogoLink>
          <Nav>
            <NavLink to="/" active={pathname === '/'}>
              Feed
            </NavLink>
            <NavLink to="/explore/all" active={pathname === '/explore/all'}>
              Explore
            </NavLink>
            <NavLink to="/artbit" active={pathname === '/artbit'}>
              ArtBit
            </NavLink>
            <NavLink to="/blog" active={pathname === '/blog'}>
              ArtBlog
            </NavLink>
          </Nav>
        </Left>
        <Right>
          <Icon name="search" active={false} />
          <Icon name="message" active={true} />
          <Icon name="notification" active={true} />
          <Button>Create project</Button>
          <Avatar />
        </Right>
      </Container>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  max-height: 60px;
  padding-top: 15px;
  padding-bottom: 16px;
  background-color: #fff;
  border-bottom: 1px solid ${props => props.theme.colors.greyBorders.value};
  width: 100%;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.3s ease;
`;

const Container = styled.div`
  ${container};
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: block;
  font-size: 0;
`;

const Logo = styled.img`
  width: auto;
  height: 28px;
  margin-right: 64px;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.inactive.value};
  margin-right: 32px;
  ${props =>
    props.active &&
    `
    font-weight: bold;
    color: #3B3A3A;
  `}
`;

const Button = styled.button`
  ${buttonPrimary};
  max-height: 28px;
  padding: 8px 24px;
  margin: 0 26px;
  font-weight: 500;
  font-size: 10px;
  white-space: nowrap;
`;

const Avatar = styled.div`
  ${avatar};
  height: 28px;
  width: 28px;
`;
