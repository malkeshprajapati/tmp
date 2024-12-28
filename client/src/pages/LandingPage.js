import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  KudosList,
  KudoItem,
  Button,
  KudoMessage,
  KudoReason,
} from "../styles/landingStyle";

const LandingPage = () => {
  const [kudos, setKudos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/kudos/all")
      .then((response) => response.json())
      .then((data) => setKudos(data));
  }, []);

  return (
    <Container>
      <Title>Landing Page</Title>
      <KudosList>
        {kudos &&
          kudos.map((kudo) => (
            <KudoItem key={kudo._id}>
              <strong>{`${kudo.sender} gave kudos to ${kudo.recipient}:`}</strong>
              <KudoMessage>"{kudo.message}"</KudoMessage>
              {kudo.reason && <KudoReason>Reason: {kudo.reason}</KudoReason>}
            </KudoItem>
          ))}
      </KudosList>

      <Button onClick={() => navigate("/give-kudos")}>Give Kudos</Button>
      <Button onClick={() => navigate("/analytics")}>Analytics</Button>
    </Container>
  );
};

export default LandingPage;
