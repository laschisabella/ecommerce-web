import { MinusCircle, PlusCircle } from 'phosphor-react';
import { Container, ProductColor, ProductSize } from './styles';

export default function CartContainer() {
  return (
    <Container>
      <h1>YOUR CART</h1>
      <div className="top">
        <button>CONTINUE SHOPPING</button>
        <div className="content">
          <p>Shopping bag (2)</p>
          <p>Your wishlist (2)</p>
        </div>
        <button>CHECKOUT NOW</button>
      </div>
      <div className="bottom">
        <div className="product">
          <div className="productDetails">
            <img src="https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>
              <h1>Product Name</h1>
              <span>Product Id : 574812</span>
              <ProductColor />
              <ProductSize>L</ProductSize>
            </div>
          </div>
          <div className="priceDetails">
            <div>
              <PlusCircle />
              <div className="amount">1</div>
              <MinusCircle />
            </div>
            <div>
              $ 500
            </div>
          </div>
        </div>
        <div className="summary">
          <h1>ORDER SUMMARY</h1>
          <div>
            <span className="priceText">Subtotal:</span>
            <span className="priceValue">$ 80</span>
          </div>
          <div>
            <span className="priceText">Estimated Shipping:</span>
            <span className="priceValue">$ 20</span>
          </div>
          <div>
            <span className="priceText">Shipping discount:</span>
            <span className="priceValue">$ -20</span>
          </div>
          <div>
            <span className="priceText">Total:</span>
            <span className="priceValue">$ 80</span>
          </div>
          <button>CHECK OUT NOW</button>
        </div>
      </div>
    </Container>
  )
}