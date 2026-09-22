import { styled } from "styled-components";

const Link = styled.a`
  width: max-content;
  color: ${(props) => props.theme.grey};
  text-decoration: none;

  display: inline-flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.grey};

  position: relative;
  &::before, 
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -1.5px;
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.pink}
    );
    transform: scaleX(0);

    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: bottom left;
    will-change: transform;
    backface-visibility: hidden;
  }
  
  &::after {
    height: ${(props) => props.theme.isDark ? '4px' : '2px'};
    filter: blur(5px);
    opacity: 0.8;
  }

  &:hover::before,
  &:focus-visible::before,
  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }
`;

export default Link;
