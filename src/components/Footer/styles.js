import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;

    .left {
      flex: 1;

      margin: 20px;

      span {
        font-size: 50px;
        font-weight: 900;
        display: inline-block;
        margin-bottom: 15px;
      }
      
      div {
        display: flex;
        gap: 15px;
        margin: 15px 0;
      }

    }

    .center {
      flex: 1;
    }

    .right {
      flex: 1;
    }
`

export const SocialLogo = styled.footer`
  font-size: 60px;
`