import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Container,
  ContentWrapper,
  SectionWrapper,
  ChartWrapper,
  TableWrapper,
  Titles,
  Message,
  Table,
  TableHeader,
  TableCell,
} from "../styles/analyticStyle";
import { Button } from "../styles/kudosStyle";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Kudos Received",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  });

  const [userAnalytics, setUserAnalytics] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      fetch("https://tmp-rouge.vercel.app/kudos/all")
        .then((response) => response.json())
        .then((kudos) => {
          const userKudos = kudos.filter((kudo) => kudo.recipient === username);

          const kudosCount = {};
          userKudos.forEach((kudo) => {
            if (!kudosCount[kudo.message]) {
              kudosCount[kudo.message] = 0;
            }
            kudosCount[kudo.message]++;
          });

          setUserAnalytics(kudosCount);

          setData({
            labels: Object.keys(kudosCount),
            datasets: [
              {
                label: "Kudos Received",
                data: Object.values(kudosCount),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              },
            ],
          });
        });
    }
    fetch("https://tmp-rouge.vercel.app/user/all")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container>
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <Button onClick={() => navigate("/landing")}>Go to Dashboard</Button>
      </div>
      <ContentWrapper>
        <Titles>Analytics</Titles>
        <SectionWrapper>
          {userAnalytics ? (
            <ChartWrapper>
              <Bar data={data} />
            </ChartWrapper>
          ) : (
            <Message>No kudos data available for this user.</Message>
          )}
          <TableWrapper>
            <Titles>User Kudos Count</Titles>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Kudos Count</TableHeader>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.kudosCount}</TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </SectionWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Analytics;
