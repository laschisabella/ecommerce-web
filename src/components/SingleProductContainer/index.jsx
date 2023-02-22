import { MinusCircle, PlusCircle } from 'phosphor-react';
import { Container, FilterContainer, FilterColor, AddContainer } from './styles';

export default function SingleProductContainer() {
  return (
    <Container>
      <div className="imgContainer">
        <img src="https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className="infoContainer">
        <h1>Saxophone</h1>
        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quod numquam quis velit saepe magnam quo, a facere. Ipsum quod tempore perspiciatis? Repellat tempore beatae soluta expedita recusandae obcaecati magnam!</div>
        <div className="price">$ 500</div>
        <FilterContainer>
          <div className="color">
            <span>Color:</span>
            <FilterColor variant="black" />
            <FilterColor variant="darkblue" />
            <FilterColor variant="gray" />
          </div>
          <span>Size</span>
          <select name="" id="" className="size">
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </FilterContainer>
        <AddContainer>
          <PlusCircle />
          <div className="amount">1</div>
          <MinusCircle />
          <button>ADD TO CART</button>
        </AddContainer>
      </div>
    </Container>
  )
}