import styled from 'styled-components';

export default ({ height, name, active, handleClick, ...props }) => {
  return (
    <Icon onClick={handleClick} height={height}>
      <use
        xlinkHref={`../../static/img/icons/ui_sprite.svg#${name}${
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
  max-width: 16px;
  height: ${props => (props.height ? props.height : '12px')};
  margin-right: 16px;
  cursor: pointer;

  &:last-of-type {
    margin: 0;
  }
`;
