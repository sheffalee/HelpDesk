// State Pattern - TicketStateContext.js
class TicketStateContext {
    constructor() {
      this.currentState = null;
    }
  
    setState(state) {
      this.currentState = state;
    }
  
    getState() {
      return this.currentState;
    }
  }
  
  // State Pattern - TicketStates.js
  class TicketState {
    constructor(context) {
      this.context = context;
    }
  
    changeState(newState) {
      this.context.setState(newState);
    }
  }
  
  class OpenState extends TicketState {
    constructor(context) {
      super(context);
      console.log('Ticket is in Open state');
    }
  
    closeTicket() {
      this.changeState(new ClosedState(this.context));
    }
  }
  
  class ClosedState extends TicketState {
    constructor(context) {
      super(context);
      console.log('Ticket is in Closed state');
    }
  }
  
  // React Component using State Pattern
  const TicketComponent = () => {
    const context = new TicketStateContext();
    const initialState = new OpenState(context);
    const [currentState, setCurrentState] = useState(initialState);
  
    const handleCloseTicket = () => {
      currentState.closeTicket();
      setCurrentState(context.getState());
    };
  
    return (
      <div>
        <h2>Ticket Status: {currentState.constructor.name}</h2>
        {currentState.constructor.name === 'OpenState' && (
          <button onClick={handleCloseTicket}>Close Ticket</button>
        )}
      </div>
    );
  };
  