import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 40px);
  background-color: #f8f9fa;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const KudosList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 20px;
`;

const KudoItem = styled.li`
  background-color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
  color: #333;
  line-height: 1.5;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  strong {
    display: block;
    margin-bottom: 8px;
    font-size: 1.2rem;
    color: #2c3e50;
  }
`;

const KudoMessage = styled.p`
  font-style: italic;
  color: #2980b9;
  margin-top: 8px;
  font-size: 1rem;
`;

const KudoReason = styled.p`
  font-size: 1rem;
  color: #27ae60;
  margin-top: 8px;
  font-style: normal;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Arial", sans-serif;
  margin-top: 20px;

  &:hover {
    background-color: #2980b9;
  }
`;

export {
  Container,
  Title,
  KudosList,
  KudoItem,
  Button,
  KudoMessage,
  KudoReason,
};
