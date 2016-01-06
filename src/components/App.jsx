import React, { Component } from 'react';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
          messages: [
              '1234',
              '5678'
          ]  
        };
    }
    
    render() {
        var messageNodes = this.state.messages.map((message, i) => {
            return (
                <div style={{color: 'blue'}} key={i}>{message}</div>
            );         
        });
        
        return (
            <div>{messageNodes}</div>
        );
    }
}

export default App;