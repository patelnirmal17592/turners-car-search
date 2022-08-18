import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  bottom: 0;
  box-sizing: border box;
  height: 400px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins";
  background: #ffffff;
  color: #0076be;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 60px;
  grid-width: 80px;

  @media (max-width: 770px) {
    grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  }
  padding: 30px 30px;
`;

export const FooterLink = styled.div`
  font-family: "Poppins";
  color: #0076be;
  margin-bottom: 8px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: #b71234;
  }
`;

export const Heading = styled.div`
  font-family: "Poppins";
  font-size: 16px;
  color: #0076be;
  margin-bottom: 20px;
  font-weight: bold;
`;
