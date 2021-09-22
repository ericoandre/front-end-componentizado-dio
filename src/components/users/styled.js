import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const UserNameConteiner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;
export const UserGenericConteiner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;
export const StatusConteiner = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;
export const InfoUserConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;
export const ImageConteiner = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;