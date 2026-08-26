import { styled } from 'styled-components';

const Divider = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  max-width: 900px;
  background: linear-gradient(
    to right, 
    transparent, 
    ${(props) => props.theme.text || '#555'}, 
    transparent
  );
  opacity: 0.25;
`;

export default Divider;
