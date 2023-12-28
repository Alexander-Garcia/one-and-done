import { styled } from "@mui/material"

const Container = styled('div')(() => ({
  width: '100%',
  boxShadow: '0px 4px 6px -4px #B7B9BC',
  height: 75,
}));

function Header() {
  return <Container>Hello</Container>;
}

export default Header;
