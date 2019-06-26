import styled from 'styled-components';
import { withRouter } from 'next/router';
import { container } from '../../shared/styles';
import Link from '../common/Link';
import CategoryIcon from './CategoryIcon';

export default withRouter(props => {
  const { pathname } = props.router;

  return (
    <Wrapper>
      <Container>
        <Collection>
          <Item to="/explore/all" active={pathname === '/explore/all'}>
            <CategoryIcon name="all" active={pathname === '/explore/all'} />
            <Heading>All</Heading>
          </Item>
          <Item to="/explore/graphic" active={pathname === '/explore/graphic'}>
            <CategoryIcon
              name="graphic"
              active={pathname === '/explore/graphic'}
            />
            <Heading>Graphic Design</Heading>
          </Item>
          <Item to="/explore/ux" active={pathname === '/explore/ux'}>
            <CategoryIcon name="ux" active={pathname === '/explore/ux'} />
            <Heading>User Experience</Heading>
          </Item>
          <Item to="/explore/ui" active={pathname === '/explore/ui'}>
            <CategoryIcon name="ui" active={pathname === '/explore/ui'} />
            <Heading>User Interface</Heading>
          </Item>
          <Item to="/explore/motion" active={pathname === '/explore/motion'}>
            <CategoryIcon
              name="motion"
              active={pathname === '/explore/motion'}
            />
            <Heading>Motion Graphic</Heading>
          </Item>
          <Item
            to="/explore/architecture"
            active={pathname === '/explore/architecture'}
          >
            <CategoryIcon
              name="architecture"
              active={pathname === '/explore/architecture'}
            />
            <Heading>Architecture</Heading>
          </Item>
          <Item to="/photography" active={pathname === '/explore/photography'}>
            <CategoryIcon
              name="photography"
              active={pathname === '/explore/photography'}
            />
            <Heading>Photography</Heading>
          </Item>
          <Item
            to="/explore/illustration"
            active={pathname === '/explore/illustration'}
          >
            <CategoryIcon
              name="illustration"
              active={pathname === '/explore/illustration'}
            />
            <Heading>Illustration</Heading>
          </Item>
          <Item to="/explore/product" active={pathname === '/explore/product'}>
            <CategoryIcon
              name="product"
              active={pathname === '/explore/product'}
            />
            <Heading>Product Design</Heading>
          </Item>
          <ItemDropdown to="#">
            <CategoryIcon name="dropdown" height="6.8" />
            <Heading>More</Heading>
          </ItemDropdown>
        </Collection>
      </Container>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  padding: 33px 0;
  border-bottom: 1px solid ${props => props.theme.colors.greyBorders.value};
`;

const Container = styled.div`
  ${container};
  width: 100%;
`;

const Collection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;
  max-width: 114px;

  ${props =>
    props.active &&
    `
    color: #3b3a3a;
    border: 1px solid #3b3a3a;

    &:svg {
      fill: #3b3a3a;
    }

    >h5 {
      color: #3b3a3a;
    }
  `}
`;

const Heading = styled.h5`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.17;
  color: ${props => props.theme.colors.inactive.value};
  white-space: nowrap;
`;

const ItemDropdown = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;
  max-width: 62px;
  background-color: ${props => props.theme.colors.lightGrey.value};
`;
