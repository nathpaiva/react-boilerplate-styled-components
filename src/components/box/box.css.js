import styled from 'styled-components';
// import img from '../../images/watermelon-shark.jpg';


export const Title = styled.h1`
  color: rebeccapurple;
  font-size: 40px;

  @media (max-width: 700px) {
    background: palevioletred;
  }
`;

export const Subtitle = styled.small`
  color: #414141;
  font-size: 20px;
  display: block;

  &::before {
    content: '';
    background-color: red;
    width: 20px;
    height: 20px;
    display: inline-block;
  }

  @media (max-width: 700px) {
    color: palevioletred;
    background: rebeccapurple;
  }
`;
