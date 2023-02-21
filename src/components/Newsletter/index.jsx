import { PaperPlaneRight } from 'phosphor-react';
import { Container, InputContainer } from './styles';

export default function Newsletter() {
  return (
    <Container>
      <h1>Newletter</h1>
      <p>Get timely updates from your favorite products!</p>
      <InputContainer>
        <input type="text" placeholder="Your email" />
        <button>
          <PaperPlaneRight />
        </button>
      </InputContainer>
    </Container>
  )
}