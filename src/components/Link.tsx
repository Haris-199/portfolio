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
    background-image: linear-gradient(to right, #2c6acf, #c760ca);
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    transform-origin: bottom left;
  }
  &::after {
    height: 4px;
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
