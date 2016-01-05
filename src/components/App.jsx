import React from 'react';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
          messages: [
              'Hello, World!',
              'Hello, Earth!'
          ]  
        };
    }
    
    render() {
        var messageNodes = this.state.messages.map((message)=> {
            return (
                <div>{message}</div>
            );         
        });
        
        return (
            <div>{messageNodes}</div>
        );
    }
}

export default App;