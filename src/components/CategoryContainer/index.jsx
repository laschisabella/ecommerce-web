import { categories } from '../../data';
import CategoriesItem from '../CategoryItem';
import { Container } from './styles';

export default function Categories() {
  return (
    <Container>
      {
        categories.map(item => (
          <CategoriesItem key={item.id} item={item} />
        ))
      }
    </Container>
  )
}