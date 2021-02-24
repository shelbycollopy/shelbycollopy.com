import styled from "@emotion/styled";

const Hero = styled.section`
  width: 100%;
  color: black;
  padding: 70px 20px 20px;

  @media (max-width: 600px) {
    padding: 120 20 20px;
  }

  @media (prefers-color-scheme: dark) {
    color: white;
    background: black;
  }
`;

export default Hero;
