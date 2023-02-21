import styled from 'styled-components';

export const Container = styled.div`

  height: 60vh;
  background-color: lightgray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 70px;

  }

  p {
    font-size: 24px;
    margin-bottom: 20px;
  }


`
export const InputContainer = styled.div`

  width: 35%;
  height: 40px;
  background-color: white;

  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;


  input {
    border:none;
    flex:8;

    padding-left: 20px;
  }

  button {
    flex:1;
    border:none;
    background-color: teal;
    color:white;
  }
`