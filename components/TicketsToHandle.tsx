import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

interface Ticket {
  id: number;
  requester: string;
  subject: string;
  agent: string;  // This should contain 'Unassigned' when no agent is assigned
  status: string;
  lastMessage: string;
  createdDate:string;
  agentEmail:string;
}

const TicketsToHandle: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5002/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  // Filter tickets to show only those that are open and have no assigned agent
  const filteredTickets = tickets.filter(ticket => 
    ticket.status === 'Open' && ticket.agent === 'unassigned'
  );

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Tickets to Handle
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Requester</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTickets.map(ticket => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.requester}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{ticket.agent}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>{ticket.lastMessage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TicketsToHandle;
