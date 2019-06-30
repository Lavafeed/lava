import styled from 'styled-components';
import { connect } from 'react-redux';

class Content extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProjectImage src="/static/img/project.jpg" />
      </Wrapper>
    );
  }
}

export default connect(null)(Content);

const Wrapper = styled.div`
  overflow-y: scroll;
  min-width: 70%;
  max-width: 835px;
  width: 100%;
  border-top-left-radius: 12px;
  background-color: ${props => props.theme.colors.white.value};
`;

const ProjectImage = styled.img.attrs(({ src }) => ({
  src,
  alt: 'project image',
  title: 'project image'
}))`
  width: 100%;
`;
