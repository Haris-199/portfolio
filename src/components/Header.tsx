import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Head = styled.header`
  background: #222;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  &::after, &::before {
    box-sizing: content-box;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    padding-bottom: 1px;
    animation: spin 8s linear infinite;
    background-image: repeating-conic-gradient(from var(--angle), #c760ca 0%, #2c6acf 15%, #c760ca 33%);
    z-index: -2;
  }
  &::before {
    padding-bottom: 4px;
    margin-top: -1px;
    filter: blur(10px);
    opacity: 0.75;
  }
  @keyframes spin {
    from {
      --angle: 0deg;
    }
    to {
      --angle: 360deg;
    }
  }
  
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.7rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    &::before {
      cursor: default;
      pointer-events: none;
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 50%;
      top: 49%;
      translate: -50% -50%;
      background-image: linear-gradient(15deg, #000, #031e4b, #3e0d3f);
      z-index: -1;
    }
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  .name.active {
    pointer-events: none;
  }

  .active:not(.name) {
    text-decoration: underline;
    cursor: default;
    pointer-events: none;
    background-color: #222;
    position: relative;

    &::before {
      box-sizing: content-box;
      content: '';
      position: absolute;
      border-radius: 6px;
      height: 100%;
      width: 100%;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      padding: 3.5px 4px;
      background-image: linear-gradient(to right, #2c6acf, #c760ca);
      z-index: -1;
      animation: fade-in-out 1s ease-in-out infinite alternate;
      box-shadow: 
        0px 1px 40px 1px rgba(44, 106, 207, 0.4),
        0px 1px 40px 1px rgba(198, 96, 202, 0.4);
    }

    @keyframes fade-in-out {
      to {
        opacity: 0.55;
      }
    }
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: solid 2px transparent;

    &:hover {
      background-color: #222;
      color: ${(props) => props.theme.white};
    }

    &:active {
      transform: scale(0.95);
      box-shadow:
        0px 1px 40px 1px rgba(195, 208, 229, 0.4),
        0px 1px 40px 1px rgba(198, 96, 202, 0.4);
      background-image: linear-gradient(to right,#031e4b, #3e0d3f);
      background-repeat: no-repeat;
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
      <NavLink to='/' className='name'>
        <h1>Haris Siddiqui</h1>
      </NavLink>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </ul>
      </nav>
    </Head>
  );
}
