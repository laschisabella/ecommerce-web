import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { Container, SocialLogo } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="left">
        <span>SHOP.LOGO</span>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo earum, autem veniam nam iusto rem animi quam ducimus excepturi qui ad numquam, quod tenetur rerum provident eligendi ullam itaque. </p>
        <div>
          <SocialLogo>
            <FacebookLogo weight="fill" color='#385490' />
          </SocialLogo>
          <SocialLogo>
            <InstagramLogo weight="bold" color='#c50096' />
          </SocialLogo>
          <SocialLogo>
            <TwitterLogo weight="fill" color='#00a2e4' />
          </SocialLogo>
        </div>
      </div>
      <div className="center">
        Useful Links
      </div>
      <div className="right">
        Contact Info
      </div>
    </Container>
  )
}