import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;

  position: relative;

  overflow: hidden;
`

export const Arrow = styled.div`
  font-size: 80px;
  height: 80px;
  color: purple;

  position: absolute;
  top: 50%;
  margin-top: -40px; /* half the font-size */
  
  left: ${props => props.direction === "left" && "30px"};
  right: ${props => props.direction === "right" && "30px"};

  cursor: pointer;
  z-index: 2;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;

  transform:translate(${props => props.slideIndex * -100}vw);
  transition: all 1s ease;
`

export const Slide = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100%;

  background-color: ${props => props.bg};


`

export const ImgContainer = styled.div`
  flex: 1;

  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

`
export const InfoContainer = styled.div`
  flex: 1;
  margin:20px;

  h1 {
    font-size: 70px;
  }

  p {
    margin: 20px 0;
    font-size: 30px;
    letter-spacing: 3px;
  }
  
  button {
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
  }
`