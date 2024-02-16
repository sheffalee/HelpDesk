// Observer Pattern - TicketStatusSubject.js
class TicketStatusSubject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(status) {
      this.observers.forEach(observer => observer.update(status));
    }
  }
  
  // Observer Pattern - TicketStatusObserver.js
  class TicketStatusObserver {
    constructor() {
      this.status = null;
    }
  
    update(status) {
      this.status = status;
      console.log(`Ticket status updated: ${status}`);
      // Perform actions based on the updated status
    }
  }
  