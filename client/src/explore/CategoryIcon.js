import styled from 'styled-components';

export default ({ height, name, active, handleClick, ...props }) => {
  return (
    <Icon onClick={handleClick} height={height}>
      <use
        xlinkHref={`../../static/img/icons/category_sprite.svg#${name}${
          active ? '-active' : ''
        }`}
      />
    </Icon>
  );
};

const Icon = styled.svg.attrs(() => ({
  role: 'presentation'
}))`
  display: block;
  object-fit: contain;
  max-width: 26px;
  margin-bottom: 8px;
  cursor: pointer;
  height: ${props => (props.height ? props.height : '24px')};
`;
