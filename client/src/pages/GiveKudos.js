import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormWrapper,
  Title,
  Select,
  Input,
  Button,
} from "../styles/kudosStyle";

const GiveKudos = () => {
  const [users, setUsers] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("");
  const kudos = [
    "Helping Hand",
    "Excellence",
    "Above and Beyond",
    "Client Focus",
  ];
  const sender = localStorage.getItem("username");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://tmp-rouge.vercel.app/kudos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender, recipient, message, reason }),
    })
      .then((response) => response.json())
      .then((data) => alert("Kudos sent!"));
  };

  useEffect(() => {
    fetch("https://tmp-rouge.vercel.app/user/all")
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter((user) => user.name !== sender);
        setUsers(filteredUsers);
      });
  }, []);

  return (
    <Container>
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <Button onClick={() => navigate("/landing")}>Go to Dashboard</Button>
      </div>
      <FormWrapper>
        <Title>Give Kudos</Title>
        <form onSubmit={handleSubmit}>
          <Select
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          >
            <option value="" disabled>
              Select user to give kudos
            </option>
            {users.map((user) => (
              <option key={user._id} value={user.name}>
                {user.name}
              </option>
            ))}
          </Select>

          <Select
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Kudos Badge
            </option>
            {kudos.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>

          <Input
            type="text"
            placeholder="Reason for kudos"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />

          <Button type="submit">Send Kudos</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default GiveKudos;
