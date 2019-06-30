import styled from 'styled-components';
import { connect } from 'react-redux';
import Content from './Content';
import Aside from './Aside';

class Project extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content />
        <Aside />
      </Wrapper>
    );
  }
}

export default connect(null)(Project);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.white.value};
`;
