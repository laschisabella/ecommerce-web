import { HeartStraight, MagnifyingGlass, ShoppingCart } from 'phosphor-react';
import { Container, Info, Icon } from './styles';

export default function PopularProductsItem({ item }) {
  return (
    <Container>
      <img src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <MagnifyingGlass />
        </Icon>
        <Icon>
          <HeartStraight />
        </Icon>
      </Info>
    </Container>
  )
}