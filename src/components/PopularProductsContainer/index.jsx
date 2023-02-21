import { popularProducts } from '../../data';
import PopularProductsItem from '../PopularProductsItem';
import { Container } from './styles';

export default function PopularProductsContainer() {
  return (
    <Container>
      {
        popularProducts.map(item => (
          <PopularProductsItem key={item.id} item={item} />
        ))
      }
    </Container>
  )
}