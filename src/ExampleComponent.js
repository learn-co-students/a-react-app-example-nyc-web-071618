import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
      <div className="example">
        <img src="https://www.petpact.com/wp-content/uploads/2014/12/happy-labrador.jpg" alt="whoa"/>
        <p>Whoa!</p>
      </div>
    );
  }
}

export default ExampleComponent;
