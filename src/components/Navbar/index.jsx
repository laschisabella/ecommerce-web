import { Badge } from '@mui/material';
import { MagnifyingGlass, ShoppingCart } from 'phosphor-react';
import { Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input></Input>
            <MagnifyingGlass size={32} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOP.LOGO</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN-IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart size={32} color="#900404" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}