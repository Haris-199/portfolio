import { styled } from "styled-components";

const Head = styled.header`
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
`;

export default function Header() {
  return <Head>Header</Head>;
}
