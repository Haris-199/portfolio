import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Head = styled.header`
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1px; /* Leaves a 1px gap at the bottom for the spinning border */
    background: ${(props) => props.theme.background};
    z-index: -1;
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  &::after, &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: spin 8s linear infinite;
    background-image: repeating-conic-gradient(
      from var(--angle),
      ${(props) => props.theme.pink} 0%,
      ${(props) => props.theme.primary} 15%,
      ${(props) => props.theme.pink} 33%
    );
    z-index: -2;
  }

  &::before {
    filter: blur(10px);
    opacity: 0.75;
  }

  @keyframes spin {
    from { --angle: 0deg; }
    to { --angle: 360deg; }
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    margin: 0;
    position: relative;
    z-index: 1; 
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .name.active {
    pointer-events: none;
  }

  a {
    font-size: 1.2rem;
    color: ${(props) => props.theme.text};
    text-decoration: none;
    padding: 0.5rem 1rem;
    position: relative;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.pink};
    }

    &:active {
      transform: scale(0.95);
    }

    &:not(.active):not(.name) {
      width: max-content;
      color: ${(props) => props.theme.grey};
      text-decoration: none;
      position: relative;
      align-items: center;

      &::before, 
      &::after {
        content: '';
        position: absolute;
        left: 1rem;
        right: 1rem;
        height: 2px;
        bottom: -1.5px;
        background-image: linear-gradient(
          to right,
          ${(props) => props.theme.primary},
          ${(props) => props.theme.pink}
        );
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
    }
    
  }

  .active:not(.name) {
    color: ${(props) => props.theme.text};
    pointer-events: none;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 1rem; 
      right: 1rem;
      bottom: -1.5px;
      background-image: linear-gradient(
        to right,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.pink}
      );
    }

    &::before {
      height: 2px;
    }
  }
  
  @media (min-width: 1300px) {
    padding: 1rem 5%;
  }

  @media (min-width: 2100px) {
    padding: 1rem 20%;
  }

  @media (max-width: 620px) {
    /* TODO popup for nav */
  }
`;

export default function Header() {
  return (
    <Head>
      <div className="header-bg"></div>
      <NavLink to='/' className='name'>
        <h1>Haris Siddiqui</h1>
      </NavLink>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </Head>
  );
}
