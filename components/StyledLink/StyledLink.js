import styled from "@emotion/styled";

const StyledLink = styled.a`
  padding: 20px 70px;
  background-color: green;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 40px;
  margin: 0;

  :hover {
    color: white;
    text-decoration: none;
    background-color: limegreen;
    transition: 0.25s;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    letter-spacing: 0.05em;
  }
`;

export default StyledLink;
