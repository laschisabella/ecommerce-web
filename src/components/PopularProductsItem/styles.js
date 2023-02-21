import styled from 'styled-components';

export const Info = styled.div`
  opacity: 0;

  background-color: rgba(0,0,0,0.5);

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Icon = styled.div`
  font-size: 40px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 10px;
  width: 60px;
  height:60px;

  transition: all 0.5s;

  &:hover {
    background-color: gray;
    transform: scale(1.1);
  }
`

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover ${Info}{
    opacity: 1;
  }
`
