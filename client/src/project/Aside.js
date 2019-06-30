import styled from 'styled-components';
import { connect } from 'react-redux';
import ProjectInfo from './ProjectInfo';

class Aside extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProjectInfo />
      </Wrapper>
    );
  }
}

export default connect(null)(Aside);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.white.value};
  padding: 24px 0;
`;
