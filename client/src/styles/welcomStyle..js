import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #e7f7ff;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
  font-family: "Arial", sans-serif;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
  }
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

  &:hover {
    background-color: #2980b9;
  }
`;

export { Container, Heading, Paragraph, Input, Button };
