// Composite Pattern - CompositeTicket.js
class CompositeTicket {
    constructor() {
      this.tickets = [];
    }
  
    add(ticket) {
      this.tickets.push(ticket);
    }
  
    remove(ticket) {
      this.tickets = this.tickets.filter(t => t !== ticket);
    }
  
    getAllTickets() {
      return this.tickets;
    }
  }
  