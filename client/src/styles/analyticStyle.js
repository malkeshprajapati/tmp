import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f7fc;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  gap: 30px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const TableWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  overflow-y: auto;
`;

const Titles = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #888;
  font-family: "Arial", sans-serif;
  margin-top: 20px;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export {
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
};
