import styled from 'styled-components';
import Content from './Content';
import Aside from './Aside';

export default () => (
  <Wrapper>
    <Content />
    <Aside />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.white.value};
`;
