import styled from 'styled-components';

export default ({ children, ...props }) => (
  <Wrapper>
    <Title>{children}</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  margin-right: 24px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 400;
  line-height: 1.23;
  color: #3b3a3a;
`;
