import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Head = styled.header`
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
`;

export default function Header() {
  return (
    <Head>
      Header
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/'>Contact</Link>
        </ul>
      </nav>
    </Head>
  );
}
