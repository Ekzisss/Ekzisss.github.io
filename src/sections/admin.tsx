import colors from '@/colors';
import React from 'react';
import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { dbGet } from '@/features/dbGet';
import { Timestamp } from 'firebase/firestore';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.background};
  gap: 2rem;
`;

const Table = styled.table`
  border: 2px solid ${colors.color};
  text-align: center;

  & td {
    padding-inline: 0.2rem;
  }

  & tr:nth-child(even) {
    background-color: ${colors.primary};
  }
`;

interface Message {
  Message: string;
  Name: string;
  Date: Timestamp;
}

const Admin: FC<propTypes> = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    dbGet('message')
      .then((item) => setMessages(item as unknown as Message[]))
      .catch(console.log);
  }, []);

  return (
    <Main>
      <Table>
        <thead>
          <tr>
            <th scope="col">Message</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((item) => (
            <tr>
              <td scope="row">{item.Message}</td>
              <td>{item.Name}</td>
              <td>{item.Date.toDate().toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Main>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {}

export default Admin;
