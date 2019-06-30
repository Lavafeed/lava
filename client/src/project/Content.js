import styled from 'styled-components';
import { connect } from 'react-redux';
import { selectOverlay } from '../../redux/ducks/layout';

const Content = ({ hasOverlay, ...props }) => (
  <Wrapper>
    <ProjectImage src="/static/img/project.jpg" hasOverlay={hasOverlay} />
  </Wrapper>
);

export default connect(state => ({
  hasOverlay: selectOverlay(state)
}))(Content);

const Wrapper = styled.div`
  overflow-y: scroll;
  min-width: 70%;
  max-width: 835px;
  width: 100%;
  background-color: ${props => props.theme.colors.white.value};

  ${props =>
    props.hasOverlay &&
    `
  border-top-left-radius: 12px;
  `}
`;

const ProjectImage = styled.img.attrs(({ src }) => ({
  src,
  alt: 'project image',
  title: 'project image'
}))`
  width: 100%;
`;
