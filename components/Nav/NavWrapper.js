import styled from "@emotion/styled";

export const NavWrapper = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 5px #ccc;
  background: white;

  @media (prefers-color-scheme: dark) {
    background: black;
    color: white;
    box-shadow: 0 0 1px green;
  }
`;
