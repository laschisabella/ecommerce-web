import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react';
import { useState } from 'react';
import { sliderItems } from '../../data';
import { Arrow, Container, ImgContainer, InfoContainer, Wrapper, Slide } from './styles';




export default function Slider() {

  const [slideIndex, setSlideIndex] = useState(0)


  function handleClick(direction) {
    if (direction == 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }


  return (
    <Container>

      <Arrow direction="left" onClick={() => handleClick('left')}>
        <CaretCircleLeft />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>

        {
          sliderItems.map(item => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <img src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button>{item.button}</button>
              </InfoContainer>
            </Slide>

          ))
        }




      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick('right')}>
        <CaretCircleRight />
      </Arrow>

    </Container>
  )
}