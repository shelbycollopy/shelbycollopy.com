import styled from "@emotion/styled";

const Column = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 600px) {
    width: 100%;
  } ;
`;

export default Column;
