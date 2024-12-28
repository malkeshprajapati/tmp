import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Heading,
  Paragraph,
  Input,
  Button,
} from "../styles/welcomStyle.";

const WelcomePage = () => {
  const [username, setUsername] = useState("malkesh");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}user/exists?username=${username}`
      );
      const data = await response.json();

      if (data.exists) {
        localStorage.setItem("username", username);
        navigate("/landing");
      } else {
        setError("Username not found!");
      }
    } catch (error) {
      setError("Error checking username.");
    }
  };

  return (
    <Container>
      <Heading>Welcome to KudoSpot!</Heading>
      <Paragraph>Login to give kudos and view analytics!</Paragraph>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default WelcomePage;
