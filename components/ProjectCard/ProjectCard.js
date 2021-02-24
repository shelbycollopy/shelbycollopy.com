import styled from "@emotion/styled";

export const ProjectName = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: green;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectClient = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
  text-align: left;
`;

export const ProjectCard = styled.div`
  padding: 18px 18px 24px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  width: 33%;
  min-height: 200px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  position: relative;

  :hover {
    border-radius: 4px;
    border-color: green;
  }

  img {
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
