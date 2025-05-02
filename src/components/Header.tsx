import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Head = styled.header`
  background-image: linear-gradient(75deg, #203e7d, #2150b6);

  padding: 1rem;
  box-shadow: 0px 1px 5px black;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    text-shadow: 1px 1px 4px ${(props) => props.theme.black};
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  .active {
    text-decoration: underline;
    cursor: default;
    pointer-events: none;
    background-color: #2b5ac1;
    border: solid 2px #0c3ea9;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    border: solid 2px transparent;

    &:hover {
      background-color: #2b5ac1;
      border: solid 2px #0c3ea9;
      color: ${(props) => props.theme.white};
    }
  }
`;

export default function Header() {
  return (
    <Head>
      <div className='logo'>
        <h1>Haris Siddiqui</h1>
      </div>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='501'>Contact</NavLink>
        </ul>
      </nav>
    </Head>
  );
}
