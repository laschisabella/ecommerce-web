import { Container, Info } from './styles';

export default function CategoriesItem({ item }) {
  return (
    <Container>
      <img src={item.img} />
      <Info>
        <button>{item.title}</button>
      </Info>
    </Container>
  )
}