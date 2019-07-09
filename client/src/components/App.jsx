import React from 'react';
import $ from 'jquery';
import Form from './Form.jsx';
import InsertConfirmation from './InsertConfirmation.jsx';
import UpdateConfirmation from './UpdateConfirmation.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Form/>
      </div>
    );
  }
}

export default App;
