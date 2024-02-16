// Factory Pattern - TicketFactory.js
class TicketFactory {
    static createTicket(id, description, status) {
      return new Ticket(id, description, status);
    }
  }
  