import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define a type for the ticket
interface Ticket {
  id: number;
  subject: string;
  createdDate: string; // New field for created date
}

const MyTicketsLast7Days: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5002/tickets');
        const data: Ticket[] = response.data;

        // Get the current date and the date 7 days ago
        const now = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(now.getDate() - 7);

        // Filter tickets to only include those created in the last 7 days
        const recentTickets = data.filter(ticket => {
          const ticketDate = new Date(ticket.createdDate);
          return ticketDate >= sevenDaysAgo;
        });

        setTickets(recentTickets); // Set the filtered tickets

      } catch (error) {
        console.error('There was an error fetching the tickets!', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>My Tickets Last 7 Days</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>{ticket.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyTicketsLast7Days;
