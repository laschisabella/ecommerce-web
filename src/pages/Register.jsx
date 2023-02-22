import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/3423985/pexels-photo-3423985.jpeg');
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  .wrapper {
    width: 40%;
    background-color: white;
    padding: 50px;
  }

  h1{
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px
  }

  input {
    padding: 10px 20px;
    width: 50%;
  }

  .agreement {
    margin: 20px 50PX;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
  }
`

export default function Register() {
  return (
    <Container>
      <div className="wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form action="">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />
          <div className="agreement">By creating an account, I consent to the processing of my personal data in accordance with the <a href=""><strong>PRIVACY POLICY</strong></a>.</div>
          <button>CREATE</button>
        </form>
      </div>
    </Container>
  )
}