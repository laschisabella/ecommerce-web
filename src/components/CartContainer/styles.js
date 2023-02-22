import styled from 'styled-components';
import { mobile } from '../../responsive'

export const Container = styled.div`
  padding: 20px;
  margin: 200px;
  background-color:lightgray;

  ${mobile({
  background: "red"
})};


  h1 {
    text-align: center;
  }

  .top {

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: gray;
    margin: 20px 0;

    button {
      padding: 10px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .bottom {

  display: flex;

  .product {
    flex: 3;
    display: flex;
    justify-content: space-between;

    .productDetails {
      flex: 2;
      display: flex;
      background-color: pink;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50 %;
        object-fit: cover;
      }
    }

    .priceDetails {
      flex: 1;
      display: flex;
      justify - content: center;
      align - items: center;
      gap: 20px;
      background - color: pink;

      div {
        display: flex;
        align - items: start;
        gap: 20px;

        font - size: 30px;
      }
    }
  }

  .summary {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background - color: white;
  }

  }
`

export const ProductSize = styled.div`

  `
export const ProductColor = styled.div`

  `