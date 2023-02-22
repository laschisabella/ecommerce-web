import styled from 'styled-components';

export const Container = styled.div`

  padding: 50px;
  display: flex;
  justify-content: center;
  gap: 5rem;

  .imgContainer {
    display: flex;
    justify-content: flex-end;

    img {
      width: 30vw;
      height: 85vh;
      object-fit: cover;
    }
  }

  .infoContainer {
    max-width: 500px;

    h1 {
      font-weight: 400;
      font-size: 4rem;
      margin: 2rem 0;
    }

    .price {
      font-size: 3rem;
      margin: 2rem 0;
    }
  }
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;

  span {
    font-size: 25px;
    font-weight: 100;
  }

  .color {
    display: flex;
    align-items: center;
  }

`

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${props => props.variant};
`

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 30px;

  button {
    padding: 10px 20px;
    font-size: 20px;
    border: 1px solid transparent;
    background-color: teal;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
      border: 1px solid teal;
      background-color: transparent;
      color: teal;
    }
  }
`