import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;

  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Info = styled.div`

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    padding: 10px 30px;

    font-size: 3rem;
    font-weight: 900;

    background-color: rgba(0,0,0,0.8);
    color:white;
  }
`